import { Meta, StoryObj } from '@storybook/react';
import MatrixSkeleton from './MatrixSkeleton';

const matrixSkeletonMeta: Meta<typeof MatrixSkeleton> = {
  title: 'Components/Skeletons/MatrixSkeleton',
  component: MatrixSkeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Matrix skeleton component for displaying loading states in a grid layout.',
      },
    },
  },
  tags: ['autodocs'],
};

export default matrixSkeletonMeta;
type MatrixSkeletonStory = StoryObj<typeof MatrixSkeleton>;

export const Default: MatrixSkeletonStory = {
  args: {
    rows: 4,
    cols: 5,
    gridItemClassName: 'h-7 w-28',
  },
};

export const Small: MatrixSkeletonStory = {
  args: {
    rows: 4,
    cols: 5,
    gridItemClassName: 'h-4 w-8',
  },
};

export const Large: MatrixSkeletonStory = {
  args: {
    rows: 5,
    cols: 4,
    gridItemClassName: 'h-10 w-20',
  },
};

export const WideGrid: MatrixSkeletonStory = {
  args: {
    rows: 2,
    cols: 4,
    gridItemClassName: 'h-10 w-50',
  },
};
