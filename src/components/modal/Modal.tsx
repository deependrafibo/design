import { X } from 'react-feather';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { cn } from '@/lib/utils';
import { ModalProps } from './types';

export function Modal(props: ModalProps) {
  const {
    children,
    onClose,
    isOpen = false,
    className = 'max-w-2xl px-2 py-2 bg-white rounded-lg',
    headerClassName = 'px-4 pt-2 text-left text-lg font-semibold',
    title = 'Modal Title',
    contentClassName = 'px-4 py-2',
    showCloseButton = true,
  } = props;

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} modal onOpenChange={(newState: boolean) => !newState && onClose?.()}>
      <DialogContent hideClose className={cn('p-0 m-0 border-0 outline-none', className)}>
        <DialogTitle className={headerClassName}>{title}</DialogTitle>
        <div className={cn('max-h-[70vh] overflow-y-auto', contentClassName)}>{children}</div>
        {showCloseButton && onClose && (
          <div
            className="absolute -top-2 -right-2 bg-white rounded-md p-2 shadow-table cursor-pointer z-10 hover:bg-grey-50 transition-colors duration-200"
            onClick={onClose}
          >
            <X size={16} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
