import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {
    value: 70,
    label: 'Utilized',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Percentage of progress (0–100)',
    },
    label: {
      control: 'text',
      description: 'Label displayed next to the percentage',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 70,
    label: 'Utilized',
  },
};

export const LowUtilization: Story = {
  args: {
    value: 20,
    label: 'Utilized',
  },
};

export const MediumUtilization: Story = {
  args: {
    value: 45,
    label: 'Utilized',
  },
};

export const HighUtilization: Story = {
  args: {
    value: 100,
    label: 'Utilized',
  },
};
