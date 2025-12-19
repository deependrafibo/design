import { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import type { BarChartProps } from './types';

const meta: Meta<typeof BarChart> = {
  title: 'Components/Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'range', min: 100, max: 500, step: 10 },
    },
    barColor: {
      control: { type: 'color' },
    },
    showUserCards: {
      control: { type: 'boolean' },
    },
    showGridLines: {
      control: { type: 'boolean' },
    },
    showYAxisLabels: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const defaultData: BarChartProps['chartData'] = [
  {
    label: 'Bryan Wolf',
    value: 82,
    user: {
      name: 'Bryan Wolf',
      role: 'Senior Developer',
      wows: 2,
    },
  },
  {
    label: 'Meghan Jessica',
    value: 79,
    user: {
      name: 'Meghan Jessica',
      role: 'Frontend Developer',
      wows: 1,
    },
  },
  {
    label: 'Alex Turner',
    value: 75,
    user: {
      name: 'Alex Turner',
      role: 'Full Stack Developer',
      wows: 3,
    },
  },
  {
    label: 'Venkateshwara Muthuswami Iyer',
    value: 74,
    user: {
      name: 'Venkateshwara Muthuswami Iyer',
      role: 'Backend Developer',
      wows: 0,
    },
  },
  {
    label: 'Talent Name 5',
    value: 70,
    user: {
      name: 'Talent Name 5',
      role: 'Developer',
      wows: 1,
    },
  },
];

export const Default: Story = {
  args: {
    chartData: defaultData,
  },
};

export const WithCustomColors: Story = {
  args: {
    chartData: [
      {
        label: 'Bryan Wolf',
        value: 82,
        color: '#2196F3',
        user: {
          name: 'Bryan Wolf',
          role: 'Senior Developer',
          wows: 2,
        },
      },
      {
        label: 'Meghan Jessica',
        value: 79,
        color: '#4CAF50',
        user: {
          name: 'Meghan Jessica',
          role: 'Frontend Developer',
          wows: 1,
        },
      },
      {
        label: 'Alex Turner',
        value: 75,
        color: '#FFC107',
        user: {
          name: 'Alex Turner',
          role: 'Full Stack Developer',
          wows: 3,
        },
      },
      {
        label: 'Venkateshwara Muthuswami Iyer',
        value: 74,
        color: '#9C27B0',
        user: {
          name: 'Venkateshwara Muthuswami Iyer',
          role: 'Backend Developer',
          wows: 0,
        },
      },
      {
        label: 'Talent Name 5',
        value: 70,
        color: '#FF5722',
        user: {
          name: 'Talent Name 5',
          role: 'Developer',
          wows: 1,
        },
      },
    ],
  },
};

export const MinimalChart: Story = {
  args: {
    chartData: defaultData,
    showUserCards: false,
    height: 150,
    className: 'border rounded-lg p-4',
  },
};

export const CustomHeight: Story = {
  args: {
    chartData: defaultData,
    height: 300,
  },
};

export const NoGridLines: Story = {
  args: {
    chartData: defaultData,
    showGridLines: false,
  },
};

export const NoYAxisLabels: Story = {
  args: {
    chartData: defaultData,
    showYAxisLabels: false,
  },
};

export const NoTooltips: Story = {
  args: {
    chartData: defaultData,
    showTooltip: false,
  },
};

export const SimpleDataOnly: Story = {
  args: {
    chartData: [
      { label: 'Item 1', value: 82 },
      { label: 'Item 2', value: 79 },
      { label: 'Item 3', value: 75 },
      { label: 'Item 4', value: 74 },
      { label: 'Item 5', value: 70 },
    ],
    showUserCards: false,
    height: 200,
  },
};
