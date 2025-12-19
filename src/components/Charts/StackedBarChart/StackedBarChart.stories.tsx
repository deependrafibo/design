import { Meta, StoryObj } from '@storybook/react';
import { StackedBarChart } from './StackedBarChart';
import { FaUser, FaRocket, FaBolt } from 'react-icons/fa';

const meta: Meta<typeof StackedBarChart> = {
  title: 'Components/Charts/StackedBarChart',
  component: StackedBarChart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StackedBarChart>;

export const Example: Story = {
  args: {
    legend: [
      { label: 'Builders', color: '#A3D3F9' },
      { label: 'Accelerators', color: '#6CB4F9' },
      { label: 'Catalyst', color: '#0074D9' },
    ],
    data: [
      {
        category: 'Category 1',
        segments: [
          { label: 'Builders', value: 4, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 5, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'Category 2',
        segments: [
          { label: 'Builders', value: 4, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 6, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 2, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'Category 3',
        segments: [
          { label: 'Builders', value: 5, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 4, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
    ],
  },
};

export const WithMaxValue: Story = {
  args: {
    legend: [
      { label: 'Builders', color: '#A3D3F9' },
      { label: 'Accelerators', color: '#6CB4F9' },
      { label: 'Catalyst', color: '#0074D9' },
    ],
    maxValue: 20,
    data: [
      {
        category: 'Alpha',
        segments: [
          { label: 'Builders', value: 2, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 8, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 4, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'Beta',
        segments: [
          { label: 'Builders', value: 5, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 7, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'Gamma',
        segments: [
          { label: 'Builders', value: 6, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 2, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 1, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
    ],
  },
};

export const ManyUniversities: Story = {
  args: {
    legend: [
      { label: 'Builders', color: '#A3D3F9' },
      { label: 'Accelerators', color: '#6CB4F9' },
      { label: 'Catalyst', color: '#0074D9' },
    ],
    maxValue: 15,
    data: [
      {
        category: 'University 1',
        segments: [
          { label: 'Builders', value: 4, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 5, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 2',
        segments: [
          { label: 'Builders', value: 1, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 6, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 2, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 3',
        segments: [
          { label: 'Builders', value: 5, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 1, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 4',
        segments: [
          { label: 'Builders', value: 4, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 2, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 6, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 5',
        segments: [
          { label: 'Builders', value: 3, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 1, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 5, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 6',
        segments: [
          { label: 'Builders', value: 5, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 1, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 5, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 7',
        segments: [
          { label: 'Builders', value: 2, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 4, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 1, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 8',
        segments: [
          { label: 'Builders', value: 6, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 5, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 9',
        segments: [
          { label: 'Builders', value: 6, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 3, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 5, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
      {
        category: 'University 10',
        segments: [
          { label: 'Builders', value: 2, color: '#A3D3F9', icon: <FaUser /> },
          { label: 'Accelerators', value: 4, color: '#6CB4F9', icon: <FaRocket /> },
          { label: 'Catalyst', value: 1, color: '#0074D9', icon: <FaBolt /> },
        ],
      },
    ],
  },
};
