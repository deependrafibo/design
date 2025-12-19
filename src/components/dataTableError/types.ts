export interface DataTableErrorProps {
  message?: string;
  className?: string;
  messageClassName?: string;
  showRetry?: boolean;
  onRetry?: () => void;
  retryText?: string;
}

export interface DataTableErrorColumn {
  key: string;
  label: string;
}

export interface ErrorField {
  field: string;
  reason: string;
}

export interface DataTableErrorRow {
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: string;
  row?: number;
  errors?: ErrorField[];
}

export interface DataTableErrorTableProps {
  columns: DataTableErrorColumn[];
  rows: DataTableErrorRow[];
  currentPage?: number;
  pageSize?: number;
  totalItems?: number;
  onPageChange?: (page: number) => void;
}
