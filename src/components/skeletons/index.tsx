import BoxSkeleton from './box-skeleton/BoxSkeleton';
import ImageSkeleton from './image-skeleton/ImageSkeleton';
import MatrixSkeleton from './matrix-skeleton/MatrixSkeleton';
import ParagraphSkeleton from './paragraph-skeleton/ParagraphSkeleton';

/**
 * Skeleton components for loading states
 */
export const Skeleton = {
  Box: BoxSkeleton,
  Image: ImageSkeleton,
  Matrix: MatrixSkeleton,
  Paragraph: ParagraphSkeleton,
};

/**
 * Type definition for Skeleton component
 */
export type SkeletonType = typeof Skeleton;

// Export individual components for direct imports
export { BoxSkeleton, ImageSkeleton, MatrixSkeleton, ParagraphSkeleton };
