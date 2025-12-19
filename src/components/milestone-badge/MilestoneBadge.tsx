import React from 'react';
import { cn } from '../../lib/utils';
import { MilestoneBadgeProps } from './types';

export const MilestoneBadge: React.FC<MilestoneBadgeProps> = ({ title, className }) => {
  return (
    <div className={cn('flex items-center gap-2 py-[1px] px-[9px] rounded-[17px] bg-[#FFECDF] w-fit', className)}>
      <p className="text-[#FF6D00] text-xs font-semibold whitespace-nowrap">Milestone {title}</p>
    </div>
  );
};

export default MilestoneBadge;
