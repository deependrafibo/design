import { cn } from '@/lib/utils';
import { BoxSkeletonProps } from '../types';

export default function BoxSkeleton({ className }: BoxSkeletonProps) {
  return (
    <div role="status" className={cn('animate-pulse', className)}>
      <div className="h-full w-full bg-gray-300 rounded dark:bg-gray-700" />
    </div>
  );
}
