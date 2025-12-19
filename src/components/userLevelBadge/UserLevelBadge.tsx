import React from 'react';
import { UserLevelBadgeProps } from './types';

const UserLevelBadge: React.FC<UserLevelBadgeProps> = ({ level }) => {
  const isDepartment = level.toLowerCase() === 'department';
  const badgeColor = isDepartment ? 'bg-[#F2F1FE] text-[#7367F0]' : 'bg-[#FFF3E8] text-[#FF9F43]';

  return (
    <div className={`text-xs font-semibold font-Montserrat px-2  py-1 rounded-full text-center  ${badgeColor}`}>
      {level}
    </div>
  );
};

export default UserLevelBadge;
