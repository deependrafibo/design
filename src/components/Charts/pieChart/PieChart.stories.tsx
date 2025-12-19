import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';
import { PieChartProps } from './types';

const meta: Meta<typeof PieChart> = {
  title: 'Components/Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof PieChart>;

const sampleChartData: PieChartProps['chartData'] = [
  { name: 'React', value: 500, percentage: '50%', color: '#61dafb' },
  { name: 'Vue', value: 300, percentage: '30%', color: '#41b883' },
  { name: 'Angular', value: 100, percentage: '10%', color: '#dd1b16' },
  { name: 'Svelte', value: 100, percentage: '10%', color: '#ff3e00' },
];

export const Default: Story = {
  args: {
    chartData: sampleChartData,
  },
};

export const WithLargeDataset: Story = {
  args: {
    chartData: [
      { name: 'JavaScript', value: 250, percentage: '25%', color: '#f7df1e' },
      { name: 'Python', value: 200, percentage: '20%', color: '#3776ab' },
      { name: 'Java', value: 150, percentage: '15%', color: '#b07219' },
      { name: 'C#', value: 150, percentage: '15%', color: '#178600' },
      { name: 'Go', value: 100, percentage: '10%', color: '#00ADD8' },
      { name: 'Rust', value: 75, percentage: '7.5%', color: '#DEA584' },
      { name: 'Kotlin', value: 75, percentage: '7.5%', color: '#7f52ff' },
    ],
  },
};

export const EmptyData: Story = {
  args: {
    chartData: [],
  },
};
