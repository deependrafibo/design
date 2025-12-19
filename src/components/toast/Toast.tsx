import { Info, X } from 'react-feather';
import toast from 'react-hot-toast';
import { ToastProps, ToastType, ToastVariant } from './types';

export function CustomToast({
  type,
  title,
  toastId,
  icon,
  closeIcon,
  hideIcon = false,
  hideTitle = false,
  variant = 'light',
  onClose,
  containerClassName = 'w-full',
  contentClassName = '',
  iconClassName = '',
  titleClassName = '',
  closeBtnClassName = '',
}: ToastProps) {
  const defaultIconColor = {
    [ToastType.SUCCESS]: 'var(-success)',
    [ToastType.ERROR]: 'var(-error)',
  };

  const baseClasses: Record<ToastType, Record<ToastVariant, string>> = {
    [ToastType.SUCCESS]: {
      filled: 'bg-success text-text-white border-l-success-border',
      light: 'bg-success-light text-success-outline border-l-success-outline',
      outline: 'bg-transparent text-success-outline border border-success-border',
    },
    [ToastType.ERROR]: {
      filled: 'bg-error text-text-white border-l-error-border',
      light: 'bg-error-light text-error-outline border-l-error-outline',
      outline: 'bg-transparent text-error-outline border border-error-border',
    },
    [ToastType.WARNING]: {
      filled: 'bg-warning text-text-white border-l-warning-border',
      light: 'bg-warning-light text-warning-outline border-l-warning-border',
      outline: 'bg-transparent text-warning-border border border-warning-border',
    },
    [ToastType.INFO]: {
      filled: 'bg-info text-text-white border-l-info-border',
      light: 'bg-info-light text-info-outline border-l-info-border',
      outline: 'bg-transparent text-info-border border border-info-border',
    },
  };

  const variantClasses = baseClasses[type][variant];

  return (
    <div
      role="alert"
      className={` rounded-md p-4 shadow-[0px_2px_12px_rgba(0,0,0,0.08)] flex items-center w-full justify-between gap-6 text-xs border-l-4 ${variantClasses} ${containerClassName}`}
    >
      <div className={`flex items-center gap-2 ${contentClassName}`}>
        {!hideIcon && (
          <span className={iconClassName}>{icon || <Info size={16} className={`text-[${defaultIconColor}]`} />}</span>
        )}

        <div>
          {!hideTitle && title && (
            <span className={`block font-montserrat text-[14px] font-semibold leading-normal ${titleClassName}`}>
              {title}
            </span>
          )}
        </div>
      </div>

      <div
        className={`cursor-pointer ${closeBtnClassName}`}
        onClick={() => {
          onClose?.();
          toast.dismiss(toastId);
        }}
      >
        {closeIcon || <X size={15} className="opacity-50" />}
      </div>
    </div>
  );
}
