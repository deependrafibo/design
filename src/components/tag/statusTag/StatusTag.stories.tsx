import { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Components/StatusTag',
  component: StatusTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays a status tag with color-coded background and label for status values like ACTIVE or COMPLETED.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['ACTIVE', 'COMPLETED'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof StatusTag>;

export const Active: Story = {
  args: {
    status: 'ACTIVE',
  },
};

export const Completed: Story = {
  args: {
    status: 'COMPLETED',
  },
};
