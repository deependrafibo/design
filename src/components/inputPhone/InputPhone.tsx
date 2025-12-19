import { useEffect, useState, useRef, useCallback } from 'react';
import CountryFlag from 'react-country-flag';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import type { InputPhoneProps, CountryData } from './types';

export const InputPhone: React.FC<InputPhoneProps> = ({
  label = 'Mobile number',
  placeholder = 'Enter mobile number',
  className = '',
  labelClassName = '',
  value = '',
  defaultCountryCode = '+91',
  errorMessage = 'Invalid phone number',
  onchange,
  required = true,
  disabled = false,
  countryDisabled = false,
  fetchCountries,
}) => {
  const [countryCode, setCountryCode] = useState(defaultCountryCode);
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('IN');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('');
  const [isValid, setIsValid] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const LIMIT = 10;

  const countriesLoadedRef = useRef<boolean>(false);

  const loadCountries = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newCountries = await fetchCountries(page, LIMIT);
      if (newCountries.length === 0 || newCountries.length < LIMIT) {
        setHasMore(false);
      }
      setCountries((prev) => [...prev, ...newCountries]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  }, [fetchCountries, page, loading, hasMore]);

  useEffect(() => {
    if (isDropdownOpen && countries.length === 0 && !countriesLoadedRef.current) {
      loadCountries();
    }
  }, [isDropdownOpen, loadCountries, countries.length]);

  useEffect(() => {
    if (isDropdownOpen && loadingRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !loading) {
            loadCountries();
          }
        },
        { threshold: 0.5 },
      );

      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isDropdownOpen, hasMore, loading, loadCountries]);

  useEffect(() => {
    if (value && countries.length > 0) {
      let foundCode = '';
      let foundMobile = '';
      let foundCountryId = '';

      const valueHasCountryCode = value.startsWith('+');

      if (valueHasCountryCode) {
        const sortedCountries = [...countries].sort(
          (a, b) => b.dial_code.replace(/\D/g, '').length - a.dial_code.replace(/\D/g, '').length,
        );

        for (const country of sortedCountries) {
          const cleanDialCode = country.dial_code.replace(/[^0-9+]/g, '');
          if (value.startsWith(cleanDialCode)) {
            foundCode = cleanDialCode;
            foundMobile = value.replace(cleanDialCode, '');
            setCountry(country.code);
            foundCountryId = country._id;
            break;
          }
        }
      }

      if (!foundCode && valueHasCountryCode) {
        foundCode = defaultCountryCode;
        foundMobile = value.replace(defaultCountryCode, '');
      } else if (!valueHasCountryCode) {
        foundCode = defaultCountryCode;
        foundMobile = value;
      }

      setCountryCode(foundCode);
      setMobile(foundMobile);
      if (foundCountryId) {
        setSelectedCountryId(foundCountryId);
      }
    } else if (value) {
      const valueHasCountryCode = value.startsWith('+');

      if (valueHasCountryCode) {
        if (value.startsWith(defaultCountryCode)) {
          setCountryCode(defaultCountryCode);
          setMobile(value.replace(defaultCountryCode, ''));
        }
      } else {
        setCountryCode(defaultCountryCode);
        setMobile(value);
      }
    }
  }, [value, defaultCountryCode]);

  useEffect(() => {
    const loadInitialCountry = async () => {
      if (countries.length === 0 && !countriesLoadedRef.current) {
        try {
          setLoading(true);
          const initialCountries = await fetchCountries(1, LIMIT);
          setCountries(initialCountries);
          setPage(2);
          countriesLoadedRef.current = true;

          // Find matching country for the default country code
          const matchingCountry = initialCountries.find(
            (country) => country.dial_code === defaultCountryCode || `+${country.dial_code}` === defaultCountryCode,
          );

          if (matchingCountry) {
            setCountry(matchingCountry.code);
            setSelectedCountryId(matchingCountry._id);

            // Make sure to call onchange with the initial values
            if (onchange) {
              onchange(matchingCountry.dial_code, matchingCountry._id, mobile);
            }
          }
        } catch (error) {
          console.error('Error loading initial countries:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadInitialCountry();
  }, [defaultCountryCode, fetchCountries, mobile, onchange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (val: string) => {
    const mobileRegex = /^[0-9]{0,10}$/;
    if (mobileRegex.test(val)) {
      setMobile(val);

      const parsed = parsePhoneNumberFromString(countryCode + val);
      setIsValid(parsed?.isValid() ?? false);
      onchange?.(countryCode, selectedCountryId, val);
    }
  };

  const handleCountryCodeChange = (dialCode: string, countryCode: string, countryId: string) => {
    setCountryCode(dialCode);
    setCountry(countryCode);
    setSelectedCountryId(countryId);
    setIsDropdownOpen(false);
    onchange?.(dialCode, countryId, mobile);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen && countries.length === 0 && !countriesLoadedRef.current) {
      setPage(1);
      setHasMore(true);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className={`text-body-text text-xs font-Montserrat flex items-center ${labelClassName}`}>
          {label}
          {required && <span className="text-[#EA5455]">*</span>}
        </label>
      )}
      <div className="flex w-full gap-3 items-center">
        <div className="relative w-fit" ref={dropdownRef}>
          <div
            className={`flex items-center gap-1 px-2 py-2 border ${
              countryDisabled ? 'border-gray-300 bg-gray-100' : 'border-blue-600 bg-inputBg'
            } rounded-[5px] text-grayish-600 font-Montserrat text-xs outline-none w-24 ${
              countryDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-blue-700'
            }`}
            onClick={countryDisabled ? undefined : toggleDropdown}
            data-testid="country-selector"
          >
            {country && (
              <span className="pl-1">
                <CountryFlag countryCode={country} svg style={{ width: '24px', height: '16px' }} title={country} />
              </span>
            )}
            <span className="ml-2">+{countryCode.replace(/^\+/, '')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-auto"
            >
              <polyline points={isDropdownOpen ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}></polyline>
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {countries.length === 0 && loading ? (
                <div className="flex justify-center items-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                </div>
              ) : (
                <>
                  {countries.length === 0 && !loading && (
                    <div className="text-center py-4 text-gray-500">No countries found</div>
                  )}

                  {countries.map((option) => (
                    <div
                      key={option._id}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCountryCodeChange(option.dial_code, option.code, option._id)}
                      data-testid={`country-option-${option.code}`}
                    >
                      <CountryFlag
                        countryCode={option.code}
                        svg
                        style={{ width: '20px', height: '14px' }}
                        title={option.code}
                      />
                      <span className="text-xs">{option.name}</span>
                      <span className="text-xs ml-auto">+{option.dial_code}</span>
                    </div>
                  ))}

                  {hasMore && (
                    <div
                      ref={loadingRef}
                      className="flex justify-center items-center py-2"
                      data-testid="loading-more-countries"
                    >
                      {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        <input
          type="tel"
          value={mobile}
          onChange={(e) => handleChange(e.target.value)}
          maxLength={10}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border ${
            isValid ? 'border-gray-300' : 'border-red-500'
          } rounded-[5px] bg-inputBg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600 ${className}`}
          disabled={disabled}
        />
      </div>

      {!isValid && <span className="text-xs text-red-500 font-Montserrat mt-1">{errorMessage}</span>}
    </div>
  );
};

export default InputPhone;
