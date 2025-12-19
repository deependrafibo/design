import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock the icon components before importing SearchBar
vi.mock('@/utils/getIcons', () => {
  const React = require('react');
  return {
    iconComponents: {
      search: () => React.createElement('svg', { 'data-testid': 'search-icon' }),
      x: () => React.createElement('svg', { 'data-testid': 'clear-icon' }),
    },
  };
});

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders with default props', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar placeholder="Search interviews..." />);
    const input = screen.getByPlaceholderText('Search interviews...');
    expect(input).toBeInTheDocument();
  });

  it('displays the provided value', () => {
    render(<SearchBar value="test search" />);
    const input = screen.getByDisplayValue('test search');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = vi.fn();
    render(<SearchBar onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Search...');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith('new value');
  });

  it('calls onSearch when form is submitted', () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} value="test" />);
    const input = screen.getByDisplayValue('test');

    fireEvent.submit(input.closest('form')!);
    expect(handleSearch).toHaveBeenCalledWith('test');
  });

  it('calls onSearch when Enter key is pressed', () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} value="test" />);
    const input = screen.getByDisplayValue('test');

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleSearch).toHaveBeenCalledWith('test');
  });

  it('shows clear button when there is text', () => {
    render(<SearchBar value="test" showClearButton={true} />);
    const clearButton = screen.getByLabelText('Clear search');
    expect(clearButton).toBeInTheDocument();
  });

  it('does not show clear button when showClearButton is false', () => {
    render(<SearchBar value="test" showClearButton={false} />);
    const clearButton = screen.queryByLabelText('Clear search');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('clears input when clear button is clicked', () => {
    const handleChange = vi.fn();
    render(<SearchBar value="test" onChange={handleChange} showClearButton={true} />);

    const clearButton = screen.getByLabelText('Clear search');
    fireEvent.click(clearButton);

    expect(handleChange).toHaveBeenCalledWith('');
  });

  it('applies size classes correctly', () => {
    const { container } = render(<SearchBar size="lg" />);
    const input = container.querySelector('input');
    expect(input?.className).toContain('h-12');
  });

  it('disables input when disabled prop is true', () => {
    render(<SearchBar disabled={true} />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeDisabled();
  });

  it('applies custom className', () => {
    const { container } = render(<SearchBar className="custom-class" />);
    const input = container.querySelector('input');
    expect(input?.className).toContain('custom-class');
  });

  it('does not show clear button when disabled', () => {
    render(<SearchBar value="test" disabled={true} showClearButton={true} />);
    const clearButton = screen.queryByLabelText('Clear search');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('updates internal value when value prop changes', () => {
    const { rerender } = render(<SearchBar value="initial" />);
    expect(screen.getByDisplayValue('initial')).toBeInTheDocument();

    rerender(<SearchBar value="updated" />);
    expect(screen.getByDisplayValue('updated')).toBeInTheDocument();
  });
});
