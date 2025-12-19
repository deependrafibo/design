export interface StackedBarSegment {
  label: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}

export interface StackedBarData {
  category: string;
  segments: StackedBarSegment[];
}

export interface StackedBarChartProps {
  data: StackedBarData[];
  legend: { label: string; color: string }[];
  maxValue?: number;
  className?: string;
  icon?: string;
}
