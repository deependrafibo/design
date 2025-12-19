import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CircularProgressBar } from './CircularProgressBar';
import '@testing-library/jest-dom/vitest';

describe('CircularProgressBar Component', () => {
  it('renders correctly with default props', () => {
    render(<CircularProgressBar value={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('displays correct percentage text', () => {
    render(<CircularProgressBar value={35} />);
    expect(screen.getByText('35%')).toBeInTheDocument();
  });

  it('clamps percentage values above 100 to 100%', () => {
    render(<CircularProgressBar value={150} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('clamps percentage values below 0 to 0%', () => {
    render(<CircularProgressBar value={-20} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('renders correct stroke color for low values (<= 25%)', () => {
    const { container } = render(<CircularProgressBar value={20} />);
    const progressCircle = container.querySelector('circle[stroke-linecap="round"]');
    expect(progressCircle).toHaveAttribute('stroke', '#EA5455');
  });

  it('renders smoothly transitioning strokeDashoffset', () => {
    const { container } = render(<CircularProgressBar value={50} />);
    const progressCircle = container.querySelector('circle[stroke-linecap="round"]');
    expect(progressCircle).toHaveStyle({ transition: 'stroke-dashoffset 0.35s' });
  });
});
