import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { CustomInfo } from '../../assets/icons';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'Default tooltip message',
    position: 'top',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    message: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const Template: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <CustomInfo color="blue" width={20} height={20} />
    </Tooltip>
  ),
};

export const Top: Story = {
  ...Template,
  args: {
    position: 'top',
    message: 'This is a tooltip on top.',
  },
};

export const Bottom: Story = {
  ...Template,
  args: {
    position: 'bottom',
    message: 'Tooltip at the bottom.',
  },
};

export const Left: Story = {
  ...Template,
  args: {
    position: 'left',
    message: 'Tooltip on the left.',
  },
};

export const Right: Story = {
  ...Template,
  args: {
    position: 'right',
    message: 'Tooltip on the right.',
  },
};
