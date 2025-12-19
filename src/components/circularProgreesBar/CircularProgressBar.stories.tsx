import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgressBar } from './CircularProgressBar';

const meta: Meta<typeof CircularProgressBar> = {
  title: 'Components/CircularProgressBar',
  component: CircularProgressBar,
  tags: ['autodocs'],
  args: {
    value: 50,
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Percentage of the circular progress',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CircularProgressBar>;

export const Default: Story = {
  args: { value: 50 },
};

export const Red: Story = {
  args: { value: 25 },
};

export const Yellow: Story = {
  args: { value: 50 },
};

export const Green: Story = {
  args: { value: 85 },
};
