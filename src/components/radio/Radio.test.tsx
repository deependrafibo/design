import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Radio } from './Radio';
import '@testing-library/jest-dom';

describe('RadioButton Component', () => {
  it('renders the radio button correctly', () => {
    render(<Radio checked={false} onChange={() => {}} />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('triggers onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Radio checked={false} onChange={handleChange} />);

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Radio checked={false} disabled onChange={handleChange} />);

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is checked when checked prop is true', () => {
    render(<Radio checked={true} onChange={() => {}} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('is not checked when checked prop is false', () => {
    render(<Radio checked={false} onChange={() => {}} />);

    const radio = screen.getByRole('radio');
    expect(radio).not.toBeChecked();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Radio checked={false} disabled onChange={() => {}} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });
});
