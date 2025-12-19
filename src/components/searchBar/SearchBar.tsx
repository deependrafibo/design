import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { iconComponents } from '@/utils/getIcons';
import { SearchBarProps } from './types';

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value,
      placeholder = 'Search...',
      onSearch,
      onChange,
      showIcon = true,
      showClearButton = true,
      size = 'md',
      className = '',
      disabled = false,
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value || '');
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const SearchIcon = iconComponents['search'];
    const ClearIcon = iconComponents['x'];

    useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      setInputValue(val);
      onChange?.(val);
    };

    const handleClear = () => {
      setInputValue('');
      onChange?.('');
      inputRef.current?.focus();
    };

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onSearch?.(inputValue);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onSearch?.(inputValue);
      }
    };

    // Size-based styles
    const sizeStyles = {
      sm: {
        height: 'h-8',
        padding: showIcon ? 'pl-8 pr-3' : 'px-3',
        text: 'text-xs',
        iconSize: { width: 16, height: 16 },
        iconLeft: 'left-2',
        clearRight: 'right-2',
        clearSize: { width: 14, height: 14 },
      },
      md: {
        height: 'h-10',
        padding: showIcon ? 'pl-10 pr-3' : 'px-4',
        text: 'text-sm',
        iconSize: { width: 18, height: 18 },
        iconLeft: 'left-3',
        clearRight: 'right-3',
        clearSize: { width: 16, height: 16 },
      },
      lg: {
        height: 'h-12',
        padding: showIcon ? 'pl-12 pr-4' : 'px-4',
        text: 'text-base',
        iconSize: { width: 20, height: 20 },
        iconLeft: 'left-4',
        clearRight: 'right-4',
        clearSize: { width: 18, height: 18 },
      },
    };

    const currentSize = sizeStyles[size];
    const paddingRight = showClearButton && inputValue ? 'pr-8' : currentSize.padding.split(' ')[1] || 'pr-3';

    return (
      <form onSubmit={handleSubmit} className="relative w-full">
        {showIcon && (
          <div className={`absolute inset-y-0 ${currentSize.iconLeft} flex items-center pointer-events-none`}>
            {SearchIcon && <SearchIcon color="#9C9FA1" {...currentSize.iconSize} />}
          </div>
        )}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            w-full ${currentSize.height} ${currentSize.text}
            ${currentSize.padding.split(' ')[0]} ${paddingRight}
            border rounded-lg outline-none
            bg-[#F8FCFF]
            placeholder:text-grayish-600 placeholder:font-Montserrat
            font-Montserrat text-body-text
            border-[#D8D6DE] focus:border-truBlue focus:ring-1 focus:ring-truBlue
            transition-colors duration-200
            ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
            ${className}
          `}
        />

        {showClearButton && inputValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className={`absolute inset-y-0 ${currentSize.clearRight} flex items-center text-gray-400 hover:text-gray-600 transition-colors`}
            aria-label="Clear search"
          >
            {ClearIcon && <ClearIcon color="currentColor" {...currentSize.clearSize} />}
          </button>
        )}
      </form>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
