import React, { useEffect, useState } from 'react';
import { ToggleProps } from './types';

export const Toggle: React.FC<ToggleProps> = ({ checked = false, disabled = false, onClick, toggleClassName }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    setIsChecked(!isChecked);
    onClick?.(e);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const baseClass = `relative w-14 h-8 flex items-center px-1 rounded-full transition-colors duration-300 disabled:opacity-[0.4]`;

  // Only allow toggleClassName if it's a safe Tailwind class or color code
  const checkedBgClass = toggleClassName ? `bg-[${toggleClassName}]` : 'bg-[#0185E4]';

  const uncheckedBgClass = 'bg-[#B4B7B8]';

  return (
    <button
      onClick={handleToggle}
      disabled={disabled}
      className={`${baseClass} ${isChecked ? checkedBgClass : uncheckedBgClass}`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isChecked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};
