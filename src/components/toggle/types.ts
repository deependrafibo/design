export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  toggleClassName?: string;
  onChange?: (checked: boolean) => void;
}
