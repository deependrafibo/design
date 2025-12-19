import type { Meta, StoryObj } from '@storybook/react';
import WaveChart from './WaveChart';
import { waveMockData } from './WaveMock';

const meta: Meta<typeof WaveChart> = {
  title: 'Charts/WaveChart',
  component: WaveChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A wave chart component that displays talent performance metrics across different milestones with comparison to cohort averages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxYAxis: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum value for Y-axis',
    },
    showFilters: {
      control: 'boolean',
      description: 'Show/hide the metric filter buttons',
    },
    YAxisDataKey: {
      control: 'select',
      options: ['talent', 'cohort'],
      description: 'Primary data key for Y-axis values',
    },
    XAxisDataKey: {
      control: 'text',
      description: 'Data key for X-axis labels',
    },
    containerClassWidth: {
      control: 'text',
      description: 'Custom width for the chart container',
    },
    customXAxisLabel: {
      control: false,
      description: 'Custom React component for rendering X-axis labels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with complete data
export const Default: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: waveMockData.data.max_y_axis,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
  },
};

// Story with limited metrics
export const LimitedMetrics: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: {
      collaboration: waveMockData.data.chart_config.collaboration,
      communication: waveMockData.data.chart_config.communication,
      leadership: waveMockData.data.chart_config.leadership,
    },
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
  },
};

// Story without filters
export const WithoutFilters: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: false,
  },
};

// Story with custom Y-axis range
export const CustomYAxis: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: 15,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
  },
};

// Story with cohort as primary metric
export const CohortPrimary: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'cohort',
    showFilters: true,
  },
};

// Story with minimal data
export const MinimalData: Story = {
  args: {
    chartData: [
      {
        milestone: 'Milestone 1',
        collaboration: { talent: 5, cohort: 4 },
        communication: { talent: 6, cohort: 5 },
      },
      {
        milestone: 'Milestone 2',
        collaboration: { talent: 7, cohort: 6 },
        communication: { talent: 8, cohort: 7 },
      },
    ],
    chartConfig: {
      collaboration: {
        label: 'Collaboration',
        color: '#0DA8B2',
        background_color: '#0DA8B21F',
        top_competency: true,
      },
      communication: {
        label: 'Communication',
        color: '#FF9F43',
        background_color: '#FF9F431F',
        top_competency: false,
      },
    },
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
  },
};

// Story with all zero talent values (to test dashed line behavior)
export const AllZeroTalent: Story = {
  args: {
    chartData: [
      {
        milestone: 'Milestone 1',
        collaboration: { talent: 0, cohort: 4 },
        communication: { talent: 0, cohort: 5 },
      },
      {
        milestone: 'Milestone 2',
        collaboration: { talent: 0, cohort: 6 },
        communication: { talent: 0, cohort: 7 },
      },
      {
        milestone: 'Milestone 3',
        collaboration: { talent: 0, cohort: 5 },
        communication: { talent: 0, cohort: 6 },
      },
    ],
    chartConfig: {
      collaboration: {
        label: 'Collaboration',
        color: '#0DA8B2',
        background_color: '#0DA8B21F',
        top_competency: true,
      },
      communication: {
        label: 'Communication',
        color: '#FF9F43',
        background_color: '#FF9F431F',
        top_competency: false,
      },
    },
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
  },
};

// Story with null values
export const WithNullValues: Story = {
  args: {
    chartData: [
      {
        milestone: 'Milestone 1',
        collaboration: { talent: 5, cohort: 4 },
        communication: { talent: null, cohort: 5 },
      },
      {
        milestone: 'Milestone 2',
        collaboration: { talent: 7, cohort: null },
        communication: { talent: 8, cohort: 7 },
      },
      {
        milestone: 'Milestone 3',
        collaboration: { talent: null, cohort: 5 },
        communication: { talent: 6, cohort: null },
      },
    ],
    chartConfig: {
      collaboration: {
        label: 'Collaboration',
        color: '#0DA8B2',
        background_color: '#0DA8B21F',
        top_competency: true,
      },
      communication: {
        label: 'Communication',
        color: '#FF9F43',
        background_color: '#FF9F431F',
        top_competency: false,
      },
    },
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
  },
};

// Story with custom container width
export const CustomContainerWidth: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
    containerClassWidth: '800px',
  },
};

// Story with wide container for better visualization
export const WideContainer: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
    containerClassWidth: '1200px',
  },
};

// Simple custom X-axis label component example
// Note: With scale="point", bars are centered at props.x
// Custom labels should center themselves at props.x
// For a label with width W, use x={props.x - W/2} to center it
const SimpleCustomXAxisLabel = ({ props }: any) => {
  const { x, y, payload } = props;
  const labelWidth = 100; // Width of the label
  return (
    <foreignObject x={x - labelWidth / 2} y={y} width={labelWidth} height={120}>
      <div className="flex flex-col items-center text-gray-600">
        <span className="text-sm font-semibold">{payload.value}</span>
        <span className="text-xs text-gray-400 mt-1">Performance</span>
      </div>
    </foreignObject>
  );
};

// Story with custom X-axis label
export const WithCustomXAxisLabel: Story = {
  args: {
    chartData: waveMockData.data.chart_data,
    chartConfig: waveMockData.data.chart_config,
    maxYAxis: 10,
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'talent',
    showFilters: true,
    customXAxisLabel: SimpleCustomXAxisLabel,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the customXAxisLabel prop by using a custom component to render X-axis labels with additional styling and information.',
      },
    },
  },
};
