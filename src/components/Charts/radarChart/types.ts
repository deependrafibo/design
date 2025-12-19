/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RadarChartProps {
  chartData: any[];
  chartConfig: any[];
  isVisible?: boolean;
}

export interface SkillData {
  skill?: string;
  talent_score?: number;
  cohort_average?: number;
  top_competencies?: boolean;
  total_score?: number;
}

export interface ChartConfig {
  name: string;
  color: string;
}
