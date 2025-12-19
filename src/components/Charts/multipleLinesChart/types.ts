export type ChartConfig = {
  name: string;
  color: string;
  dataKey: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeDasharray: string;
  strokeDashoffset: number;
  strokeLinecap: string;
  label: string;
};

export enum RosetteType {
  TEAM = 'TEAM',
  INDIVIDUAL = 'INDIVIDUAL',
}
