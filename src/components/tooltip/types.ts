export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  message: React.ReactNode;
  position?: TooltipPosition;
  className?: string;
  triangleStyle?: string;
  zIndex?: number;
  children: React.ReactNode;
}
