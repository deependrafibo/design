import type { Meta, StoryObj } from '@storybook/react';
import SemiDountChart from './SemiDountChart';
import { mockData } from './mock';

const meta: Meta<typeof SemiDountChart> = {
  title: 'Components/Charts/SemiDonutChart',
  component: SemiDountChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SemiDountChart>;

export const Default: Story = {
  args: {
    data: mockData,
    title: 'Top Universities',
    centerText: 'Universities',
    isDonutChart: true,
    toolTipMessage: 'hi',
  },
};

export const WithoutInfoIcon: Story = {
  args: {
    ...Default.args,
    toolTipMessage: 'hi',
  },
};

export const Empty: Story = {
  args: {
    data: [],
    title: 'Empty Semi Donut',
    centerText: 'No Data',
    isDonutChart: true,
    toolTipMessage: 'hi',
  },
};

export const WithUniqueTotal: Story = {
  args: {
    data: [
      { name: 'Harvard', value: 45, percentage: '30%', color: '#7C3AED' },
      { name: 'Stanford', value: 35, percentage: '23%', color: '#F59E0B' },
      { name: 'MIT', value: 25, percentage: '17%', color: '#10B981' },
      { name: 'Yale', value: 20, percentage: '13%', color: '#3B82F6' },
      { name: 'Columbia', value: 15, percentage: '10%', color: '#EF4444' },
      { name: 'UChicago', value: 10, percentage: '7%', color: '#6366F1' },
    ],
    title: 'Top Universities (Unique Total)',
    centerText: 'Universities',
    isDonutChart: true,
    toolTipMessage: 'Total shows sum of unique values only',
    countUniqueForTotal: true,
  },
};

export const WithDuplicateValues: Story = {
  args: {
    data: [
      { name: 'Harvard', value: 45, percentage: '30%', color: '#7C3AED' },
      { name: 'Stanford', value: 35, percentage: '23%', color: '#F59E0B' },
      { name: 'MIT', value: 25, percentage: '17%', color: '#10B981' },
      { name: 'Yale', value: 20, percentage: '13%', color: '#3B82F6' },
      { name: 'Columbia', value: 15, percentage: '10%', color: '#EF4444' },
      { name: 'UChicago', value: 10, percentage: '7%', color: '#6366F1' },
      { name: 'Princeton', value: 45, percentage: '30%', color: '#8B5CF6' },
      { name: 'Caltech', value: 25, percentage: '17%', color: '#06B6D4' },
    ],
    title: 'Top Universities (With Duplicates)',
    centerText: 'Universities',
    isDonutChart: true,
    toolTipMessage: 'Total shows sum of all values (includes duplicates)',
    countUniqueForTotal: false,
  },
};

export const WithDuplicateValuesUniqueTotal: Story = {
  args: {
    data: [
      { name: 'Harvard', value: 45, percentage: '30%', color: '#7C3AED' },
      { name: 'Stanford', value: 35, percentage: '23%', color: '#F59E0B' },
      { name: 'MIT', value: 25, percentage: '17%', color: '#10B981' },
      { name: 'Yale', value: 20, percentage: '13%', color: '#3B82F6' },
      { name: 'Columbia', value: 15, percentage: '10%', color: '#EF4444' },
      { name: 'UChicago', value: 10, percentage: '7%', color: '#6366F1' },
      { name: 'Princeton', value: 45, percentage: '30%', color: '#8B5CF6' },
      { name: 'Caltech', value: 25, percentage: '17%', color: '#06B6D4' },
    ],
    title: 'Top Universities (Unique Total Only)',
    centerText: 'Universities',
    isDonutChart: true,
    toolTipMessage: 'Total shows sum of unique values only (duplicates counted once)',
    countUniqueForTotal: true,
  },
};
