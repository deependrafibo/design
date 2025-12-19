import type { Meta, StoryObj } from '@storybook/react';
import HeatMap from './HeatMap';
import { MatrixConfig, MatrixDataItem } from './types';

const meta: Meta<typeof HeatMap> = {
  title: 'Charts/HeatMap',
  component: HeatMap,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A heat map component that displays data in a grid format with color-coded values and optional legend.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    matrixConfig: {
      description: 'Configuration object containing legend information',
      control: { type: 'object' },
    },
    matrixData: {
      description: 'Array of data items to display in the heat map',
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeatMap>;

// Sample data for stories
const defaultMatrixConfig: MatrixConfig = {
  legend: [
    {
      color: '#FEF2D5',
      range_min: 0,
      range_max: 4,
      legend_category_name: 'Below Average',
    },
    {
      color: '#FFB977',
      range_min: 4.1,
      range_max: 6,
      legend_category_name: 'Average',
    },
    {
      color: '#B2DAF7',
      range_min: 6.1,
      range_max: 8,
      legend_category_name: 'Good',
    },
    {
      color: '#3DCC7D',
      range_min: 8.1,
      range_max: 10,
      legend_category_name: 'Excellent',
    },
  ],
};

const defaultMatrixData: MatrixDataItem[] = [
  {
    label: 'Technical Skills',
    'John Doe': { score: 8 },
    'Jane Smith': { score: 9 },
    'Bob Johnson': { score: 6 },
    'Alice Brown': { score: 7 },
  },
  {
    label: 'Communication',
    'John Doe': { score: 7 },
    'Jane Smith': { score: 8 },
    'Bob Johnson': { score: 9 },
    'Alice Brown': { score: 6 },
  },
  {
    label: 'Leadership',
    'John Doe': { score: 6 },
    'Jane Smith': { score: 10 },
    'Bob Johnson': { score: 4 },
    'Alice Brown': { score: 8 },
  },
  {
    label: 'Problem Solving',
    'John Doe': { score: 9 },
    'Jane Smith': { score: 7 },
    'Bob Johnson': { score: 8 },
    'Alice Brown': { score: 5 },
  },
];

const matrixDataWithNulls: MatrixDataItem[] = [
  {
    label: 'Technical Skills',
    'John Doe': { score: 8 },
    'Jane Smith': { score: null },
    'Bob Johnson': { score: 6 },
    'Alice Brown': { score: 7 },
  },
  {
    label: 'Communication',
    'John Doe': { score: null },
    'Jane Smith': { score: 8 },
    'Bob Johnson': { score: 9 },
    'Alice Brown': { score: null },
  },
  {
    label: 'Leadership',
    'John Doe': { score: 6 },
    'Jane Smith': { score: 10 },
    'Bob Johnson': { score: null },
    'Alice Brown': { score: 8 },
  },
];

const largeMatrixData: MatrixDataItem[] = [
  {
    label: 'Frontend Development',
    'Alice Cooper': { score: 9 },
    'Bob Wilson': { score: 8 },
    'Charlie Davis': { score: 7 },
    'Diana Prince': { score: 10 },
    'Ethan Hunt': { score: 6 },
    'Fiona Green': { score: 8 },
  },
  {
    label: 'Backend Development',
    'Alice Cooper': { score: 7 },
    'Bob Wilson': { score: 9 },
    'Charlie Davis': { score: 8 },
    'Diana Prince': { score: 6 },
    'Ethan Hunt': { score: 10 },
    'Fiona Green': { score: 7 },
  },
  {
    label: 'Database Design',
    'Alice Cooper': { score: 6 },
    'Bob Wilson': { score: 7 },
    'Charlie Davis': { score: 9 },
    'Diana Prince': { score: 8 },
    'Ethan Hunt': { score: 7 },
    'Fiona Green': { score: 9 },
  },
  {
    label: 'DevOps & Deployment',
    'Alice Cooper': { score: 8 },
    'Bob Wilson': { score: 6 },
    'Charlie Davis': { score: 10 },
    'Diana Prince': { score: 7 },
    'Ethan Hunt': { score: 9 },
    'Fiona Green': { score: 6 },
  },
  {
    label: 'UI/UX Design',
    'Alice Cooper': { score: 10 },
    'Bob Wilson': { score: 5 },
    'Charlie Davis': { score: 6 },
    'Diana Prince': { score: 9 },
    'Ethan Hunt': { score: 4 },
    'Fiona Green': { score: 8 },
  },
];

export const Default: Story = {
  args: {
    matrixConfig: defaultMatrixConfig,
    matrixData: defaultMatrixData,
  },
};

export const WithoutLegend: Story = {
  args: {
    matrixConfig: {},
    matrixData: defaultMatrixData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map without legend configuration.',
      },
    },
  },
};

export const WithNullValues: Story = {
  args: {
    matrixConfig: defaultMatrixConfig,
    matrixData: matrixDataWithNulls,
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with some null values that display as empty grey cells.',
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    matrixConfig: defaultMatrixConfig,
    matrixData: largeMatrixData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with a larger dataset showing more rows and columns.',
      },
    },
  },
};

export const CustomColorScheme: Story = {
  args: {
    matrixConfig: {
      legend: [
        { color: '#1e293b', range_min: 0, range_max: 2 },
        { color: '#475569', range_min: 3, range_max: 4 },
        { color: '#64748b', range_min: 5, range_max: 6 },
        { color: '#94a3b8', range_min: 7, range_max: 8 },
        { color: '#cbd5e1', range_min: 9, range_max: 10 },
      ],
    },
    matrixData: defaultMatrixData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with a custom grayscale color scheme.',
      },
    },
  },
};

export const HighContrastColors: Story = {
  args: {
    matrixConfig: {
      legend: [
        { color: '#dc2626', range_min: 0, range_max: 2 },
        { color: '#ea580c', range_min: 3, range_max: 4 },
        { color: '#d97706', range_min: 5, range_max: 6 },
        { color: '#059669', range_min: 7, range_max: 8 },
        { color: '#0284c7', range_min: 9, range_max: 10 },
      ],
    },
    matrixData: defaultMatrixData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with high contrast colors for better accessibility.',
      },
    },
  },
};

export const EmptyData: Story = {
  args: {
    matrixConfig: defaultMatrixConfig,
    matrixData: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with empty data array - should render nothing.',
      },
    },
  },
};

export const EmptyConfig: Story = {
  args: {
    matrixConfig: {},
    matrixData: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with empty configuration and data - should render nothing.',
      },
    },
  },
};

export const SingleRowData: Story = {
  args: {
    matrixConfig: defaultMatrixConfig,
    matrixData: [
      {
        label: 'Overall Rating',
        'John Doe': { score: 8 },
        'Jane Smith': { score: 9 },
        'Bob Johnson': { score: 6 },
        'Alice Brown': { score: 7 },
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with only a single row of data.',
      },
    },
  },
};

export const WideRange: Story = {
  args: {
    matrixConfig: {
      legend: [
        { color: '#fee2e2', range_min: 0, range_max: 20 },
        { color: '#fecaca', range_min: 21, range_max: 40 },
        { color: '#fca5a5', range_min: 41, range_max: 60 },
        { color: '#f87171', range_min: 61, range_max: 80 },
        { color: '#ef4444', range_min: 81, range_max: 100 },
      ],
    },
    matrixData: [
      {
        label: 'Performance Score',
        'Employee A': { score: 85 },
        'Employee B': { score: 92 },
        'Employee C': { score: 67 },
        'Employee D': { score: 34 },
      },
      {
        label: 'Satisfaction Score',
        'Employee A': { score: 78 },
        'Employee B': { score: 89 },
        'Employee C': { score: 45 },
        'Employee D': { score: 23 },
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Heat map with a wider numerical range (0-100) and different color gradations.',
      },
    },
  },
};
