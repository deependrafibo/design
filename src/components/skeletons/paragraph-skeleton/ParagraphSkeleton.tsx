import { cn } from '@/lib/utils';
import BoxSkeleton from '@/components/skeletons/box-skeleton/BoxSkeleton';
import { ParagraphSkeletonProps } from '../types';

export default function ParagraphSkeleton({ className, lines = 3 }: ParagraphSkeletonProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <BoxSkeleton
          key={index}
          className={cn('h-4', {
            'w-full': index !== lines - 1,
            'w-2/3': index === lines - 1,
          })}
        />
      ))}
    </div>
  );
}
