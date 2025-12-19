export interface ChartEntry {
  name: string;
  value: number;
  percentage: string;
  color: string;
  tooltip?: Array<{
    label: string;
    value: string;
  }>;
}

export interface PieChartProps {
  chartData: ChartEntry[];
  chartTitle?: string;
  isDonutChart?: boolean;
  toolTipMessage?: string;
  showDownloadIcon?: boolean;
  alignment?: 'horizontal' | 'vertical';
  heightClassName?: string;
}

export interface ChartLabelProps {
  cx?: number;
  cy?: number;
  midAngle: number;
  innerRadius?: number;
  outerRadius?: number;
  index?: number;
}
