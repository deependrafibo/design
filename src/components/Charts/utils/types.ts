export interface IChartLayoutProps {
  title: string;
  children: React.ReactNode;
  isDonutChart?: boolean;
  showDownloadIcon?: boolean;
  toolTipMessage?: string;
  heightClassName?: string;
  className?: string;
}

export interface TooltipListItem {
  label: string;
  value: number | string;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      value: number | string;
      percentage: string;
      color: string;
      tooltip?: TooltipListItem[];
    };
  }>;
}
