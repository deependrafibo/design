import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { OTPInput } from './OtpInput';

describe('OTPInput', () => {
  const length = 4;

  it('renders correct number of inputs', () => {
    render(<OTPInput length={length} value="" onChange={() => {}} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(length);
  });

  it('allows typing numbers and triggers onChange', () => {
    const handleChange = vi.fn();
    render(<OTPInput length={length} value="" onChange={handleChange} />);

    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: '1' } });

    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('calls onComplete when all digits are filled', async () => {
    let currentValue = '';
    const handleChange = vi.fn((val) => {
      currentValue = val;
    });
    const handleComplete = vi.fn();

    const { rerender } = render(
      <OTPInput length={4} value={currentValue} onChange={handleChange} onComplete={handleComplete} />,
    );

    const inputs = screen.getAllByRole('textbox');

    // Simulate typing each digit
    const digits = ['1', '2', '3', '4'];
    digits.forEach((digit, index) => {
      fireEvent.change(inputs[index], { target: { value: digit } });
      currentValue += digit;
      rerender(<OTPInput length={4} value={currentValue} onChange={handleChange} onComplete={handleComplete} />);
    });

    await waitFor(() => {
      expect(handleComplete).toHaveBeenCalledWith('1234');
    });
  });

  it('handles backspace correctly', () => {
    let currentValue = '12';
    const handleChange = vi.fn((val) => {
      currentValue = val;
    });

    const { rerender } = render(<OTPInput length={4} value={currentValue} onChange={handleChange} />);

    const inputs = screen.getAllByRole('textbox');

    // Backspace on second input (remove '2')
    fireEvent.keyDown(inputs[1], { key: 'Backspace' });
    rerender(<OTPInput length={4} value={currentValue} onChange={handleChange} />);
    expect(handleChange).toHaveBeenCalledWith('1');

    // Backspace on first input (remove '1')
    fireEvent.keyDown(inputs[0], { key: 'Backspace' });
    rerender(<OTPInput length={4} value={currentValue} onChange={handleChange} />);
    expect(handleChange).toHaveBeenCalledWith('');
  });

  it('does not accept letters when isNumberOnly is true', () => {
    const handleChange = vi.fn();
    render(<OTPInput length={4} value="" onChange={handleChange} isNumberOnly />);

    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'a' } });

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders label and error message when provided', () => {
    render(
      <OTPInput length={4} value="" onChange={() => {}} label="Enter OTP" hasError errorMessage="OTP is incorrect" />,
    );

    expect(screen.getByText('Enter OTP')).toBeInTheDocument();
    expect(screen.getByText('OTP is incorrect')).toBeInTheDocument();
  });

  it('handles pasting full OTP', async () => {
    const handleChange = vi.fn();
    const handleComplete = vi.fn();

    render(<OTPInput length={4} value="" onChange={handleChange} onComplete={handleComplete} />);

    const inputs = screen.getAllByRole('textbox');

    fireEvent.paste(inputs[0], {
      clipboardData: {
        getData: () => '1234',
      },
      preventDefault: () => {},
    });

    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith('1234');
      expect(handleComplete).toHaveBeenCalledWith('1234');
    });
  });
});
