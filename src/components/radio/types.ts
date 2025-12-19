export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
  onChange?: (checked: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
