import { Meta, StoryObj } from '@storybook/react';
import ImageSkeleton from './ImageSkeleton';

const imageSkeletonMeta: Meta<typeof ImageSkeleton> = {
  title: 'Components/Skeletons/ImageSkeleton',
  component: ImageSkeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Image skeleton component for displaying loading state of images.',
      },
    },
  },
  tags: ['autodocs'],
};

export default imageSkeletonMeta;
type ImageSkeletonStory = StoryObj<typeof ImageSkeleton>;

export const Default: ImageSkeletonStory = {
  args: {
    className: 'w-64 h-64',
  },
};

export const Small: ImageSkeletonStory = {
  args: {
    className: 'w-32 h-32',
  },
};

export const Wide: ImageSkeletonStory = {
  args: {
    className: 'w-96 h-48',
  },
};

export const Tall: ImageSkeletonStory = {
  args: {
    className: 'w-48 h-96',
  },
};
