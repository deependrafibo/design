export interface LegendItem {
  color: string;
  range_min: number;
  range_max: number;
}

export interface TalentScore {
  score: number;
}

export interface ChartDataItem {
  label: string;
  [talentName: string]: TalentScore | string;
}

export interface ChartConfig {
  legend: LegendItem[];
}

export type MatrixLegendItem = {
  color: string;
  range_min: number;
  range_max: number;
  legend_category_name?: string;
};

export type MatrixConfig = {
  legend?: MatrixLegendItem[];
};
export type MatrixDataItem = {
  label: string; // shown as a row label
  [key: string]: { score: number | null } | string; // column records with scores
};

export interface ColoredGridMatrixProps {
  matrixConfig: MatrixConfig;
  matrixData: MatrixDataItem[];
}
