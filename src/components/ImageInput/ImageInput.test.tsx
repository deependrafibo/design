import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { ImageInput } from './ImageInput';
import { User } from 'react-feather';

vi.mock('@/utils/getIcons', () => ({
  iconComponents: {
    image: () => <svg data-testid="avatar-placeholder-icon" />,
    CustomInfo: () => <svg data-testid="custom-info-icon" />,
  },
}));

describe('ImageInput Component', () => {
  it('renders with the current image if provided', () => {
    render(<ImageInput onImageSelect={vi.fn()} currentImageUrl="https://example.com/avatar.jpg" />);
    const img = screen.getByAltText('avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('displays the placeholder icon when no image is provided', () => {
    render(<ImageInput onImageSelect={vi.fn()} currentImageUrl="" />);
    const placeholderIcon = screen.getByTestId('avatar-placeholder-icon');
    expect(placeholderIcon).toBeInTheDocument();
  });

  it('renders the upload button with the correct label', () => {
    render(<ImageInput onImageSelect={vi.fn()} updateButtonLabel="Upload Picture" />);
    const button = screen.getByRole('button', { name: /Upload Picture/i });
    expect(button).toBeInTheDocument();
  });

  it('opens file input when the update button is clicked', () => {
    render(<ImageInput onImageSelect={vi.fn()} />);
    const updateButton = screen.getByRole('button', { name: /Update Picture/i });
    fireEvent.click(updateButton);

    const fileInput = screen.getByLabelText(/choose a file/i);
    expect(fileInput).toBeInTheDocument();
  });

  it('disables the button when disabled prop is true', () => {
    render(<ImageInput onImageSelect={vi.fn()} disabled={true} />);
    const button = screen.getByRole('button', { name: /Update Picture/i });
    expect(button).toBeDisabled();
  });

  it('displays custom placeholder when provided', () => {
    render(<ImageInput onImageSelect={vi.fn()} customPlaceholder={<User data-testid="custom-placeholder" />} />);
    const customPlaceholder = screen.getByTestId('custom-placeholder');
    expect(customPlaceholder).toBeInTheDocument();
  });

  it('displays string custom placeholder when provided', () => {
    render(<ImageInput onImageSelect={vi.fn()} customPlaceholder="Custom Text" />);
    const customPlaceholder = screen.getByText('Custom Text');
    expect(customPlaceholder).toBeInTheDocument();
  });
});
