import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Dropdown from './Dropdown';
import '@testing-library/jest-dom/vitest';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

describe('Dropdown component', () => {
  it('renders with placeholder text by default', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('shows options when clicked', () => {
    render(<Dropdown options={options} />);
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('calls onChange when a single option is selected', () => {
    const handleChange = vi.fn();
    render(<Dropdown options={options} onChange={handleChange} />);
    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Banana'));
    expect(handleChange).toHaveBeenCalledWith({ label: 'Banana', value: 'banana' });
  });

  it('selects and displays the selected option in single mode', () => {
    render(<Dropdown options={options} selected={{ label: 'Cherry', value: 'cherry' }} />);
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('removes selection in single mode when close icon is clicked', () => {
    const handleChange = vi.fn();
    render(<Dropdown options={options} selected={{ label: 'Apple', value: 'apple' }} onChange={handleChange} />);
    const closeBtn = screen.getByRole('button');
    fireEvent.click(closeBtn);
    expect(handleChange).toHaveBeenCalledWith(null);
  });

  it('supports multi-select and adds/removes selections', () => {
    const handleChange = vi.fn();
    render(<Dropdown options={options} multi onChange={handleChange} />);
    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Apple'));
    fireEvent.click(screen.getByText('Banana'));
    expect(handleChange).toHaveBeenCalledWith([{ label: 'Apple', value: 'apple' }]);
    expect(handleChange).toHaveBeenCalledWith([
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ]);
  });

  it('renders label when provided', () => {
    render(<Dropdown options={options} label="Fruits" />);
    expect(screen.getByText('Fruits')).toBeInTheDocument();
  });

  // Test searchable functionality
  it('renders search input when searchable is true', () => {
    render(<Dropdown options={options} searchable />);
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('filters options based on search input', async () => {
    render(<Dropdown options={options} searchable />);
    fireEvent.click(screen.getByText('Select an option'));

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'app' } });

    // Should only show 'Apple'
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
  });

  it('shows "No options found" when search returns no results', () => {
    render(<Dropdown options={options} searchable />);
    fireEvent.click(screen.getByText('Select an option'));

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'xyznotfound' } });

    expect(screen.getByText('No options found')).toBeInTheDocument();
  });

  // Test paginated functionality
  it('calls onLoadMore when scrolling to bottom in paginated mode', async () => {
    const mockLoadMore = vi.fn();

    // Create a mock for the scrolling behavior
    const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
    const originalClientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight');
    const originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');

    // Mock the scroll properties to simulate scrolling to bottom
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 100 });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 50 });
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 50 });

    render(<Dropdown options={options} paginated onLoadMore={mockLoadMore} />);
    fireEvent.click(screen.getByText('Select an option'));

    // Simulate scrolling to the bottom
    const dropdownList = screen
      .getAllByRole('generic')
      .find((el) => el.className && el.className.includes('overflow-y-auto'));

    if (dropdownList) {
      fireEvent.scroll(dropdownList);

      // Wait for the onLoadMore function to be called
      await waitFor(() => {
        expect(mockLoadMore).toHaveBeenCalled();
      });
    }

    // Restore original behavior
    if (originalScrollHeight) Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
    if (originalClientHeight) Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalClientHeight);
    if (originalScrollTop) Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);
  });

  it('does not call onLoadMore when loading is true', async () => {
    const mockLoadMore = vi.fn();

    // Create a mock for the scrolling behavior
    const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
    const originalClientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight');
    const originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');

    // Mock the scroll properties to simulate scrolling to bottom
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 100 });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 50 });
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 50 });

    render(<Dropdown options={options} paginated loading onLoadMore={mockLoadMore} />);
    fireEvent.click(screen.getByText('Select an option'));

    // Simulate scrolling to the bottom
    const dropdownList = screen
      .getAllByRole('generic')
      .find((el) => el.className && el.className.includes('overflow-y-auto'));

    if (dropdownList) {
      fireEvent.scroll(dropdownList);

      // MockLoadMore should not be called when loading is true
      expect(mockLoadMore).not.toHaveBeenCalled();
    }

    // Restore original behavior
    if (originalScrollHeight) Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
    if (originalClientHeight) Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalClientHeight);
    if (originalScrollTop) Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);
  });

  it('displays spinner when loading is true', () => {
    render(<Dropdown options={options} loading />);
    fireEvent.click(screen.getByText('Select an option'));

    // Look for the spinner component
    expect(screen.getByRole('generic', { name: '' })).toBeInTheDocument();
  });

  it('handles both searchable and paginated together', () => {
    const mockLoadMore = vi.fn();
    render(<Dropdown options={options} searchable paginated onLoadMore={mockLoadMore} />);
    fireEvent.click(screen.getByText('Select an option'));

    // Check if both search and pagination features are present
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });

  it('calls onSearch when user types in search input', () => {
    const handleSearch = vi.fn();
    render(<Dropdown options={options} searchable onSearch={handleSearch} />);

    fireEvent.click(screen.getByText('Select an option'));
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'app' } });

    expect(handleSearch).toHaveBeenCalledWith('app');
  });

  it('calls onSearch with empty string when search input is cleared', () => {
    const handleSearch = vi.fn();
    render(<Dropdown options={options} searchable onSearch={handleSearch} />);

    fireEvent.click(screen.getByText('Select an option'));
    const searchInput = screen.getByPlaceholderText('Search...');

    // First type something
    fireEvent.change(searchInput, { target: { value: 'app' } });
    // Then clear it
    fireEvent.change(searchInput, { target: { value: '' } });

    expect(handleSearch).toHaveBeenCalledWith('');
  });

  it('handles both searchable and paginated together with onSearch', () => {
    const mockLoadMore = vi.fn();
    const mockSearch = vi.fn();
    render(<Dropdown options={options} searchable paginated onLoadMore={mockLoadMore} onSearch={mockSearch} />);

    fireEvent.click(screen.getByText('Select an option'));

    // Check if both search and pagination features are present
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();

    // Test search functionality
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'app' } });
    expect(mockSearch).toHaveBeenCalledWith('app');
  });

  describe('Chevron icon behavior', () => {
    it('renders chevron icon by default', () => {
      render(<Dropdown options={options} />);
      const chevron = screen.getByRole('img', { hidden: true });
      expect(chevron).toBeInTheDocument();
    });

    it('rotates chevron when dropdown is opened', () => {
      render(<Dropdown options={options} />);
      const dropdown = screen.getByText('Select an option');
      const chevronContainer = dropdown.parentElement?.querySelector('div[class*="rotate"]');

      // Initially not rotated
      expect(chevronContainer).not.toHaveClass('rotate-180');

      // Click to open dropdown
      fireEvent.click(dropdown);

      // Should be rotated
      expect(chevronContainer).toHaveClass('rotate-180');

      // Click to close dropdown
      fireEvent.click(dropdown);

      // Should not be rotated
      expect(chevronContainer).not.toHaveClass('rotate-180');
    });

    it('maintains chevron position with selected value', () => {
      render(<Dropdown options={options} selected={{ label: 'Apple', value: 'apple' }} />);
      const chevron = screen.getByRole('img', { hidden: true });
      expect(chevron).toBeInTheDocument();

      // Click to open dropdown
      fireEvent.click(screen.getByText('Apple'));
      const chevronContainer = chevron.parentElement;
      expect(chevronContainer).toHaveClass('rotate-180');
    });
  });
});
