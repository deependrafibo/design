import { render, screen, fireEvent } from '@testing-library/react';
import { Grade } from './Grade';

describe('Grade', () => {
  it('renders the grade value correctly', () => {
    render(<Grade value="A" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders without wrapper div when onClick is not provided', () => {
    const { container } = render(<Grade value="A" />);
    const gradeElement = screen.getByText('A').parentElement;

    // Should not have a wrapper div
    expect(container.firstChild).toBe(gradeElement);
    // Should not have cursor-pointer class
    expect(gradeElement).not.toHaveClass('cursor-pointer');
  });

  it('renders with wrapper div and cursor-pointer when onClick is provided', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<Grade value="A" onClick={mockOnClick} />);
    const gradeElement = screen.getByText('A').parentElement;

    // Should have a wrapper div
    expect(container.firstChild).not.toBe(gradeElement);
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'gap-2');
    // Should have cursor-pointer class
    expect(gradeElement).toHaveClass('cursor-pointer');
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Grade value="B" onClick={mockOnClick} />);

    fireEvent.click(screen.getByText('B'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders with different grade values and their specific styles', () => {
    const { rerender } = render(<Grade value="A" />);
    let gradeElement = screen.getByText('A').parentElement;
    expect(gradeElement).toHaveClass('border-[#00BCD4]', 'text-[#00BCD4]');

    rerender(<Grade value="B" />);
    gradeElement = screen.getByText('B').parentElement;
    expect(gradeElement).toHaveClass('border-[#28C76F]', 'text-[#28C76F]');

    rerender(<Grade value="C" />);
    gradeElement = screen.getByText('C').parentElement;
    expect(gradeElement).toHaveClass('border-[#FBC02D]', 'text-[#FBC02D]');

    rerender(<Grade value="D" />);
    gradeElement = screen.getByText('D').parentElement;
    expect(gradeElement).toHaveClass('border-[#FF9F43]', 'text-[#FF9F43]');

    rerender(<Grade value="E" />);
    gradeElement = screen.getByText('E').parentElement;
    expect(gradeElement).toHaveClass('border-[#EA5455]', 'text-[#EA5455]');
  });

  it('renders with default styles', () => {
    render(<Grade value="A" />);

    const gradeElement = screen.getByText('A').parentElement;
    expect(gradeElement).toHaveClass(
      'flex',
      'items-center',
      'justify-center',
      'rounded-full',
      'border',
      'font-montserrat',
      'font-semibold',
      'border-[#00BCD4]',
      'text-[#00BCD4]',
    );

    // Check inline styles for default values
    expect(gradeElement).toHaveStyle({
      width: '28px',
      height: '28px',
      fontSize: '18px',
    });
  });

  it('renders with custom size and text size', () => {
    const customSize = 40;
    const customTextSize = 24;
    render(<Grade value="A" size={customSize} textSize={customTextSize} />);

    const gradeElement = screen.getByText('A').parentElement;
    expect(gradeElement).toHaveClass(
      'flex',
      'items-center',
      'justify-center',
      'rounded-full',
      'border',
      'font-montserrat',
      'font-semibold',
      'border-[#00BCD4]',
      'text-[#00BCD4]',
    );

    // Check inline styles for custom values
    expect(gradeElement).toHaveStyle({
      width: `${customSize}px`,
      height: `${customSize}px`,
      fontSize: `${customTextSize}px`,
    });
  });

  it('renders with default red color for unknown grade values', () => {
    // @ts-ignore - Testing invalid grade value
    render(<Grade value="X" />);

    const gradeElement = screen.getByText('X').parentElement;
    expect(gradeElement).toHaveClass('border-red-500', 'text-red-500');
  });
});
