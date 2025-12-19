import { Avatar } from '../avatar/Avatar';
import { CustomChevronRight } from '@/assets/icons';
import { ProfileHeaderProps } from './types';

export const ProfileHeader = ({
  imageUri,
  alt,
  onNameClick,
  name,
  role,
  education,
  instuteName,
  instuteStartDate,
  instuteEndDate,
  startDate,
  endDate,
  expectedEndDate,
}: ProfileHeaderProps) => {
  return (
    <div className="bg-[#FFF9EB] flex items-center justify-between p-4 rounded-[10px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] w-full gap-5">
      <div className="flex items-center gap-2 w-1/3">
        <Avatar src={imageUri} size={40} alt={alt} />
        <div className="flex flex-col">
          {onNameClick ? (
            <div className="flex items-center gap-1 cursor-pointer" onClick={onNameClick}>
              <div className="text-base text-secondary-500 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                {name}
              </div>
              <CustomChevronRight color="#0185E4" width={18} height={18} />
            </div>
          ) : (
            <div className="text-base text-Grey-700 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
              {name}
            </div>
          )}
          <div className="text-xs text-Grey-300 font-semibold">{role}</div>
        </div>
      </div>
      <div className="w-[1px] bg-Grey-50 h-10"></div>

      <div className="w-1/3 flex flex-col gap-1 pl-4">
        <p className="text-base text-Grey-700 font-semibold">{education}</p>
        <p className="text-xs font-semibold text-Grey-300 flex items-center gap-2">
          {instuteStartDate} - {instuteEndDate} <div className="bg-Grey-50 w-[1px] h-4"></div> {instuteName}
        </p>
      </div>
      <div className="w-[1px] bg-Grey-50 h-10"></div>

      <div className="flex text-sm w-1/5 justify-start items-center">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-Grey-700 text-base font-semibold">{startDate}</p>
          <p className="text-xs font-semibold text-Grey-300">Program Start Date</p>
        </div>
      </div>
      <div className="w-[1px] bg-Grey-50 h-10"></div>

      <div className="flex text-sm w-1/5 justify-start items-center">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-Grey-700 text-base font-semibold">{endDate}</p>
          <p className="text-xs font-semibold text-Grey-300">
            Program End Date {expectedEndDate && `(${expectedEndDate})`}
          </p>
        </div>
      </div>
    </div>
  );
};
