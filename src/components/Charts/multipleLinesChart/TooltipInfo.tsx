import { Info } from 'react-feather';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type TooltipSide = 'top' | 'right' | 'bottom' | 'left';
type TooltipAlign = 'start' | 'center' | 'end';

interface TooltipInfoProps {
  children: React.ReactNode;
  iconSize?: number;
  trigger?: React.ReactNode | string;
  side?: TooltipSide;
  align?: TooltipAlign;
  sideOffset?: number;
  alignOffset?: number;
  className?: string;
}

export default function TooltipInfo({
  children,
  iconSize = 12,
  trigger,
  side = 'top',
  align = 'center',
  sideOffset = 4,
  alignOffset = 0,
  className,
}: TooltipInfoProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {trigger || <Info size={iconSize} color="#5E5873" className="cursor-pointer" />}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={className}
        >
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
