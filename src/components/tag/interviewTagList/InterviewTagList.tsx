import React from 'react';
import { cn } from '../../../lib/utils';
import { InterviewTagListProps } from './types';

const colorMap: { [key: string]: string } = {
  coaching_interview: 'text-cyan-500 bg-cyan-100',
  milestone_review: 'text-purple-500 bg-purple-100',
};

const toSnakeCase = (value: string) => value.trim().toLowerCase().replace(/\s+/g, '_');

export const InterviewTagList: React.FC<InterviewTagListProps> = ({ labels }) => {
  const key = toSnakeCase(labels);
  const colors = colorMap[key] || 'text-gray-700 bg-gray-100';

  return (
    <span className={cn('px-2 py-1 text-xs font-semibold text-center rounded-[12px] font-Montserrat', colors)}>
      {labels}
    </span>
  );
};

export default InterviewTagList;
