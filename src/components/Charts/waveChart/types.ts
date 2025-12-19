/* eslint-disable @typescript-eslint/no-explicit-any */
export interface WaveChartConfig {
  [key: string]: {
    label: string;
    topCompetency: boolean;
  };
}

export interface WaveChartProps {
  maxYAxis?: number;
  chartData: any;
  chartConfig: WaveChartConfig;
  showFilters?: boolean;
  XAxisDataKey: string;
  YAxisDataKey?: 'talent' | 'cohort';
  containerClassName?: string;
  containerClassWidth?: string;
  highlightByKey?: keyof WaveChartConfig[string];
  customXAxisLabel?: React.ComponentType<any>;
}
