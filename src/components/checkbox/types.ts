export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelClassName?: string;
  onChange?: (checked: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
