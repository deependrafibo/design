import type { Meta, StoryObj } from '@storybook/react';
import { GrowthBadge } from './GrowthBadge';

const meta: Meta<typeof GrowthBadge> = {
  title: 'Components/GrowthBadge',
  component: GrowthBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: 'text',
      description: 'The percentage value to display',
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
    percentage: '10%',
  },
};

export const SingleDigit: Story = {
  args: {
    percentage: '5%',
  },
};

export const Small: Story = {
  args: {
    percentage: '3%',
  },
};

export const Large: Story = {
  args: {
    percentage: '25%',
  },
};

export const Negative: Story = {
  args: {
    percentage: '-8%',
    size: 'md',
  },
};

export const Neutral: Story = {
  args: {
    percentage: '00',
    size: 'md',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <GrowthBadge percentage="+15%" />
      <GrowthBadge percentage="-5%" />
      <GrowthBadge percentage="00" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <GrowthBadge percentage="+5%" />
      <GrowthBadge percentage="+10%" />
      <GrowthBadge percentage="+20%" />
    </div>
  ),
};

export const AutoIconSelection: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <GrowthBadge percentage="+12%" />
      <GrowthBadge percentage="00" />
      <GrowthBadge percentage="-8%" />
    </div>
  ),
};

export const NumberFormatting: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <GrowthBadge percentage="1" />
      <GrowthBadge percentage="5" />
      <GrowthBadge percentage="10" />
      <GrowthBadge percentage="20" />
      <GrowthBadge percentage="00" />
    </div>
  ),
};
