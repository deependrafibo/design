export interface DropdownItem {
  id: string;
  label: string;
  children?: DropdownItem[];
}

export interface MultiLevelDropdownProps {
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  className?: string;
  placeholder?: string;
  label?: string;
  width?: string;
  required?: boolean;
}
