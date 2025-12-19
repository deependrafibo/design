export interface Option {
  label: string | React.ReactNode;
  value: string;
}

export interface DropdownProps {
  label?: string;
  options: Option[];
  width?: string;
  placeholder?: string;
  labelClassName?: string;
  className?: string;
  optionStyle?: string;
  multi?: boolean;
  searchable?: boolean;
  paginated?: boolean;
  loading?: boolean;
  selected?: Option | Option[] | null;
  onChange?: (selected: Option | Option[] | null) => void;
  onLoadMore?: () => void;
  onSearch?: (query: string) => void;
  required?: boolean;
  rank?: { label: string; value: string };
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  showTick?: boolean;
  deselectable?: boolean;
}
