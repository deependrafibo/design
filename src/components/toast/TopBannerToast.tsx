import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CustomClock } from '@/assets/icons/CustomClock';
import { CustomWifi } from '@/assets/icons/CustomWifi';
import { CustomCheckCircle } from '@/assets/icons/CustomCheckCircle';
import { CustomX } from '@/assets/icons';

export type TopBannerToastType = 'info' | 'success' | 'warning' | 'error';

export type TopBannerToastProps = {
  type?: TopBannerToastType;
  message: string;
  title?: string;
  dismissText?: string;
  onDismiss?: () => void;
  className?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  titleClassName?: string;
  messageClassName?: string;
  iconColor?: string;
  closeIcon?: React.ReactNode;
  hideIcon?: boolean;
  hideTitle?: boolean;
  containerClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
  closeBtnClassName?: string;
  // Controlled visibility
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const typeClasses: Record<TopBannerToastType, string> = {
  info: 'bg-info-bg text-white',
  success: 'bg-success-bg',
  warning: 'bg-warning-bg text-white',
  error: 'bg-error-bg text-error',
};

const defaultIconColor: Record<TopBannerToastType, string> = {
  info: '#FFFFFF',
  success: '#28C76F',
  warning: '#FFFFFF',
  error: '#EA5455',
};

const defaultTitleClasses: Record<TopBannerToastType, string> = {
  info: 'text-white',
  success: 'text-success-500',
  warning: 'text-white',
  error: 'text-error',
};

const defaultMessageClasses: Record<TopBannerToastType, string> = {
  info: 'text-white',
  success: 'text-success-500',
  warning: 'text-white',
  error: 'text-error',
};

export function TopBannerToast({
  type = 'info',
  message,
  title,
  dismissText = 'Dismiss',
  onDismiss,
  className = '',
  icon,
  showIcon = true,
  titleClassName = '',
  messageClassName = '',
  iconColor,
  closeIcon,
  hideIcon,
  hideTitle,
  containerClassName,
  contentClassName = '',
  iconClassName = '',
  closeBtnClassName = '',
  open,
  onOpenChange,
}: TopBannerToastProps) {
  const [isVisible, setIsVisible] = useState(open);
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
    }
  }, [open]);

  const handleAnimationEnd = () => {
    if (!open && !isVisible) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  const color = iconColor ?? defaultIconColor[type];
  const effectiveContainerClass = cn(
    'fixed top-0 left-0 right-0 w-full z-50',
    'transition-all duration-300 ease-in-out',
    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
    className,
    containerClassName,
  );
  const shouldShowIcon = (showIcon ?? true) && !hideIcon;

  const defaultIconByType = (() => {
    switch (type) {
      case 'success':
        return <CustomCheckCircle color={color} height={16} width={16} />;
      case 'error':
        return <CustomWifi color={color} height={16} width={16} />;
      case 'info':
      default:
        return <CustomClock color={color} height={16} width={16} />;
    }
  })();

  const renderCloseIcon = closeIcon ?? <CustomX color="#6A7071" height={16} width={16} />;

  const handleDismiss = () => {
    onDismiss?.();
    onOpenChange?.(false);
  };

  return (
    <div role="status" className={effectiveContainerClass} onTransitionEnd={handleAnimationEnd}>
      <div className={cn('w-full px-6 py-2 flex items-center justify-between gap-2', typeClasses[type])}>
        <div className={cn('flex items-center gap-2', contentClassName)}>
          {shouldShowIcon && (
            <span className={cn('inline-flex items-center justify-center', iconClassName)}>
              {icon || defaultIconByType}
            </span>
          )}
          <div className="flex items-center gap-1">
            {!hideTitle && title && (
              <span className={cn('text-sm font-semibold', defaultTitleClasses[type], titleClassName)}>{title}</span>
            )}
            <span className={cn('text-sm font-medium', defaultMessageClasses[type], messageClassName)}>{message}</span>
          </div>
        </div>
        {type === 'success' ? (
          <button type="button" aria-label="Dismiss" className={cn('p-1', closeBtnClassName)} onClick={handleDismiss}>
            {renderCloseIcon}
          </button>
        ) : (
          <button
            type="button"
            className={cn('py-[2px] px-[8px] text-sm font-semibold', closeBtnClassName)}
            onClick={handleDismiss}
          >
            {dismissText}
          </button>
        )}
      </div>
    </div>
  );
}

export default TopBannerToast;
