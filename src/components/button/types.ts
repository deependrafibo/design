import { IconName } from '@/utils/getIcons';

export interface ButtonTheme {
  className: string;
  iconFill: string;
  iconFillDisabled?: string;
  iconClassName?: string;
}

export type ButtonVariant = 'primary' | 'outline' | 'text' | 'errorPrimary' | 'errorOutline' | 'errorText';

export interface ButtonProps {
  variant?: ButtonVariant;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  loaderSize?: 'small' | 'medium' | 'large';
  loaderColor?: string;
  type?: 'button' | 'submit' | 'reset';
}
