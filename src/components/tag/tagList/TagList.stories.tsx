import { Meta, StoryObj } from '@storybook/react';
import { TagList } from './TagList';

const meta: Meta<typeof TagList> = {
  title: 'Components/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a group of color-coded tags for categories like Collaboration, Leadership, etc.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    labels: {
      control: {
        type: 'check',
      },
      options: [
        'Collaboration',
        'Leadership',
        'Communication',
        'Innovation',
        'Effectiveness',
        'Problem Solving',
        'Unknown',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    labels: ['Collaboration', 'Leadership', 'Communication', 'Innovation', 'Effectiveness', 'Problem Solving'],
  },
};

export const WithUnknownLabel: Story = {
  args: {
    labels: ['Unknown', 'Leadership', 'Effectiveness'],
  },
};

export const Empty: Story = {
  args: {
    labels: [],
  },
};
