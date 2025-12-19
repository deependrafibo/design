import type { Meta, StoryObj } from '@storybook/react';
import DonutChart from './DonutChart';
import { mockData } from './mock';

const meta: Meta<typeof DonutChart> = {
  title: 'Components/Charts/DonutChart',
  component: DonutChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: {
    data: mockData,
    title: 'Team Allocation',
    centerText: 'Total Members',
    isDonutChart: true,
    toolTipMessage: 'hi',
  },
};

export const NoInfoIcon: Story = {
  args: {
    ...Default.args,
    toolTipMessage: 'hi',
  },
};

export const SmallDataSet: Story = {
  args: {
    data: [
      { name: 'Core', value: 800, percentage: '80%', color: '#7367F0' },
      { name: 'Support', value: 200, percentage: '20%', color: '#28C76F' },
    ],
    title: 'Core vs Support',
    centerText: 'Headcount',
    isDonutChart: true,
    toolTipMessage: 'hi',
  },
};

export const Empty: Story = {
  args: {
    data: [],
    title: 'Empty Donut Chart',
    centerText: 'No Data',
    isDonutChart: true,
    toolTipMessage: 'hi',
  },
};
