import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PasswordInput } from './Password';
import '@testing-library/jest-dom';

vi.mock('@/utils/getIcons', () => ({
  iconComponents: {
    eye: () => <div data-testid="eye-open-icon">Eye Open</div>,
    eyeOff: () => <div data-testid="eye-closed-icon">Eye Closed</div>,
  },
}));

describe('PasswordInput component', () => {
  const defaultProps = {
    label: 'Password',
    placeholder: 'Enter your password',
    onchange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders label and placeholder', () => {
    render(<PasswordInput {...defaultProps} />);
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
  });

  it('masks password by default', () => {
    render(<PasswordInput {...defaultProps} />);
    expect(screen.getByTestId('eye-closed-icon')).toBeInTheDocument();
  });

  it('toggles password visibility when eye icon is clicked', () => {
    render(<PasswordInput {...defaultProps} />);
    expect(screen.getByTestId('eye-closed-icon')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('eye-open-icon')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('eye-closed-icon')).toBeInTheDocument();
  });

  it('calls onchange when input value changes', () => {
    render(<PasswordInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: 'test123' } });
    expect(defaultProps.onchange).toHaveBeenCalledWith('test123');
  });

  it('shows weak password strength for short passwords', () => {
    render(<PasswordInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: '123' } });
    expect(screen.getByText('Password strength : Weak')).toBeInTheDocument();
  });

  it('shows good password strength for longer passwords', () => {
    render(<PasswordInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: '12345678' } });
    expect(screen.getByText('Password strength : Good')).toBeInTheDocument();
  });

  it('shows strong password strength for very long passwords', () => {
    render(<PasswordInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: '1234567890' } });
    expect(screen.getByText('Password strength : Strong')).toBeInTheDocument();
  });

  it('hides strength indicator when isConfirmation is true', () => {
    render(<PasswordInput {...defaultProps} isConfirmation={true} />);
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: '1234567890' } });
    expect(screen.queryByText('Password strength')).not.toBeInTheDocument();
  });

  it('applies custom label class name', () => {
    render(<PasswordInput {...defaultProps} labelClassName="custom-label-class" />);
    const label = screen.getByText('Password');
    expect(label).toHaveClass('custom-label-class');
  });

  it('applies custom input class name', () => {
    render(<PasswordInput {...defaultProps} className="custom-input-class" />);
    const input = screen.getByPlaceholderText('Enter your password');
    expect(input).toHaveClass('custom-input-class');
  });

  it('applies custom width and height styles', () => {
    render(<PasswordInput {...defaultProps} width="400px" height="60px" />);
    const input = screen.getByPlaceholderText('Enter your password');
    expect(input).toHaveStyle({ height: '60px' });
    const container = input.parentElement?.parentElement;
    expect(container).toHaveStyle({ width: '400px' });
  });

  it('initializes with provided value', () => {
    render(<PasswordInput {...defaultProps} value="initialPassword" />);
    const maskedValue = '⚉'.repeat('initialPassword'.length);
    const input = screen.getByPlaceholderText('Enter your password') as HTMLInputElement;
    expect(input.value).toBe(maskedValue);
  });

  it('renders all four progress blocks', () => {
    render(<PasswordInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: '1234567890' } });
    expect(screen.getByText('Password strength : Strong')).toBeInTheDocument();
  });

  it('applies correct autoComplete for password field', () => {
    render(<PasswordInput {...defaultProps} autoComplete="current-password" />);
    const input = screen.getByPlaceholderText('Enter your password');
    expect(input).toHaveAttribute('autocomplete', 'current-password');
  });

  it('applies correct autoComplete for new password field', () => {
    render(<PasswordInput {...defaultProps} autoComplete="new-password" />);
    const input = screen.getByPlaceholderText('Enter your password');
    expect(input).toHaveAttribute('autocomplete', 'new-password');
  });

  it('applies correct autoComplete for confirmation password field', () => {
    render(<PasswordInput {...defaultProps} isConfirmation autoComplete="new-password" />);
    const input = screen.getByPlaceholderText('Enter your password');
    expect(input).toHaveAttribute('autocomplete', 'new-password');
  });
});
