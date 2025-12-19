import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Rating } from './Rating';
import '@testing-library/jest-dom';

describe('Rating component', () => {
  it('renders the rating with one decimal place', () => {
    render(<Rating rating={4.567} />);
    const ratingText = screen.getByText('4.6');
    expect(ratingText).toBeInTheDocument();
  });

  it('renders the title when provided', () => {
    render(<Rating rating={3.2} tittle="Excellent" />);
    const titleText = screen.getByText('Excellent');
    expect(titleText).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<Rating rating={2.8} />);
    const titleText = screen.queryByText('Excellent');
    expect(titleText).not.toBeInTheDocument();
  });
});
