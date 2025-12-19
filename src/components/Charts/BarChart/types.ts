export interface UserData {
  name?: string;
  role?: string;
  imageUrl?: string;
  wows?: number;
}

export interface ChartDataItem {
  label: string;
  value: number;
  color?: string;
  user?: UserData;
  tooltip?: React.ReactNode;
}

export interface BarChartProps {
  chartData: ChartDataItem[];
  barColor?: string;
  className?: string;
  height?: number;
  showUserCards?: boolean;
  showGridLines?: boolean;
  showYAxisLabels?: boolean;
  showTooltip?: boolean;
  containerClassName?: string;
}
