export interface MemberData {
  name: string;
  value: number;
  percentage: string;
  color: string;
}

export interface DonutChartProps {
  data: MemberData[];
  title: string;
  centerText?: string;
  isDonutChart?: boolean;
  toolTipMessage?: string;
  isLoading?: boolean;
  heightClassName?: string;
  pieInnerRadius?: number;
  pieOuterRadius?: number;
}
