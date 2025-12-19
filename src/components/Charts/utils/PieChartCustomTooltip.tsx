import React from 'react';
import { CustomTooltipProps, TooltipListItem } from './types';

const PieChartCustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (!active || !payload || payload.length === 0) return null;

  const { name, value, percentage, color, tooltip } = payload[0].payload;

  return (
    <div className="bg-[var(--Grey-0,#FFF)] flex flex-col items-start gap-1 py-2 px-3 rounded-[6px] shadow-custom-shadow font-Montserrat">
      <div className="flex flex-col items-start justify-between w-full gap-1">
        <div className="flex items-center gap-1.5">
          <div className={`w-3 h-3 rounded-[2px] gap-[6px]`} style={{ backgroundColor: color }}></div>
          <p className="text-grey-700 font-Montserrat text-sm font-normal leading-5">{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold   text-center text-grey-900 ">{value}</span>
          <div className="w-[1px] h-5 rounded-[10px] bg-grey-50"></div>
          <p className="text-sm font-semibold text-center text-grey-900">{percentage}</p>
        </div>
      </div>
      {tooltip && <div className="w-full h-[1px] rounded-[10px] bg-[#EBE9F1]"></div>}
      <div className="flex flex-col justify-between gap-2 w-full">
        {tooltip?.map((item: TooltipListItem, idx: number) => {
          if (idx < 3) {
            return (
              <div key={idx} className="flex items-center justify-between gap-2">
                <p className="text-body-text font-Montserrat text-sm  font-medium ">{item.label}</p>
                <div className="text-Grey-900 text-sm font-semibold">{item.value}</div>
              </div>
            );
          } else if (idx === 3) {
            const remainingItems = tooltip.length - 3;
            const remainingSum = tooltip
              .slice(3)
              .reduce(
                (sum: number, item: TooltipListItem) =>
                  sum + (typeof item.value === 'number' ? item.value : parseFloat(item.value.toString())),
                0,
              );

            return (
              <div key="summary" className="flex items-center justify-between gap-2">
                <p className="text-body-text font-Montserrat text-sm font-medium">+{remainingItems} more</p>
                <div className="text-Grey-900 text-sm font-semibold">{remainingSum}</div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default PieChartCustomTooltip;
