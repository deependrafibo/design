export interface BoxSkeletonProps {
  className: string; // Mandatory for height and width to be set
}

export interface ImageSkeletonProps {
  className?: string;
}

export interface MatrixSkeletonProps {
  rows: number;
  cols: number;
  className?: string;
  gridItemClassName?: string;
}

export interface ParagraphSkeletonProps {
  className?: string;
  lines?: number;
}
