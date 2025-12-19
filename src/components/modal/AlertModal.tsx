import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { Button } from '../button/Button';
import { cn } from '@/lib/utils';
import type { AlertModalProps } from './types';
import videoOff from '@/assets/icons/interview/VideoOff.svg';
import micOff from '@/assets/icons/interview/MicOff.svg';
import idle from '@/assets/icons/interview/Idle.svg';
import cross from '@/assets/icons/interview/Cross.svg';
export function AlertModal(props: AlertModalProps) {
  const {
    isOpen,
    onClose,
    title,
    description,
    icon,
    iconType = 'video',
    countdownSeconds,
    onCountdownEnd,
    primaryAction,
    secondaryAction,
    className,
  } = props;

  const [remaining, setRemaining] = useState<number | undefined>(countdownSeconds);

  const iconMap = {
    video: videoOff,
    mic: micOff,
    idle: idle,
    cross: cross,
  };

  const iconAltMap = {
    video: 'video off',
    mic: 'mic off',
    idle: 'idle',
    cross: 'cross',
  };

  const selectedIcon = iconMap[iconType];
  const selectedAlt = iconAltMap[iconType];

  useEffect(() => {
    setRemaining(countdownSeconds);
  }, [countdownSeconds]);

  useEffect(() => {
    if (!isOpen) return;
    if (remaining === undefined) return;
    if (remaining <= 0) {
      onCountdownEnd?.();
      return;
    }
    const time = setTimeout(
      () => setRemaining((remaining) => (remaining !== undefined ? remaining - 1 : remaining)),
      1000,
    );
    return () => clearTimeout(time);
  }, [remaining, isOpen, onCountdownEnd]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} modal onOpenChange={(newState: boolean) => !newState && onClose?.()}>
      <DialogContent hideClose className={cn('py-10 px-8 bg-white rounded-[6px]', className)}>
        <div className="flex items-center gap-6 justify-between w-full">
          <div className="w-[30%]">
            <div className="w-[180px] h-[180px]">
              {icon ?? <img src={selectedIcon} alt={selectedAlt} className="w-full h-full" />}
            </div>
          </div>
          <div className="flex flex-col gap-15 w-[70%]">
            <div className="flex flex-col gap-4">
              <DialogTitle className="text-2xl font-medium font-Montserrat text-custom-grey-600">{title}</DialogTitle>
              {description && <p className="text-lg font-Montserrat text-body-text">{description}</p>}
            </div>
            <div className="flex gap-4 items-center justify-end">
              {primaryAction && (
                <Button
                  variant={primaryAction.variant ?? 'errorOutline'}
                  className={primaryAction.className ?? ''}
                  onClick={primaryAction.onClick}
                >
                  {remaining !== undefined && countdownSeconds !== undefined
                    ? primaryAction.label.replace(/\d+/, String(remaining))
                    : primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant={secondaryAction.variant ?? 'primary'}
                  className={secondaryAction.className ?? ''}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AlertModal;
