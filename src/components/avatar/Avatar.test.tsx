import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Avatar } from './Avatar';
import '@testing-library/jest-dom';
vi.mock('@/utils/getIcons', () => ({
  iconComponents: {
    image: () => <svg data-testid="avatar-placeholder-icon" />,
  },
}));

describe('Avatar Component', () => {
  it('renders with an image if src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="Test Avatar" />);
    const img = screen.getByAltText('Test Avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders user initials if no src is provided but has name in alt', () => {
    render(<Avatar alt="John Doe" />);
    const initials = screen.getByText('JD');
    expect(initials).toBeInTheDocument();
  });

  it('extracts correct initials from name', () => {
    render(<Avatar alt="Jane Smith Johnson" />);
    const initials = screen.getByText('JS');
    expect(initials).toBeInTheDocument();
  });

  it('renders placeholder icon if no src or valid alt text is provided', () => {
    render(<Avatar alt="" />);
    const placeholderIcon = screen.getByTestId('avatar-placeholder-icon');
    expect(placeholderIcon).toBeInTheDocument();
  });

  it('applies correct default size styles', () => {
    render(<Avatar />);
    const container = screen.getByTestId('avatar-placeholder-icon').parentElement?.parentElement;
    expect(container).toHaveStyle({ width: '80px', height: '80px' });
  });

  it('applies custom size when provided', () => {
    render(<Avatar size={100} />);
    const container = screen.getByTestId('avatar-placeholder-icon').parentElement?.parentElement;
    expect(container).toHaveStyle({ width: '100px', height: '100px' });
  });

  it('handles image loading errors by showing initials', () => {
    // Simulate image error event
    const img = screen.getByAltText('Error Test');
    fireEvent.error(img);

    // Should show initials after error
    expect(screen.getByText('ET')).toBeInTheDocument();
  });
});
