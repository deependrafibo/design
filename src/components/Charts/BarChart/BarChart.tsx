import React, { useState } from 'react';
import { BarChartProps } from './types';
import { getInitials } from '../../../utils/getInitials';
import { getColorPair } from '@/utils/getIconColors';
import newIcon from './../../../../public/new.svg';

export const BarChart: React.FC<BarChartProps> = ({
  chartData,
  barColor = '#0185E4',
  className = '',
  height,
  showUserCards = true,
  showGridLines = true,
  showYAxisLabels = true,
  showTooltip = true,
  containerClassName = '',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Top Section - User Cards (Optional) */}
      {showUserCards && (
        <div className="flex justify-between items-start mb-8 gap-2 ">
          {chartData.map((eachRow) => {
            const iconColor = getColorPair(eachRow.user?.name || eachRow.label || '');
            return (
              <div
                key={eachRow.label}
                className="flex flex-col items-start overflow-hidden text-ellipsis border border-gray-200 rounded-lg px-3 py-2 flex-1 min-w-0"
              >
                {/* Score */}
                <div className="flex items-start gap-2.5 flex-col">
                  <div className="text-lg font-semibold text-Grey-900 mb-1 text-left">
                    {eachRow.value}
                    <span className="text-sm text-Grey-400 font-normal">/100</span>
                  </div>

                  <div className="w-20 h-px bg-Grey-50"></div>
                  <div className="flex items-center gap-2 bg-white min-w-0">
                    {/* Avatar */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                      style={{
                        backgroundColor: `${iconColor.lighter}33`,
                        color: iconColor.darker,
                      }}
                    >
                      {eachRow.user?.imageUrl ? (
                        <img src={eachRow.user.imageUrl} alt="avatar" className="w-full h-full rounded-full" />
                      ) : (
                        getInitials(eachRow.user?.name || eachRow.label || '')
                      )}
                    </div>

                    {/* User Details */}
                    <div className="flex flex-col text-left min-w-0 flex-1">
                      <div className="text-xs font-semibold text-Grey-600 truncate">
                        {eachRow.user?.name || eachRow.label}
                      </div>
                      <div className="text-xs text-Grey-300 truncate">{eachRow.user?.role || 'Developer'}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Chart Section */}
      <div className={`relative ${className}`}>
        {/* Chart Container with Grid */}
        <div className="flex">
          {/* Y-axis labels */}
          {showYAxisLabels && (
            <div className="flex flex-col justify-between text-xs text-gray-500 text-right pr-3 flex-shrink-0 w-8 gap-4">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>
          )}

          {/* Chart Area */}
          <div className="flex-1 relative">
            {/* Horizontal grid lines */}
            {showGridLines && (
              <div
                className="absolute inset-0 flex flex-col justify-between pointer-events-none"
                style={{ height: height ? `${height}px` : '100%' }}
              >
                {[100, 80, 60, 40, 20, 0].map((value) => (
                  <div key={value} className="w-full border-t border-dashed border-gray-200" />
                ))}
              </div>
            )}

            {/* Bars Container */}
            <div
              className="flex items-end justify-between gap-4 relative"
              style={{ height: height ? `${height}px` : '100%' }}
            >
              {/* Bars */}
              {chartData.map((eachRow, index) => {
                const barHeight = `${eachRow.value}%`;
                const isHovered = hoveredIndex === index;
                const currentColor = eachRow.color || barColor;

                return (
                  <div
                    key={eachRow.label}
                    className="flex flex-col items-center flex-1 relative z-10 h-full justify-end"
                  >
                    {/* Bar */}
                    <div
                      className="w-full rounded-t-lg transition-all duration-200 cursor-pointer relative min-h-[4px]"
                      style={{
                        height: barHeight,
                        backgroundColor: currentColor,
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {showTooltip && isHovered && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-white border border-gray-200 text-gray-600 rounded-lg px-3 py-2 text-sm whitespace-nowrap z-20 shadow-lg transition-all duration-200 ease-in-out">
                          <div className="font-semibold text-Grey-400 text-[10px] text-start mb-1">
                            {(eachRow.user?.name || eachRow.label).toUpperCase()}
                          </div>
                          <div className="text-xs opacity-90 text-Grey-400 flex items-center gap-1 mb-1 ml-0.5">
                            <div
                              className="w-[12px] h-[12px] rounded text-xs font-semibold"
                              style={{ backgroundColor: currentColor }}
                            />
                            Learnability: <span className="text-Grey-700 font-semibold">{eachRow.value}/100</span>
                          </div>
                          <div className="text-xs opacity-90 text-Grey-400 flex items-start gap-1">
                            <img src={newIcon} width={16} height={16} alt="" />
                            Wows: <span className="text-Grey-700 font-semibold">{eachRow.user?.wows || 0}</span>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* X-axis Labels */}
            <div className="flex justify-between gap-4 mt-2">
              {chartData.map((eachRow) => (
                <div key={eachRow.label} className="flex-1 text-xs text-Grey-400 font-semibold text-center">
                  {eachRow.user?.name?.split(' ')[0] || eachRow.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
