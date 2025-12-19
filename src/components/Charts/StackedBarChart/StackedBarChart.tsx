import React from 'react';
import { StackedBarChartProps } from './types';
import { iconComponents } from '@/utils/getIcons';

export const StackedBarChart: React.FC<StackedBarChartProps> = ({ data, legend, maxValue, className = '', icon }) => {
  const computedMax = maxValue || Math.max(...data.map((d) => d.segments.reduce((sum, s) => sum + s.value, 0)));
  const ChartIcon = iconComponents[icon as keyof typeof iconComponents] ?? iconComponents['user'];

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {/* Legend */}
      <div className="flex gap-2 mb-4">
        <p className="text-xs text-gray-700 font-medium">Legend:</p>
        {legend.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span style={{ background: item.color }} className="w-[12px] h-[12px] rounded" />
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bars with aligned percentage header */}
      {data.map((bar, idx) => (
        <div key={idx} className="flex items-center gap-6">
          <div className="text-xs font-normal text-gray-700 truncate w-[8%]">{bar.category}</div>

          <div className="flex-1 relative">
            {/* Percentage Header - positioned relative to each bar */}
            {idx === 0 && (
              <div className="flex w-full mb-1 absolute -top-6">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="flex-1 text-xs text-gray-400 text-start font-medium" style={{ minWidth: 0 }}>
                    {i * 10}%
                  </div>
                ))}
              </div>
            )}

            {/* Progress Bar */}
            <div className="flex overflow-hidden bg-gray-100">
              {bar.segments.map((seg, sidx) => {
                const width = `${(seg.value / computedMax) * 100}%`;
                return (
                  <div
                    key={sidx}
                    style={{ width, background: seg.color }}
                    className={`flex items-center justify-start relative px-5 py-2  ${sidx === bar.segments.length - 1 ? 'rounded-r-sm' : ''}`}
                  >
                    <span className="flex items-center justify-center gap-1 text-xs font-semibold text-white px-2 py-1 bg-white rounded-full">
                      {<ChartIcon color="#0185E4" width={16} height={16} />}
                      <p className="text-sm font-semibold text-secondary-500">{seg.value}</p>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
