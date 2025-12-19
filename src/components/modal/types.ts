export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
  title?: string;
  showCloseButton?: boolean;
  contentClassName?: string;
  headerClassName?: string;
};

import type { ButtonVariant } from '@/components/button/types';

export type AlertModalAction = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  className?: string;
};

export type IconType = 'video' | 'mic' | 'idle' | 'cross';

export type AlertModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  iconType?: IconType;
  countdownSeconds?: number;
  onCountdownEnd?: () => void;
  primaryAction?: AlertModalAction;
  secondaryAction?: AlertModalAction;
  className?: string;
};
