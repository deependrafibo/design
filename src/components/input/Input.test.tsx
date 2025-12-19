import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input component', () => {
  it('renders with label and placeholder', () => {
    render(<Input label="Username" placeholder="Enter username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('applies autoComplete attribute correctly', () => {
    render(<Input type="email" autoComplete="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('autocomplete', 'email');
  });

  it('applies correct autoComplete for password field', () => {
    render(<Input type="password" autoComplete="current-password" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('autocomplete', 'current-password');
  });

  it('applies correct autoComplete for username field', () => {
    render(<Input type="text" autoComplete="username" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('autocomplete', 'username');
  });

  it('renders required indicator when required is true', () => {
    render(<Input label="Username" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('applies error styling when hasError is true', () => {
    render(<Input hasError errorMessage="This field is required" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500');
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});
