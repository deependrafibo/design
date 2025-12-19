import { Meta, StoryObj } from '@storybook/react';
import BoxSkeleton from './BoxSkeleton';

const boxSkeletonMeta: Meta<typeof BoxSkeleton> = {
  title: 'Components/Skeletons/BoxSkeleton',
  component: BoxSkeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Box skeleton component for displaying loading states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default boxSkeletonMeta;
type BoxSkeletonStory = StoryObj<typeof BoxSkeleton>;

export const Default: BoxSkeletonStory = {
  args: {
    className: 'h-16 w-16',
  },
};

export const Wide: BoxSkeletonStory = {
  args: {
    className: 'h-8 w-64',
  },
};

export const Tall: BoxSkeletonStory = {
  args: {
    className: 'h-32 w-12',
  },
};

export const Square: BoxSkeletonStory = {
  args: {
    className: 'h-24 w-24',
  },
};

export const Rounded: BoxSkeletonStory = {
  args: {
    className: 'h-20 w-20 rounded-full',
  },
};
