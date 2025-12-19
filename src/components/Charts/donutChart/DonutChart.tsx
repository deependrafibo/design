import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';
import { DonutChartProps } from './types';
import CustomPieChartTooltip from '../utils/PieChartCustomTooltip';
import ChartLayout from '../utils/chartLayout';

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  centerText = 'Donunt Chart',
  title = 'Donut Chart',
  isDonutChart,
  toolTipMessage,
  heightClassName,
  pieInnerRadius = 60,
  pieOuterRadius = 75,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <div className="w-full rounded-xl py-5 flex flex-col gap-6 flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip content={<CustomPieChartTooltip />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={pieInnerRadius}
              outerRadius={pieOuterRadius}
              startAngle={-230}
              endAngle={135}
              paddingAngle={3}
              stroke="none"
              cornerRadius={20}
            >
              <Label content={<CenterLabel />} position="center" />
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-4 flex gap-6 flex-wrap">
          {data.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2">
                <div className="w-1 rounded-[10px] self-stretch" style={{ backgroundColor: item.color }}></div>
                <div className="flex flex-col">
                  <span className="text-xs text-grey-700 font-medium font-Montserrat">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-grey-900 font-Montserrat">{item.value}</span>
                    <div className="w-[1px] h-5 rounded-[10px] bg-grey-50"></div>
                    <span className="text-base font-semibold text-grey-900 font-Montserrat">{item.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ChartLayout>
  );
};

export default DonutChart;
