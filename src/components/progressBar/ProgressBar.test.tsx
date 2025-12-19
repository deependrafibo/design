import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from './ProgressBar';
import '@testing-library/jest-dom/vitest';

describe('ProgressBar component', () => {
  it('renders the label with percentage correctly', () => {
    render(<ProgressBar value={30} label="Complete" />);
    const label = screen.getByText('30% Complete');
    expect(label).toBeInTheDocument();
  });

  it('clamps value below 0 to 0%', () => {
    render(<ProgressBar value={-10} label="Negative" />);
    const label = screen.getByText('0% Negative');
    expect(label).toBeInTheDocument();
  });

  it('clamps value above 100 to 100%', () => {
    render(<ProgressBar value={120} label="Overflow" />);
    const label = screen.getByText('100% Overflow');
    expect(label).toBeInTheDocument();
  });

  it('applies red theme for value <= 20', () => {
    render(<ProgressBar value={10} label="Low" />);
    const filledDiv = screen.getByText('10% Low').nextSibling?.firstChild as HTMLElement;
    expect(filledDiv).toHaveClass('bg-[#EA5455]');
  });

  it('applies yellow theme for value <= 45', () => {
    render(<ProgressBar value={30} label="Mid" />);
    const filledDiv = screen.getByText('30% Mid').nextSibling?.firstChild as HTMLElement;
    expect(filledDiv).toHaveClass('bg-[#FFCC80]');
  });

  it('applies green theme for value > 45', () => {
    render(<ProgressBar value={80} label="High" />);
    const filledDiv = screen.getByText('80% High').nextSibling?.firstChild as HTMLElement;
    expect(filledDiv).toHaveClass('bg-[#28C76F]');
  });

  it('sets the correct width style for the filled bar', () => {
    render(<ProgressBar value={75} label="Progress" />);
    const filledDiv = screen.getByText('75% Progress').nextSibling?.firstChild as HTMLElement;
    expect(filledDiv).toHaveStyle({ width: '75%' });
  });
});
