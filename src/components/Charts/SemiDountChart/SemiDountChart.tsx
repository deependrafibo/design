/* eslint-disable @typescript-eslint/no-explicit-any */

import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip as RechartsTooltip } from 'recharts';
import ChartLayout from '../utils/chartLayout';
import { DonutChartProps } from './types';
import { TruncatedTextWithTooltip } from '../utils/commonUtils';

export const SemiDountChart: React.FC<DonutChartProps> = ({
  data,
  centerText = 'Universities',
  title,
  isDonutChart = true,
  toolTipMessage,
  heightClassName,
  pieInnerRadius = 60,
  pieOuterRadius = 75,
  countUniqueForTotal = false,
}) => {
  const total = countUniqueForTotal
    ? new Set(data.map((item) => item.name)).size
    : data.reduce((sum, item) => sum + item.value, 0);

  const CenterLabel = ({ viewBox }: any) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-[26px] font-bold fill-[#2E2E30]"
          data-testid="donut-center-value"
        >
          {total}
        </text>
        <text
          x={cx}
          y={cy + 15}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-xs font-medium fill-[#787878] font-Montserrat"
          data-testid="donut-center-subtitle"
        >
          {centerText}
        </text>
      </g>
    );
  };

  return (
    <ChartLayout
      title={title}
      isDonutChart={isDonutChart}
      toolTipMessage={toolTipMessage}
      heightClassName={heightClassName}
    >
      <div className="w-full rounded-xl pt-2 flex flex-col flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <RechartsTooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontFamily: 'Montserrat',
              }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload?.[0];
                  return (
                    <div className="bg-white border border-gray-200 rounded-md px-2 pt-2 shadow-lg flex flex-col gap-2 items-start">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: data?.payload?.color }}></div>
                        <div className="text-xs text-Grey-700  mt-[2px]">{data?.name}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">{data?.value}</div>
                        <div className="w-[1px] h-5 rounded-[10px] bg-grey-50"></div>
                        <div className="text-sm font-medium text-center">{data?.payload?.percentage}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="60%"
              innerRadius={pieInnerRadius}
              outerRadius={pieOuterRadius}
              startAngle={200}
              endAngle={-20}
              paddingAngle={2}
              stroke="none"
              cornerRadius={20}
            >
              <Label content={<CenterLabel />} position="center" />
              {data?.map((entry, index) => <Cell key={`cell-${index}`} fill={entry?.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="bg-grey-border h-[1px] w-full" />

        <div className="w-full overflow-y flex flex-col divide-y divide-grey-border">
          {data?.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 px-1">
              <div className="flex items-center gap-2 w-[70%]">
                <div className="w-1 h-5 rounded bg-light-gray" style={{ backgroundColor: item?.color }}></div>
                {/* <span className="text-sm text-gray-700 font-medium truncate">{item?.name}</span> */}
                <TruncatedTextWithTooltip text={item?.name} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">{item?.value}</span>
                <div className="w-[1px] h-5 rounded-[10px] bg-grey-50"></div>

                <span className="text-sm font-semibold text-gray-900">{item?.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ChartLayout>
  );
};

export default SemiDountChart;
