import { Meta, StoryObj } from '@storybook/react';
import ParagraphSkeleton from './ParagraphSkeleton';

const paragraphSkeletonMeta: Meta<typeof ParagraphSkeleton> = {
  title: 'Components/Skeletons/ParagraphSkeleton',
  component: ParagraphSkeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Paragraph skeleton component for displaying loading state of text content.',
      },
    },
  },
  tags: ['autodocs'],
};

export default paragraphSkeletonMeta;
type ParagraphSkeletonStory = StoryObj<typeof ParagraphSkeleton>;

export const Default: ParagraphSkeletonStory = {
  args: {
    lines: 3,
    className: 'w-96',
  },
  render: (args) => <ParagraphSkeleton {...args} />,
};

export const SingleLine: ParagraphSkeletonStory = {
  args: {
    lines: 1,
    className: 'w-96',
  },
  render: (args) => <ParagraphSkeleton {...args} />,
};

export const ManyLines: ParagraphSkeletonStory = {
  args: {
    lines: 6,
    className: 'w-96',
  },
  render: (args) => <ParagraphSkeleton {...args} />,
};

export const CustomWidth: ParagraphSkeletonStory = {
  args: {
    lines: 4,
    className: 'w-40',
  },
};
