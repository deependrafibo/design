import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';
import { iconComponents } from '../../../utils/getIcons';
import { IChartLayoutProps } from './types';
import { Tooltip } from '@/components/tooltip/Tooltip';

const ChartLayout: React.FC<IChartLayoutProps> = ({
  title,
  children,
  isDonutChart = false,
  toolTipMessage,
  heightClassName,
  className,
}) => {
  const InfoIcon = iconComponents['info'];

  return (
    <ChartLayoutWrapper
      className={(cn(isDonutChart ? 'w-[350px]' : 'w-[100%]'), className)}
      heightClassName={heightClassName}
    >
      <ChartLayoutHeader>
        <div className={'w-full flex items-center gap-2'}>
          <ChartLayoutTitle>{title}</ChartLayoutTitle>

          {toolTipMessage && (
            <Tooltip message={toolTipMessage}>
              <InfoIcon color="#9C9FA1" width={16} height={16} />
            </Tooltip>
          )}
        </div>
      </ChartLayoutHeader>

      <ChartLayoutContent>{children}</ChartLayoutContent>
    </ChartLayoutWrapper>
  );
};

export default ChartLayout;

const ChartLayoutWrapper = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { heightClassName?: string }
>(({ className, heightClassName, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('bg-white shadow rounded-lg flex flex-col', heightClassName ? heightClassName : 'flex-1', className)}
    {...props}
  />
));
ChartLayoutWrapper.displayName = 'ChartLayoutWrapper';

const ChartLayoutHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(`w-full flex items-center justify-between gap-2 border-b border-gray-200 py-4  px-5`, className)}
      {...props}
    />
  ),
);
ChartLayoutHeader.displayName = 'ChartLayoutHeader';

const ChartLayoutTitle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-base font-medium text-center font-Montserrat text-grey-700', className)}
      {...props}
    />
  ),
);
ChartLayoutTitle.displayName = 'ChartLayoutTitle';

const ChartLayoutContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-start justify-center text-center gap-1 px-6 flex-1', className)}
      {...props}
    />
  ),
);
ChartLayoutContent.displayName = 'ChartLayoutContent';
