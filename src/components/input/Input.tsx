import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      className = '',
      width = 'w-full',
      height = 'h-10',
      type = 'text',
      value,
      labelClassName = '',
      onchange,
      required = false,
      errorMessage = '',
      disabled = false,
      maxLength,
      minLength,
      hasError = false,
      autoComplete,
      min,
      max,
      minDate,
      maxDate,
      onBlur,
      onKeyDown,
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [internalError, setInternalError] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const minValue = min || minDate;
    const maxValue = max || maxDate;

    useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    const validateAndAdjustValue = (val: string): string => {
      if (!val || (!minValue && !maxValue)) return val;

      if (type === 'datetime-local' || type === 'date' || type === 'time') {
        if (minValue && val < minValue) {
          return minValue;
        }
        if (maxValue && val > maxValue) {
          return maxValue;
        }
      }

      return val;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let val = event.target.value;

      if (type === 'datetime-local' || type === 'date' || type === 'time') {
        const adjustedVal = validateAndAdjustValue(val);
        if (adjustedVal !== val) {
          val = adjustedVal;
          if (inputRef.current) {
            inputRef.current.value = adjustedVal;
          }
        }
      }

      setInputValue(val);

      if (type !== 'date') {
        if (required && val.trim() === '') {
          setInternalError('This field is required');
        } else if (minLength && val.length < minLength) {
          setInternalError(`Minimum length is ${minLength}`);
        } else if (maxLength && val.length > maxLength) {
          setInternalError(`Maximum length is ${maxLength}`);
        } else {
          setInternalError('');
        }
      } else {
        setInternalError('');
      }

      onchange?.(val);
    };

    const handleClick = () => {
      if (
        (type === 'date' || type === 'datetime-local' || type === 'time' || type === 'month' || type === 'week') &&
        !disabled &&
        inputRef.current
      ) {
        try {
          if ('showPicker' in inputRef.current) {
            (inputRef.current as HTMLInputElement & { showPicker: () => void }).showPicker();
          }
        } catch {
          inputRef.current.focus();
        }
      }
    };

    // const displayError = errorMessage || internalError;
    const showError = hasError || internalError;
    return (
      <div className={`flex flex-col gap-1 ${width}`}>
        {label && (
          <label className={`text-body-text text-xs font-Montserrat ${labelClassName}`}>
            {label}
            {required && <span className="text-red-500 ml-[2px]">*</span>}
          </label>
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={inputValue}
          ref={inputRef}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          autoComplete={autoComplete}
          min={minValue}
          max={maxValue}
          className={`px-4 py-2 border rounded-lg outline-none bg-[#F8FCFF] placeholder:text-xs text-xs placeholder:text-grayish-600 placeholder:font-Montserrat font-Montserrat ${height} ${
            showError ? 'border-red-500' : 'border-[#D8D6DE] focus:border-truBlue'
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''} ${className}`}
        />

        {showError && (
          <p className="text-xs text-red-500 font-Montserrat">{errorMessage ? errorMessage : internalError}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
