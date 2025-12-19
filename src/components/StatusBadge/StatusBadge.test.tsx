import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusBadge } from './StatusBadge';
import '@testing-library/jest-dom';

describe('StatusBadge Component', () => {
  it('renders with "Active" label and correct styles', () => {
    render(<StatusBadge label="Active" type="active" />);

    const badge = screen.getByText('Active');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-green-100');
    expect(badge).toHaveClass('text-green-strength');
  });

  it('renders with "Deactivated" label and correct styles', () => {
    render(<StatusBadge label="Deactivated" type="deactivated" />);

    const badge = screen.getByText('Deactivated');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-gray-100');
    expect(badge).toHaveClass('text-gray-500');
  });

  it('renders with "Expired" label and correct styles', () => {
    render(<StatusBadge label="Expired" type="expired" />);

    const badge = screen.getByText('Expired');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-error-100');
    expect(badge).toHaveClass('text-error');
  });

  it('renders with "Invitation Sent" label and correct styles', () => {
    render(<StatusBadge label="Invitation Sent" type="invitation-sent" />);

    const badge = screen.getByText('Invitation Sent');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-blue-accent-100');
    expect(badge).toHaveClass('text-blue-700');
  });

  it('applies custom classes if provided', () => {
    render(<StatusBadge label="Custom Badge" type="active" className="custom-class" />);
    const badge = screen.getByText('Custom Badge');
    expect(badge).toHaveClass('custom-class');
  });
});
