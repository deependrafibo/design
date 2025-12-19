import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputPhone } from './InputPhone';
import '@testing-library/jest-dom/vitest';

const mockCountries = [
  { _id: 'in', name: 'India', dial_code: '+91', code: 'IN' },
  { _id: 'us', name: 'USA', dial_code: '+1', code: 'US' },
];

const fetchCountriesMock = vi.fn().mockResolvedValue(mockCountries);

describe('InputPhone Component', () => {
  beforeEach(() => {
    fetchCountriesMock.mockClear();
  });

  it('renders label and inputs', async () => {
    render(<InputPhone label="Phone" fetchCountries={fetchCountriesMock} />);
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter mobile number')).toBeInTheDocument();
  });

  it('shows country flag when country code is known', async () => {
    render(<InputPhone defaultCountryCode="+91" value="+919999999999" fetchCountries={fetchCountriesMock} />);
    await waitFor(() => expect(screen.getByTitle('IN')).toBeInTheDocument());
  });

  it('splits country code and mobile correctly from value prop', async () => {
    render(<InputPhone defaultCountryCode="+91" value="+919876543210" fetchCountries={fetchCountriesMock} />);
    await waitFor(() => {
      expect(screen.getByDisplayValue('+91')).toBeInTheDocument();
      expect(screen.getByDisplayValue('9876543210')).toBeInTheDocument();
    });
  });

  it('calls onchange with full number on mobile change', async () => {
    const mockOnChange = vi.fn();
    render(<InputPhone onchange={mockOnChange} defaultCountryCode="+91" fetchCountries={fetchCountriesMock} />);
    const input = await screen.findByPlaceholderText('Enter mobile number');

    fireEvent.change(input, { target: { value: '9999999999' } });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('9999999999', 'in', '+919999999999');
    });
  });

  it('calls onchange with full number on country code change', async () => {
    const mockOnChange = vi.fn();
    render(<InputPhone onchange={mockOnChange} value="+919999999999" fetchCountries={fetchCountriesMock} />);
    const countrySelector = await screen.findByTestId('country-selector');
    fireEvent.click(countrySelector);

    await waitFor(() => {
      expect(fetchCountriesMock).toHaveBeenCalled();
    });

    const usOption = await screen.findByText('+1 USA');
    fireEvent.click(usOption);

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('9999999999', 'us', '+1999999999');
    });
  });

  it('displays validation error for invalid numbers', async () => {
    render(<InputPhone defaultCountryCode="+91" fetchCountries={fetchCountriesMock} />);
    const mobileInput = await screen.findByPlaceholderText('Enter mobile number');

    fireEvent.change(mobileInput, { target: { value: '00000' } });

    await waitFor(() => {
      expect(screen.getByText('Invalid phone number')).toBeInTheDocument();
    });
  });

  it('disables country selector when countryDisabled is true', async () => {
    render(<InputPhone countryDisabled={true} fetchCountries={fetchCountriesMock} />);
    const countrySelector = await screen.findByTestId('country-selector');

    expect(countrySelector).toHaveClass('cursor-not-allowed');
    expect(countrySelector).toHaveClass('opacity-50');

    fireEvent.click(countrySelector);
    await waitFor(() => {
      expect(fetchCountriesMock).not.toHaveBeenCalled();
    });
  });

  it('allows country selection when countryDisabled is false', async () => {
    render(<InputPhone countryDisabled={false} fetchCountries={fetchCountriesMock} />);
    const countrySelector = await screen.findByTestId('country-selector');

    expect(countrySelector).toHaveClass('cursor-pointer');
    expect(countrySelector).not.toHaveClass('opacity-50');

    fireEvent.click(countrySelector);
    await waitFor(() => {
      expect(fetchCountriesMock).toHaveBeenCalled();
    });
  });
});
