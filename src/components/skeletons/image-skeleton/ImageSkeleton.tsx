import { cn } from '@/lib/utils';
import { ImagePlaceholder } from '@/assets/icons/ImagePlaceholder';
import { ImageSkeletonProps } from '../types';

export default function ImageSkeleton({ className }: ImageSkeletonProps) {
  return (
    <div role="status" className={cn('animate-pulse flex items-center', className)}>
      <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
        <ImagePlaceholder />
      </div>
    </div>
  );
}
