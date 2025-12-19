import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Sector, Tooltip, SectorProps } from 'recharts';
import PieChartCustomTooltip from '../utils/PieChartCustomTooltip';
import { useState, useMemo, JSX, SetStateAction } from 'react';
import ChartLayout from '../utils/chartLayout';
import { ChartLabelProps, PieChartProps } from './types';
import { TruncatedTextWithTooltip } from '../utils/commonUtils';

export const PieChart: React.FC<PieChartProps> = ({
  chartData,
  chartTitle,
  alignment = 'vertical',
  heightClassName,
  toolTipMessage,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeIndex, setActiveIndex] = useState<number | null>(null);

  const normalizedData = useMemo(
    () =>
      chartData.map((entry) => ({
        ...entry,
        normalizedValue: parseFloat(entry?.percentage?.replace('%', '')) || 0,
      })),
    [chartData],
  );

  const renderCustomLabel = useMemo(
    () =>
      ({ cx = 0, cy = 0, midAngle, innerRadius = 0, outerRadius = 0, index }: ChartLabelProps): JSX.Element | null => {
        if (index === undefined || index < 0 || index >= normalizedData?.length) return null;

        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) / 2;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text
            x={x}
            y={y}
            fill={normalizedData[index]?.color}
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            className="text-center text-lg font-semibold"
          >
            {normalizedData[index]?.percentage}
          </text>
        );
      },
    [normalizedData],
  );

  const renderActiveShape = useMemo(
    () =>
      ({
        cx = 0,
        cy = 0,
        innerRadius = 0,
        outerRadius = 0,
        startAngle = 0,
        endAngle = 0,
        fill = 'transparent',
      }: SectorProps): JSX.Element => (
        <g>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
            style={{ opacity: 0.2 }}
          />
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={outerRadius + 2}
            outerRadius={outerRadius + 5}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
        </g>
      ),
    [],
  );

  const Legend = useMemo(() => {
    const columns = [];
    const itemsPerColumn = 5;
    for (let i = 0; i < chartData?.length; i += itemsPerColumn) {
      columns.push(chartData.slice(i, i + itemsPerColumn));
    }

    return (
      <div className="grid gap-6 w-full py-6" style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}>
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-3">
            {col?.map((entry, index) => (
              <div key={`legend-${colIdx}-${index}`} className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 flex-[1_0_0]">
                  <div className="flex gap-2 items-center text-left">
                    <div className="w-1 rounded self-stretch" style={{ backgroundColor: entry.color }}></div>
                    <TruncatedTextWithTooltip text={entry.name} />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm font-semibold text-dark">{entry.value}</span>
                    <div className="w-[1px] h-5 bg-grey-50"></div>
                    <span className="text-sm font-semibold text-dark">{entry.percentage}</span>
                  </div>
                </div>
                {index !== col?.length - 1 && <div className="border-b border-grey-border w-full"></div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }, [chartData]);

  const dividerClass = alignment === 'vertical' ? 'border-t border-grey-border' : 'border-l border-grey-border pl-5';

  return (
    <ChartLayout
      title={chartTitle || 'Pie chart'}
      isDonutChart={false}
      showDownloadIcon={true}
      toolTipMessage={toolTipMessage}
      heightClassName={heightClassName}
    >
      <div className={`flex gap-4 w-full flex-1 ${alignment === 'vertical' ? 'flex-col' : 'flex-row'}`}>
        <div className="flex items-center justify-between pb-3 gap-4 flex-col md:flex-row w-full flex-1">
          <ResponsiveContainer width="100%" height={320}>
            <RechartsPieChart>
              <Pie
                data={normalizedData}
                dataKey="normalizedValue"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                labelLine={false}
                startAngle={150}
                endAngle={520}
                label={renderCustomLabel}
                activeShape={renderActiveShape}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onMouseEnter={(_: any, index: SetStateAction<number | null>) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {normalizedData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    style={{ opacity: 0.2 }}
                    strokeWidth={normalizedData?.length > 1 ? 2 : 0}
                  />
                ))}
              </Pie>
              <Tooltip content={<PieChartCustomTooltip />} />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>

        <div className={`w-[100%] flex ${dividerClass}`}>{Legend}</div>
      </div>
    </ChartLayout>
  );
};

export default PieChart;
