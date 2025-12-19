import React from 'react';
import { RadioProps } from './types';

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  onChange,
  disabled,
  label,
  labelClassName,
  className,
}) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange?.(e.target.checked);
  };

  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <input type="radio" checked={checked} onChange={handleToggle} disabled={disabled} className="hidden" />
      <div
        className={`w-4 h-4 rounded-full transition duration-300 ${
          checked
            ? 'bg-[#0185E4] shadow-[0px_2px_4px_0px_rgba(1,133,228,0.40)]'
            : 'bg-transparent border border-[#D8D6DE]'
        }`}
      />
      <label
        className={`text-sm font-Montserrat text-body-text flex items-center cursor-pointer gap-2 ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
};
