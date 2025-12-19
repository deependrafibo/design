import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GrowthBadge } from './GrowthBadge';

describe('GrowthBadge', () => {
  it('renders with default props', () => {
    render(<GrowthBadge percentage="10%" />);
    expect(screen.getByText('10%')).toBeInTheDocument();
  });

  it('renders with custom percentage', () => {
    render(<GrowthBadge percentage="25%" />);
    expect(screen.getByText('25%')).toBeInTheDocument();
  });

  it('formats single digits with leading zero', () => {
    render(<GrowthBadge percentage="5" />);
    expect(screen.getByText('05%')).toBeInTheDocument();
  });

  it('keeps double digits as they are', () => {
    render(<GrowthBadge percentage="15" />);
    expect(screen.getByText('15%')).toBeInTheDocument();
  });

  it('applies positive variant styles for positive values', () => {
    render(<GrowthBadge percentage="10%" />);
    const badge = screen.getByText('10%').closest('div');
    expect(badge).toHaveClass('bg-[#E5F8EE]', 'text-success-500');
  });

  it('applies negative variant styles for negative values', () => {
    render(<GrowthBadge percentage="-5%" />);
    const badge = screen.getByText('-05%').closest('div');
    expect(badge).toHaveClass('bg-[#FDEEED]', 'text-error');
  });

  it('applies neutral variant styles for zero values', () => {
    render(<GrowthBadge percentage="00" />);
    const badge = screen.getByText('00%').closest('div');
    expect(badge).toHaveClass('bg-[#FFF9EA]', 'text-yellow-500');
  });

  it('applies custom className', () => {
    render(<GrowthBadge percentage="15%" className="custom-class" />);
    const badge = screen.getByText('15%').closest('div');
    expect(badge).toHaveClass('custom-class');
  });

  it('renders growth icon for positive values', () => {
    render(<GrowthBadge percentage="10%" />);
    const icon = screen.getByText('10%').previousElementSibling;
    expect(icon).toBeInTheDocument();
    expect(icon?.tagName).toBe('svg');
  });

  it('renders no icon for neutral values', () => {
    render(<GrowthBadge percentage="00" />);
    const badge = screen.getByText('00%').closest('div');
    expect(badge?.children.length).toBe(1); // Only the text span, no icon
  });
});
