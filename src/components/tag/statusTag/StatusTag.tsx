import React from 'react';
import classNames from 'classnames';
import { RawStatus, StatusTagProps } from './types';

export const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const baseStyle = 'px-[9px] py-[1px] text-xs font-semibold rounded-sm border w-fit text-center';

  const labelMap: Record<RawStatus, string> = {
    ACTIVE: 'On Going',
    COMPLETED: 'Completed',
    ON_GOING: 'On Going',
    INACTIVE: 'Inactive',
    ARCHIVED: 'Archived',
    OPEN: 'Open',
    ONGOING: 'On Going',
  };

  const styles: Record<RawStatus, string> = {
    ACTIVE: 'text-[#28C76F] bg-[#E4F9ED] border border-[#28C76F]',
    COMPLETED: 'text-[#00B0FF] bg-[#DCF2FB] border border-[#00B0FF]',
    ON_GOING: 'text-[#28C76F] bg-[#E4F9ED] border border-[#28C76F]',
    INACTIVE: 'text-[#FF0000] bg-[#FFE4E4] border border-[#FF0000]',
    ARCHIVED: 'text-[#FF0000] bg-[#FFE4E4] border border-[#FF0000]',
    OPEN: 'text-[#00B0FF] bg-[#DCF2FB] border border-[#00B0FF]',
    ONGOING: 'text-[#28C76F] bg-[#E4F9ED] border border-[#28C76F]',
  };

  return <span className={classNames(baseStyle, styles[status])}>{labelMap[status]}</span>;
};
