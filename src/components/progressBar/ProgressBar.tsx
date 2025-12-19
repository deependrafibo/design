import React from 'react';
import { ProgressBarProps } from './types';

const getColorClasses = (value: number) => {
  if (value <= 20) {
    return {
      filled: 'bg-[#EA5455]',
      bg: 'bg-[#FCEAEB]',
    };
  } else if (value <= 45) {
    return {
      filled: 'bg-[#FFCC80]',
      bg: 'bg-[#FFF9F0]',
    };
  } else {
    return {
      filled: 'bg-[#28C76F]',
      bg: 'bg-[#E9FAF2]',
    };
  }
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => {
  const percentage = Math.min(Math.max(value, 0), 100);
  const colorClasses = getColorClasses(percentage);

  return (
    <div className="mb-4">
      <p className="text-body-text text-sm font-Montserrat font-normal mb-[14px]">
        {percentage}% {label}
      </p>
      <div className={`w-full h-[6px] rounded-[3px] ${colorClasses.bg}`}>
        <div className={`h-full rounded-full ${colorClasses.filled}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
