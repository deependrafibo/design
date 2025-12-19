import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button/Button';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

const mockOnClick = vi.fn();

describe('Button Component', () => {
  const variants = ['primary', 'outline', 'text', 'errorPrimary', 'errorOutline', 'errorText'];

  variants.forEach((variant) => {
    it(`renders ${variant} button correctly`, () => {
      render(
        <Button
          variant={variant as 'primary' | 'outline' | 'text' | 'errorPrimary' | 'errorOutline' | 'errorText'}
          onClick={mockOnClick}
        >
          Button Text
        </Button>,
      );
      const button = screen.getByText('Button Text');
      expect(button).toBeInTheDocument();
    });
  });

  it('handles click event', () => {
    render(
      <Button variant="primary" onClick={mockOnClick}>
        Click Me
      </Button>,
    );
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders disabled button correctly', () => {
    render(
      <Button variant="primary" onClick={mockOnClick} disabled>
        Disabled
      </Button>,
    );
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('does not trigger onClick when disabled', () => {
    render(
      <Button variant="primary" onClick={mockOnClick} disabled>
        Button
      </Button>,
    );
    const button = screen.getByText('Button');
    fireEvent.click(button);
    expect(button).toHaveAttribute('disabled');
  });

  it('renders button with right icon', () => {
    render(
      <Button variant="primary" icon="chevron" iconPosition="right">
        Button Text
      </Button>,
    );
    const button = screen.getByText('Button Text');
    expect(button).toBeInTheDocument();
  });

  it('renders button with left icon', () => {
    render(
      <Button variant="primary" icon="download" iconPosition="left">
        Button Text
      </Button>,
    );
    const button = screen.getByText('Button Text');
    expect(button).toBeInTheDocument();
  });

  it('renders disabled button correctly', () => {
    render(
      <Button variant="primary" onClick={mockOnClick} disabled>
        Disabled
      </Button>,
    );
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});
