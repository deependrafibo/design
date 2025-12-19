import type { Meta, StoryObj } from '@storybook/react';
import { Hamburger } from './Hamburger';

const meta: Meta<typeof Hamburger> = {
  title: 'Components/Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Width of the hamburger icon',
    },
    height: {
      control: { type: 'number' },
      description: 'Height of the hamburger icon',
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the hamburger icon',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },

    isExpand: {
      control: { type: 'boolean' },
      description: 'Default state when uncontrolled',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
  args: {
    width: 44,
    height: 44,
    color: '#0065c1',
  },
};

export const Expanded: Story = {
  args: {
    width: 44,
    height: 44,
    color: '#0065c1',
    isExpand: true,
  },
};

export const Large: Story = {
  args: {
    width: 42,
    height: 42,
    color: '#0065c1',
  },
};

export const CustomColor: Story = {
  args: {
    width: 24,
    height: 24,
    color: '#0065c1',
  },
};

export const WithCustomClass: Story = {
  args: {
    width: 44,
    height: 44,
    color: '#0065c1',
    className: 'bg-gray-100 p-2 rounded-md w-16 h-16',
  },
};

export const Small: Story = {
  args: {
    width: 16,
    height: 16,
    color: '#0065c1',
  },
};
