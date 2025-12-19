import type { Meta, StoryObj } from '@storybook/react';
import { Timer } from './Timer';

const meta: Meta<typeof Timer> = {
  title: 'Components/Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startTime: {
      control: { type: 'number' },
      description: 'Starting time in seconds',
    },
    countUp: {
      control: { type: 'boolean' },
      description: 'If true, counts up from startTime instead of down',
    },
    completionTime: {
      control: { type: 'number' },
      description: 'Time in seconds when the timer will complete (for count-up mode)',
    },
    onComplete: {
      action: 'completed',
      description: 'Called when timer reaches zero (countdown) or completionTime (count-up)',
    },
    onZero: {
      action: 'zero reached',
      description: 'Called each time the timer reaches exactly zero',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timer>;

export const Countdown: Story = {
  args: {
    startTime: 60,
    countUp: false,
  },
};

export const CountUp: Story = {
  args: {
    startTime: 0,
    countUp: true,
  },
};

export const CountUpWithCompletion: Story = {
  args: {
    startTime: 0,
    countUp: true,
    completionTime: 10,
    onComplete: () => console.log('Count-up timer completed!'),
  },
};

export const WithZeroCallback: Story = {
  args: {
    startTime: 5,
    countUp: false,
    onZero: () => console.log('Timer reached zero!'),
  },
};

export const CustomStyle: Story = {
  args: {
    startTime: 30,
    countUp: false,
    className: 'text-2xl text-blue-600 font-bold',
  },
};
