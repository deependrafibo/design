import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Toggle } from './Toggle';
import '@testing-library/jest-dom';

describe('ToggleSwitch Component', () => {
  it('renders correctly', () => {
    render(<Toggle checked={false} onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles when clicked', () => {
    const handleClick = vi.fn();
    render(<Toggle checked={false} onClick={handleClick} />);

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    expect(handleClick).toHaveBeenCalled();
  });

  it('does not trigger onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Toggle checked={false} disabled onClick={handleClick} />);

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('displays as checked when checked prop is true', () => {
    render(<Toggle checked={true} onClick={() => {}} />);
    const toggleButton = screen.getByRole('button');

    expect(toggleButton.classList.contains('bg-[#0185E4]')).toBe(true);
  });

  it('displays as unchecked when checked prop is false', () => {
    render(<Toggle checked={false} onClick={() => {}} />);
    const toggleButton = screen.getByRole('button');

    expect(toggleButton.classList.contains('bg-[#B4B7B8]')).toBe(true);
  });

  it('applies disabled styles when disabled', () => {
    render(<Toggle checked={false} disabled onClick={() => {}} />);
    const toggleButton = screen.getByRole('button');

    expect(toggleButton).toBeDisabled();
    expect(toggleButton.classList.contains('disabled:opacity-[0.4]')).toBe(true);
  });
});
