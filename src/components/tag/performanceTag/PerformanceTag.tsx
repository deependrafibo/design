import React from 'react';
import { PerformanceTagProps } from './types';

const colorMap: Record<string, string> = {
  Accelerator: 'bg-[#FF9F43]',
  Builder: 'bg-[#EA5455]',
  Catalyst: 'bg-[#28C76F]',
};

export const PerformanceTag: React.FC<PerformanceTagProps> = ({ category }) => {
  const color = colorMap[category] || 'bg-gray-400';

  return (
    <div className="flex items-center gap-2">
      <div className={`w-1 h-5 rounded-sm ${color}`} />
      <span className="text-sm text-[#6A7071] font-medium">{category}</span>
    </div>
  );
};
