import type { Meta, StoryObj } from '@storybook/react';
import { MilestoneBadge } from './MilestoneBadge';

const meta: Meta<typeof MilestoneBadge> = {
  title: 'Components/MilestoneBadge',
  component: MilestoneBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The milestone number or title',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '1',
  },
};

export const Milestone2: Story = {
  args: {
    title: '2',
  },
};

export const Milestone10: Story = {
  args: {
    title: '10',
  },
};

export const WithCustomClass: Story = {
  args: {
    title: '3',
    className: 'ml-2',
  },
};
