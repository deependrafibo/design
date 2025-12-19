import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CardWithRadio } from './CardWithRadio';
import '@testing-library/jest-dom';

describe('CardWithRadio component', () => {
  const defaultProps = {
    title: 'Option A',
    description: 'This is a description for option A',
    selected: false,
    onClick: vi.fn(),
  };

  it('renders title and description', () => {
    render(<CardWithRadio {...defaultProps} />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('This is a description for option A')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', () => {
    render(<CardWithRadio {...defaultProps} />);
    const card = screen.getByText('Option A').closest('div'); // gets the outer card
    if (card) fireEvent.click(card);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('calls onClick when radio is clicked', () => {
    render(<CardWithRadio {...defaultProps} />);
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
