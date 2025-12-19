export type ToastVariant = 'filled' | 'light' | 'outline';

export enum ToastType {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
}

export type ToastProps = {
  title?: string;
  type: ToastType;
  toastId?: string;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  hideIcon?: boolean;
  hideTitle?: boolean;
  variant?: ToastVariant;
  onClose?: () => void;

  // Tailwind class overrides
  containerClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  closeBtnClassName?: string;
};
