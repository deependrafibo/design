import { Meta, StoryObj } from '@storybook/react';
import { PerformanceTag } from './PerformanceTag';

const meta: Meta<typeof PerformanceTag> = {
  title: 'Components/PerformanceTag',
  component: PerformanceTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a performance category tag with color-coded indicator and label.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['Accelerator', 'Builder', 'Catalyst', 'Unknown'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PerformanceTag>;

export const Accelerator: Story = {
  args: {
    category: 'Accelerator',
  },
};

export const Builder: Story = {
  args: {
    category: 'Builder',
  },
};

export const Catalyst: Story = {
  args: {
    category: 'Catalyst',
  },
};

export const UnknownCategory: Story = {
  args: {
    category: 'SomethingElse',
  },
};
