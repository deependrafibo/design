import React, { useState, useRef, useEffect, useCallback } from 'react';
import { OTPInputProps } from './types';

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 4,
  value = '',
  onChange = () => {},
  onComplete = () => {},
  disabled = false,
  autoFocus = false,
  isNumberOnly = true,
  inputClassName = '',
  containerClassName = '',
  errorMessage = '',
  hasError = false,
  placeholder = '',
  separator = null,
  separatorClassName = '',
  inputType = 'text',
  inputMode = 'numeric',
  maxLength = 1,
  handleBlur = () => {},
  autoComplete = 'one-time-code',
  testId = 'otp-input',
  label = '',
  labelClassName = 'text-customGrey',
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeInput, setActiveInput] = useState<number | null>(null);

  useEffect(() => {
    inputRefs.current = Array(length).fill(null);
  }, [length]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveInput(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const valueArray = value.split('').slice(0, length);

  const getNextEmptyIndex = useCallback((): number => {
    const firstEmptyIndex = valueArray.findIndex((v) => !v);
    return firstEmptyIndex >= 0 ? firstEmptyIndex : Math.min(valueArray.length, length - 1);
  }, [valueArray, length]);

  useEffect(() => {
    if (autoFocus && !disabled) {
      const nextEmptyIndex = getNextEmptyIndex();
      setActiveInput(nextEmptyIndex);
      const inputElement = inputRefs.current[nextEmptyIndex];
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [autoFocus, disabled, getNextEmptyIndex]);

  const focusInput = (index: number): void => {
    const activeIndex = Math.max(0, Math.min(index, length - 1));
    const inputElement = inputRefs.current[activeIndex];
    if (inputElement) {
      inputElement.focus();
      setActiveInput(activeIndex);
    }
  };

  const changeCodeAtIndex = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;

    if (isNumberOnly && !/^\d*$/.test(val) && val !== '') {
      return;
    }

    const newValue = [...valueArray];

    if (val.length > maxLength) {
      const pastedData = val.split('');
      for (let i = index; i < Math.min(index + pastedData.length, length); i++) {
        newValue[i] = pastedData[i - index];
      }
    } else {
      newValue[index] = val.slice(-1);
    }

    while (newValue.length > length) newValue.pop();

    onChange(newValue.join(''));

    if (newValue.filter(Boolean).length === length) {
      onComplete(newValue.join(''));
    }

    if (val !== '' && index < length - 1) {
      const nextEmptyIndex = newValue.findIndex((v, i) => !v && i > index);
      focusInput(nextEmptyIndex >= 0 ? nextEmptyIndex : index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const prevIndex = index - 1;
    const nextIndex = index + 1;

    switch (e.key) {
      case 'Backspace':
        e.preventDefault();
        if (valueArray[index]) {
          const newValue = [...valueArray];
          newValue[index] = '';
          onChange(newValue.join(''));
        } else if (prevIndex >= 0) {
          focusInput(prevIndex);
          const newValue = [...valueArray];
          newValue[prevIndex] = '';
          onChange(newValue.join(''));
        }
        break;
      case 'Delete':
        e.preventDefault();
        if (valueArray[index]) {
          const newValue = [...valueArray];
          newValue[index] = '';
          onChange(newValue.join(''));
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (prevIndex >= 0) focusInput(prevIndex);
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (nextIndex < length) focusInput(nextIndex);
        break;
      case 'Home':
        e.preventDefault();
        focusInput(0);
        break;
      case 'End':
        e.preventDefault();
        focusInput(length - 1);
        break;
      default:
        break;
    }
  };

  const handleFocus = (index: number) => {
    setActiveInput(index);
  };

  const handleClick = (index: number) => {
    focusInput(index);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>, currentIndex: number) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text/plain').trim();

    if (isNumberOnly && !/^\d*$/.test(pastedText)) {
      return;
    }

    const updatedValueArray = [...valueArray];

    for (
      let pastedCharIndex = 0;
      pastedCharIndex < Math.min(pastedText.length, length - currentIndex);
      pastedCharIndex++
    ) {
      const otpPosition = currentIndex + pastedCharIndex;
      updatedValueArray[otpPosition] = pastedText[pastedCharIndex];
    }

    const updatedOTP = updatedValueArray.join('');
    onChange(updatedOTP);

    const nextEmptyIndex = updatedValueArray.findIndex((digit, position) => !digit && position >= currentIndex);
    focusInput(nextEmptyIndex >= 0 ? nextEmptyIndex : length - 1);

    const allInputsFilled = updatedValueArray.filter(Boolean).length === length;
    if (allInputsFilled) {
      onComplete(updatedOTP);
    }
  };

  const customHandleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || !containerRef.current?.contains(relatedTarget)) {
      setActiveInput(null);
    }

    handleBlur(e);
  };

  const inputs = Array(length)
    .fill(null)
    .map((_, index) => {
      const getBorderColorClass = () => {
        if (hasError) return 'border-customRed';
        if (activeInput === index) return 'border-customBlue';
        return 'border-customGrey';
      };

      return (
        <React.Fragment key={`fragment-${index}`}>
          <input
            key={`otp-input-${index}`}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={valueArray[index] || ''}
            type={inputType}
            inputMode={inputMode}
            pattern={isNumberOnly ? '[0-9]*' : undefined}
            autoComplete={index === 0 ? autoComplete : 'off'}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
            aria-label={`Digit ${index + 1}`}
            data-testid={`${testId}-${index}`}
            className={`
              ${inputClassName} 
              ${getBorderColorClass()}
              w-[54px] h-[50px] text-center text-sm font-normal leading-4.5 
              font-montserrat first:ml-0 ml-3.5 rounded-lg border outline-none 
              ${activeInput === index ? 'caret-auto' : 'caret-transparent'}
            `}
            onChange={(e) => changeCodeAtIndex(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => handleFocus(index)}
            onBlur={customHandleBlur}
            onClick={() => handleClick(index)}
            onPaste={(e) => handlePaste(e, index)}
          />
          {separator && index < length - 1 && <div className={`${separatorClassName} inline-block`}>{separator}</div>}
        </React.Fragment>
      );
    });

  return (
    <div className="w-fit">
      {label && (
        <label
          htmlFor={`${testId}-0`}
          className={`block text-sm font-medium mb-0.5 ${labelClassName}`}
          data-testid={`${testId}-label`}
        >
          {label}
        </label>
      )}
      <div ref={containerRef} className={`${containerClassName} flex items-center justify-center`} data-testid={testId}>
        {inputs}
      </div>
      {hasError && errorMessage && (
        <div className="text-red-500 text-sm pl-4 font-light leading-[18px] mt-0.5" data-testid={`${testId}-error`}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
