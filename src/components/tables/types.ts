import { ColumnDef } from '@tanstack/react-table';

export type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  allowPagination?: boolean;
  paginationType?: 'PAGE_PAGINATION' | 'SCROLL_PAGINATION';
  allowColumnFilters?: boolean;
  allowSelection?: boolean;
  className?: string;
  highlightByKey?: string;
  highlightedValues?: string[];
  scrollHighlightedRowsIntoView?: boolean;
  highlightText?: string;
  pageSize?: number;
  totalItems?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  scrollHeightClassName?: string;
  nextPageLoading?: boolean;
  noWrapper?: boolean;
};
