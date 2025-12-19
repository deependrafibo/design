import React from 'react';
import { Radio } from '../radio/Radio';
import '../../tailwindcss/theme.css';
import { RadioCardProps } from './types';

export const CardWithRadio: React.FC<RadioCardProps> = ({ title, description, selected, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`border rounded-[6px] p-4 cursor-pointer transition flex items-start justify-start space-x-3 max-w-[300px] ${
        selected ? 'border-blue-500 bg-[#F1F8FD]' : 'border-gray-300 bg-[#FBFBFC]'
      }`}
    >
      <div className="flex items-start">
        <Radio checked={selected} onChange={() => onClick()} className="mt-[2px]" />
        <div
          className={`flex flex-col gap-2 items-start text-sm font-Montserrat ${selected ? 'text-secondary-500' : 'text-secondary-300'}`}
        >
          <div className="text-sm font-semibold font-Montserrat ">{title}</div>
          <div className="">{description}</div>
        </div>
      </div>
    </div>
  );
};
