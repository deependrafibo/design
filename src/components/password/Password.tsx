import React, { useState, useRef, useEffect } from 'react';
import { PasswordInputProps } from './types';
import { iconComponents } from '@/utils/getIcons';

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  className,
  width = '342px',
  height,
  labelClassName,
  value,
  onchange,
  isConfirmation = false,
  maxLength = 128,
  compareWith = '',
  matchLabel = 'Passwords match',
  showStrengthMeter = true,
  mismatchLabel = 'Passwords Do Not Match',
  showMatchText = true,
  required = true,
  autoComplete,
}) => {
  const [password, setPassword] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<string>('Weak');
  const [strengthColor, setStrengthColor] = useState<string>('bg-red-500');
  const [, setStrengthWidth] = useState<string>('w-1/4');
  const [strengthTextColor, setStrengthTextColor] = useState<string>('text-red-500');
  const inputRef = useRef<HTMLInputElement>(null);
  const [maskedValue, setMaskedValue] = useState('');

  const EyeOpenIcon = iconComponents['eye'];
  const EyeClosedIcon = iconComponents['eyeOff'];

  useEffect(() => {
    if (!showPassword) {
      setMaskedValue('⚉'.repeat(password.length));
    }
  }, [password, showPassword]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setPassword(val);
    if (onchange) {
      onchange(val);
    }

    if (!isConfirmation) {
      if (val.length < 6) {
        setPasswordStrength('Weak');
        setStrengthColor('bg-error');
        setStrengthWidth('w-1/4');
        setStrengthTextColor('text-error');
      } else if (val.length >= 6 && val.length < 8) {
        setPasswordStrength('Fair');
        setStrengthColor('bg-orange-fair');
        setStrengthWidth('w-2/4');
        setStrengthTextColor('text-orange-fair');
      } else if (val.length >= 8 && val.length < 10) {
        setPasswordStrength('Good');
        setStrengthColor('bg-secondary-500');
        setStrengthWidth('w-3/4');
        setStrengthTextColor('text-secondary-500');
      } else {
        setPasswordStrength('Strong');
        setStrengthColor('bg-green-strength');
        setStrengthWidth('w-full');
        setStrengthTextColor('text-green-strength');
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showPassword) {
      handleChange(e);
    } else {
      const cursorPos = e.target.selectionStart || 0;
      const newValue = e.target.value;
      const valueChange = newValue.length - maskedValue.length;

      let updatedPassword = password;

      if (valueChange > 0) {
        const startPos = Math.max(0, cursorPos - valueChange);
        const addedText = newValue.substring(startPos, cursorPos);
        updatedPassword = password.substring(0, startPos) + addedText + password.substring(startPos);
      } else if (valueChange < 0) {
        const deleteCount = Math.abs(valueChange);
        const deleteStartPos = Math.max(0, cursorPos);
        const deleteEndPos = Math.min(password.length, deleteStartPos + deleteCount);
        updatedPassword = password.substring(0, deleteStartPos) + password.substring(deleteEndPos);
      }

      setPassword(updatedPassword);
      if (onchange) {
        onchange(updatedPassword);
      }
      setMaskedValue('⚉'.repeat(updatedPassword.length));

      const simulatedEvent = {
        target: { value: updatedPassword },
      } as React.ChangeEvent<HTMLInputElement>;

      handleChange(simulatedEvent);
    }
  };

  const renderProgressBlocks = () => {
    const blocks = [];
    const totalBlocks = 4;
    let filledBlocks = 0;
    if (passwordStrength === 'Weak') filledBlocks = 1;
    else if (passwordStrength === 'Fair') filledBlocks = 2;
    else if (passwordStrength === 'Good') filledBlocks = 3;
    else if (passwordStrength === 'Strong') filledBlocks = 4;

    for (let i = 0; i < totalBlocks; i++) {
      blocks.push(
        <div
          key={i}
          className={`h-1 rounded-full flex-1 ${i < filledBlocks ? strengthColor : 'bg-gray-200'} ${i < totalBlocks - 1 ? 'mr-1' : ''}`}
        />,
      );
    }

    return blocks;
  };

  const doesPasswordMatch = compareWith === password;

  return (
    <div className="flex flex-col gap-2" style={{ width: width }}>
      {label && (
        <label className={`text-body-text text-xs font-normal ${labelClassName}`}>
          {label} {required && <span className="text-red-500 -ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          maxLength={maxLength}
          value={showPassword ? password : maskedValue}
          onChange={handleCustomInputChange}
          autoComplete={autoComplete || (isConfirmation ? 'new-password' : 'current-password')}
          className={`w-full px-4 py-2 border border-[#D8D6DE] rounded-lg bg-[#F8FCFF] focus:border-truBlue text-xs focus:outline-none ${className} text-body-text`}
          style={{ height: height || '40px', paddingRight: '40px' }}
        />
        <button
          type="button"
          onClick={handleTogglePasswordVisibility}
          className="absolute right-3 top-1/2 transform cursor-pointer -translate-y-1/2"
        >
          {showPassword ? (
            <EyeOpenIcon width={20} height={20} color="#B9B9C3" />
          ) : (
            <EyeClosedIcon width={20} height={20} color="#B9B9C3" />
          )}
        </button>
      </div>

      {showStrengthMeter && !isConfirmation && password.length > 0 && (
        <div className="flex flex-col">
          <div className="w-full flex">{renderProgressBlocks()}</div>
          <div className={`text-xs mt-1 ${strengthTextColor}`}>Password strength : {passwordStrength}</div>
        </div>
      )}

      {isConfirmation && showMatchText && password.length > 0 && (
        <div className={`text-xs ${doesPasswordMatch ? 'text-[#28C76F]' : 'text-[#EA5455]'}`}>
          {doesPasswordMatch ? matchLabel : mismatchLabel}
        </div>
      )}
    </div>
  );
};
