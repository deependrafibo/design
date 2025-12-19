import { useState } from 'react';
import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange, disabled, label, labelClassName }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked(!isChecked);
    onChange?.(e.target.checked);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        id="check"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        disabled={disabled}
        className={`w-5 h-5 rounded text-[#0185E4] transition-shadow duration-300 

    ${
      isChecked
        ? 'shadow-[0px_2px_4px_0px_rgba(1,133,228,0.40)] border-transparent'
        : 'border border-[#D8D6DE] bg-transparent'
    }`}
      />
      <label
        htmlFor="check"
        className={`text-sm font-Montserrat text-body-text flex items-center justify-center gap-2 ${labelClassName}`}
      >
        {label}{' '}
      </label>
    </div>
  );
};
