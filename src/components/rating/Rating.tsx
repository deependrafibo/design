import React from 'react';
import { CustomFilledStar } from '../../assets/icons';
import { RatingProps } from './types';

export const Rating: React.FC<RatingProps> = ({ rating, tittle }) => {
  return (
    <div className="flex items-center gap-[10px] w-fit">
      <div className="flex items-center gap-[3px] bg-[#FFF4E8] px-2 py-[1px] rounded-sm ">
        <CustomFilledStar width={12} height={12} color="#FF9F43" />
        <span className="text-black-300 text-center font-Montserrat font-semibold text-xs py-[1px]">
          {rating.toFixed(1)}
        </span>
      </div>
      {tittle && <span className="text-body-text font-Montserrat font-light text-xs">{tittle}</span>}
    </div>
  );
};
