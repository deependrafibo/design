import type { Meta, StoryObj } from '@storybook/react';
import { InterviewTagList } from './InterviewTagList';

const meta: Meta<typeof InterviewTagList> = {
  title: 'Components/InterviewTagList',
  component: InterviewTagList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tag component for individual interview labels with theme-based color styles.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InterviewTagList>;

export const CoachingInterview: Story = {
  args: {
    labels: 'Coaching Interview',
  },
};

export const MilestoneReview: Story = {
  args: {
    labels: 'Milestone Review',
  },
};

export const MultipleTagsExample: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <InterviewTagList labels="Coaching Interview" />
      <InterviewTagList labels="Milestone Review" />
    </div>
  ),
};
