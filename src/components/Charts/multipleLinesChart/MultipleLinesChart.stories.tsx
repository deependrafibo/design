import { Meta, StoryObj } from '@storybook/react';
import MultipleLinesChart from './MultipleLinesChart';
import '../../../tailwindcss/theme.css';
import { TooltipProps } from 'recharts';

// Mock data for stories
const generateMockData = (pointsCount: number = 10) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return Array.from({ length: pointsCount }, (_, index) => ({
    month: months[index % months.length],
    competency1: Math.floor(Math.random() * 80) + 20,
    competency2: Math.floor(Math.random() * 70) + 30,
    competency3: Math.floor(Math.random() * 90) + 10,
    competency4: Math.floor(Math.random() * 60) + 40,
    competency5: Math.floor(Math.random() * 85) + 15,
    competency6: Math.floor(Math.random() * 75) + 25,
    timestamp: `2024-${((index % 12) + 1).toString().padStart(2, '0')}-01`,
  }));
};

// Generate data with more granular time periods for horizontal scrolling demo
const generateDetailedData = (pointsCount: number = 24) => {
  const timeLabels = Array.from({ length: pointsCount }, (_, index) => {
    const hour = index % 24;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  return Array.from({ length: pointsCount }, (_, index) => ({
    time: timeLabels[index],
    metric1: Math.floor(Math.random() * 80) + 20,
    metric2: Math.floor(Math.random() * 70) + 30,
    metric3: Math.floor(Math.random() * 90) + 10,
    metric4: Math.floor(Math.random() * 60) + 40,
  }));
};

// Generate weekly data for monthly view
const generateWeeklyData = (weeksCount: number = 52) => {
  return Array.from({ length: weeksCount }, (_, index) => ({
    week: `Week ${index + 1}`,
    sales: Math.floor(Math.random() * 1000) + 500,
    marketing: Math.floor(Math.random() * 800) + 400,
    development: Math.floor(Math.random() * 1200) + 600,
    support: Math.floor(Math.random() * 600) + 300,
  }));
};

const mockNestedData = Array.from({ length: 10 }, (_, index) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][index],
  competency1: {
    score: Math.floor(Math.random() * 80) + 20,
    count: Math.floor(Math.random() * 50) + 10,
  },
  competency2: {
    score: Math.floor(Math.random() * 70) + 30,
    count: Math.floor(Math.random() * 40) + 15,
  },
  competency3: {
    score: Math.floor(Math.random() * 90) + 10,
    count: Math.floor(Math.random() * 60) + 5,
  },
}));

const defaultChartConfig = {
  competency1: {
    label: 'Communication',
    color: '#3B82F6',
  },
  competency2: {
    label: 'Problem Solving',
    color: '#10B981',
  },
  competency3: {
    label: 'Leadership',
    color: '#F59E0B',
  },
  competency4: {
    label: 'Technical Skills',
    color: '#EF4444',
  },
  competency5: {
    label: 'Teamwork',
    color: '#8B5CF6',
  },
  competency6: {
    label: 'Adaptability',
    color: '#F59E0B',
  },
};

const nestedDataChartConfig = {
  competency1: {
    label: 'Communication',
    color: '#3B82F6',
  },
  competency2: {
    label: 'Problem Solving',
    color: '#10B981',
  },
  competency3: {
    label: 'Leadership',
    color: '#F59E0B',
  },
};

// Interface for tooltip entry
interface TooltipEntry {
  color?: string;
  name?: string;
  value?: number;
}

// Custom tooltip component for stories
const CustomTooltipComponent = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
      <p className="font-semibold text-gray-700 mb-2">{label} Performance</p>
      {payload.map((entry: TooltipEntry, index: number) => (
        <div key={index} className="flex justify-between items-center mb-1">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: entry.color }} />
            <span className="text-sm text-gray-600">{entry.name}</span>
          </span>
          <span className="text-sm font-medium text-gray-800">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof MultipleLinesChart> = {
  title: 'Components/Charts/MultipleLinesChart',
  component: MultipleLinesChart,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A versatile multi-line chart component that supports both line and area chart types with gradient fills.

## Features
- Support for both line charts and area charts with gradients
- Interactive filters to show/hide specific metrics
- **Custom filters** for learnability vs technical effectiveness with score cards and growth badges
- Customizable tooltips
- Custom X-axis labels
- Legend and filter controls
- Support for nested data structures
- **Horizontal scrolling** for charts with many data points
- **All x-axis tick values visible** without truncation

## Usage
\`\`\`tsx
import { MultipleLinesChart } from './MultipleLinesChart';

const chartData = [
  { month: 'Jan', competency1: 65, competency2: 78 },
  { month: 'Feb', competency1: 72, competency2: 82 },
  // ... more data
];

const chartConfig = {
  competency1: { label: 'Communication', color: '#3B82F6' },
  competency2: { label: 'Problem Solving', color: '#10B981' },
};

<MultipleLinesChart
  chartData={chartData}
  chartConfig={chartConfig}
  XAxisDataKey="month"
  maxYAxis={100}
  showFilters={true}
/>
\`\`\`

## Horizontal Scrolling
When the chart contains many data points, horizontal scrolling is automatically enabled to ensure all x-axis values remain visible. This is particularly useful for:
- Time-series data with high granularity (hourly, daily)
- Performance metrics over extended periods
- Any dataset where x-axis labels would otherwise be truncated
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    chartData: {
      control: 'object',
      description: 'Array of data objects containing the chart data points',
    },
    chartConfig: {
      control: 'object',
      description: 'Configuration object defining chart lines with labels and colors',
    },
    XAxisDataKey: {
      control: 'text',
      description: 'Key from data objects to use for X-axis values',
    },
    YAxisDataKey: {
      control: 'text',
      description: 'Optional key for nested data structures (e.g., "score" for data.competency1.score)',
    },
    maxYAxis: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Maximum value for Y-axis scaling',
    },
    showFilters: {
      control: 'boolean',
      description: 'Whether to show filter buttons above the chart',
    },
    hasGradient: {
      control: 'boolean',
      description: 'Whether to render as area chart with gradient fill',
    },
    showDataOnFilters: {
      control: 'boolean',
      description: 'Whether to show data values on filter buttons',
    },
    hideDeselectedMetricsFromTooltip: {
      control: 'boolean',
      description: 'Whether to hide deselected metrics from tooltip',
    },
    filterPropertyName: {
      control: 'text',
      description: 'Label for the filter property (e.g., "Competencies")',
    },
    filtersLabel: {
      control: 'text',
      description: 'Label text displayed before filter buttons',
    },
    legendLabel: {
      control: 'boolean',
      description: 'Whether to use compact legend-style filter buttons',
    },
    customFilters: {
      control: 'boolean',
      description: 'Whether to show custom filters (learnability vs technical effectiveness)',
    },
    te_score: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Technical Effectiveness score for custom filters',
    },
    learnability: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Learnability score for custom filters',
    },
    learnability_score_improvement: {
      control: 'text',
      description: 'Learnability score improvement percentage (e.g., "+5.2%")',
    },
    te_score_improvement: {
      control: 'text',
      description: 'Technical Effectiveness score improvement percentage (e.g., "+3.1%")',
    },
    isShowGrowthBadge: {
      control: 'boolean',
      description: 'Whether to show growth badges on custom filters',
    },
    isShowLearnability: {
      control: 'boolean',
      description: 'Whether to show learnability filter (if false, only technical effectiveness is shown)',
    },
    disableFilterClickActions: {
      control: 'boolean',
      description: 'Whether to disable click actions on custom filters',
    },
    toolTipLabels: {
      control: 'object',
      description: 'Custom tooltip labels for learnability and technical effectiveness',
    },
    tooltipLabel: {
      control: 'text',
      description:
        'Optional label to replace the prefix in tooltip labels (e.g., "Module" to change "Milestone 1" to "Module 1")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultipleLinesChart>;

export const Default: Story = {
  args: {
    chartData: generateMockData(8),
    chartConfig: defaultChartConfig,
    XAxisDataKey: 'month',
    maxYAxis: 100,
    showFilters: false,
    hasGradient: false,
  },
};

export const WithFilters: Story = {
  args: {
    chartData: generateMockData(12),
    chartConfig: defaultChartConfig,
    XAxisDataKey: 'month',
    maxYAxis: 100,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'Competencies',
    filtersLabel: 'Select Competencies:',
    hasGradient: false,
    disableFilterClickActions: true,
  },
};

export const GradientAreaChart: Story = {
  args: {
    chartData: generateMockData(18),
    chartConfig: {
      competency1: {
        label: 'Performance Score',
        color: '#0185E4',
      },
      competency2: {
        label: 'Engagement Level',
        color: '#10B981',
      },
    },
    XAxisDataKey: 'month',
    maxYAxis: 100,
    showFilters: true,
    hasGradient: true,
    showDataOnFilters: true,
    filterPropertyName: 'Metrics',
  },
};

export const WithLegendLabels: Story = {
  args: {
    chartData: generateMockData(6),
    chartConfig: {
      competency1: { label: 'Q1 Performance', color: '#3B82F6' },
      competency2: { label: 'Q2 Performance', color: '#10B981' },
      competency3: { label: 'Q3 Performance', color: '#F59E0B' },
    },
    XAxisDataKey: 'month',
    maxYAxis: 100,
    showFilters: true,
    legendLabel: true,
    showDataOnFilters: false,
    filtersLabel: 'Quarter Performance:',
  },
};

export const NestedDataStructure: Story = {
  args: {
    chartData: mockNestedData,
    chartConfig: nestedDataChartConfig,
    XAxisDataKey: 'month',
    YAxisDataKey: 'score',
    maxYAxis: 100,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'Skills',
    filtersLabel: 'Skill Categories:',
  },
};

export const CustomTooltip: Story = {
  args: {
    chartData: generateMockData(8),
    chartConfig: defaultChartConfig,
    XAxisDataKey: 'month',
    maxYAxis: 100,
    showFilters: true,
    customTooltipContent: CustomTooltipComponent,
    hideDeselectedMetricsFromTooltip: true,
  },
};

export const MinimalLineChart: Story = {
  args: {
    chartData: [
      { date: 'Week 1', value: 45 },
      { date: 'Week 2', value: 52 },
      { date: 'Week 3', value: 48 },
      { date: 'Week 4', value: 61 },
      { date: 'Week 5', value: 55 },
      { date: 'Week 6', value: 67 },
    ],
    chartConfig: {
      value: {
        label: 'Progress',
        color: '#8B5CF6',
      },
    },
    XAxisDataKey: 'date',
    maxYAxis: 100,
    showFilters: false,
    hasGradient: false,
  },
};

export const MultipleMetricsWithDetails: Story = {
  args: {
    chartData: generateMockData(20),
    chartConfig: {
      competency1: { label: 'Communication Skills', color: '#3B82F6' },
      competency2: { label: 'Problem Solving', color: '#10B981' },
      competency3: { label: 'Leadership Qualities', color: '#F59E0B' },
      competency4: { label: 'Technical Expertise', color: '#EF4444' },
    },
    XAxisDataKey: 'month',
    maxYAxis: 100,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'Competencies',
    filtersLabel: 'Performance Areas:',
    hideDeselectedMetricsFromTooltip: false,
  },
};

export const HorizontalScrollingChart: Story = {
  args: {
    chartData: generateDetailedData(48), // 48 data points (2 days of hourly data)
    chartConfig: {
      metric1: { label: 'System Load', color: '#3B82F6' },
      metric2: { label: 'Memory Usage', color: '#10B981' },
      metric3: { label: 'Network Traffic', color: '#F59E0B' },
      metric4: { label: 'CPU Usage', color: '#EF4444' },
    },
    XAxisDataKey: 'time',
    maxYAxis: 100,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'System Metrics',
    filtersLabel: 'Monitor System Performance:',
    hasGradient: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the horizontal scrolling functionality when there are many data points. The chart shows 48 hourly data points, requiring horizontal scrolling to view all values.',
      },
    },
  },
};

export const WeeklyPerformanceChart: Story = {
  args: {
    chartData: generateWeeklyData(26), // 26 weeks (6 months)
    chartConfig: {
      sales: { label: 'Sales Revenue', color: '#3B82F6' },
      marketing: { label: 'Marketing Spend', color: '#10B981' },
      development: { label: 'Development Cost', color: '#F59E0B' },
      support: { label: 'Support Cost', color: '#EF4444' },
    },
    XAxisDataKey: 'week',
    maxYAxis: 2000,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'Departments',
    filtersLabel: 'Department Performance:',
    hasGradient: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A weekly performance chart showing 26 weeks of data across multiple departments. Demonstrates horizontal scrolling with area chart and gradient fill.',
      },
    },
  },
};

export const MilestonePerformanceChart: Story = {
  args: {
    chartData: [
      {
        milestone: 'Milestone 1',
        Yash: {
          score: 74.01,
          wows: 0,
          kudos: 1,
        },
        Richa: {
          score: 79.35,
          wows: 0,
          kudos: 1,
        },
        Isha: {
          score: 84.68,
          wows: 2,
          kudos: 2,
        },
        Kunal: {
          score: 92.68,
          wows: 2,
          kudos: 4,
        },
        Chahat: {
          score: 92.68,
          wows: 2,
          kudos: 6,
        },
      },
      {
        milestone: 'Milestone 2',
        Isha: {
          score: 82.01,
          wows: 0,
          kudos: 1,
        },
        Yash: {
          score: 84.68,
          wows: 1,
          kudos: 1,
        },
        Richa: {
          score: 90.01,
          wows: 2,
          kudos: 1,
        },
        Chahat: {
          score: 90.01,
          wows: 1,
          kudos: 1,
        },
        Kunal: {
          score: 92.68,
          wows: 2,
          kudos: 1,
        },
      },
      {
        milestone: 'Milestone 3',
      },
      {
        milestone: 'Milestone 4',
      },
      {
        milestone: 'Milestone 5',
      },
      {
        milestone: 'Milestone 6',
      },
      {
        milestone: 'Milestone 7',
      },
      {
        milestone: 'Milestone 8',
      },
      {
        milestone: 'Milestone 9',
      },
      {
        milestone: 'Milestone 10',
      },
    ],
    chartConfig: {
      Kunal: {
        label: 'Kunal',
        color: '#1e90ff',
      },
      Chahat: {
        label: 'Chahat',
        color: '#0000ff',
      },
      Yash: {
        label: 'Yash',
        color: '#00008b',
      },
      Isha: {
        label: 'Isha',
        color: '#00bfff',
      },
      Richa: {
        label: 'Richa',
        color: '#add8e6',
      },
    },
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'score',
    maxYAxis: 100,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'Team Members',
    filtersLabel: 'Team Performance:',
    hasGradient: false,
    tooltipLabel: 'Module',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A milestone performance chart showing team member scores across 10 project milestones. Demonstrates horizontal scrolling with nested data structure (score, wows, kudos) and team performance tracking. Note: Milestones 3-10 have no data yet, showing how the chart handles incomplete datasets. The tooltipLabel prop is set to "Module" to demonstrate how tooltip labels can be customized (e.g., "Milestone 1" becomes "Module 1").',
      },
    },
  },
};

export const ThreeMilestoneChart: Story = {
  args: {
    chartData: [
      {
        milestone: 'Phase 1',
        Development: {
          score: 85.5,
          completed: 12,
          pending: 3,
        },
        Testing: {
          score: 78.2,
          completed: 8,
          pending: 5,
        },
        Design: {
          score: 92.1,
          completed: 15,
          pending: 1,
        },
      },
      {
        milestone: 'Phase 2',
        Development: {
          score: 91.3,
          completed: 18,
          pending: 2,
        },
        Testing: {
          score: 87.6,
          completed: 14,
          pending: 3,
        },
        Design: {
          score: 89.4,
          completed: 16,
          pending: 2,
        },
      },
      {
        milestone: 'Phase 3',
        Development: {
          score: 88.7,
          completed: 20,
          pending: 4,
        },
        Testing: {
          score: 93.2,
          completed: 19,
          pending: 1,
        },
        Design: {
          score: 95.8,
          completed: 22,
          pending: 0,
        },
      },
    ],
    chartConfig: {
      Development: {
        label: 'Development Team',
        color: '#3B82F6',
      },
      Testing: {
        label: 'Testing Team',
        color: '#10B981',
      },
      Design: {
        label: 'Design Team',
        color: '#F59E0B',
      },
    },
    XAxisDataKey: 'milestone',
    YAxisDataKey: 'score',
    maxYAxis: 100,
    showFilters: true,
    showDataOnFilters: true,
    filterPropertyName: 'Teams',
    filtersLabel: 'Project Teams:',
    hasGradient: false,
    tooltipLabel: 'Module',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A concise milestone chart showing team performance across 3 project phases. This demonstrates how the chart looks with fewer milestones and focuses on three key teams: Development, Testing, and Design. Each milestone shows completion scores and task counts. The tooltipLabel prop is set to "Phase" to customize tooltip labels.',
      },
    },
  },
};

// Individual Talent Analytics TAS Score data
const individualTalentAnalyticsTasScoreData = {
  chart_config: {
    te_score: {
      label: 'Technical Effectiveness',
      color: '#0185e4',
    },
    trumio_attractiveness_score: {
      label: 'Attractiveness',
      color: '#0185E4',
    },
  },
  chart_data: [
    {
      trumio_attractiveness_score: 74.68,
      te_score: 82.43,
      wow_count: 2,
      kudos_count: 2,
      milestone: 'Milestone 1',
    },
    {
      trumio_attractiveness_score: 91.01,
      te_score: 100,
      wow_count: 2,
      kudos_count: 1,
      milestone: 'Milestone 2',
    },
    {
      trumio_attractiveness_score: 0,
      te_score: 0,
      wow_count: 0,
      kudos_count: 0,
      milestone: 'Milestone 3',
    },
    {
      trumio_attractiveness_score: 0,
      te_score: 0,
      wow_count: 0,
      kudos_count: 0,
      milestone: 'Milestone 4',
    },
    {
      trumio_attractiveness_score: 0,
      te_score: 0,
      wow_count: 0,
      kudos_count: 0,
      milestone: 'Milestone 5',
    },
    {
      trumio_attractiveness_score: 0,
      te_score: 0,
      wow_count: 0,
      kudos_count: 0,
      milestone: 'Milestone 6',
    },
  ],
  is_analytics_available: true,
  max_y_axis: 100,
};

export const IndividualTalentAnalyticsTasScore: Story = {
  args: {
    chartData: individualTalentAnalyticsTasScoreData.chart_data,
    chartConfig: individualTalentAnalyticsTasScoreData.chart_config,
    maxYAxis: individualTalentAnalyticsTasScoreData.max_y_axis,
    XAxisDataKey: 'milestone',
    hasGradient: true,
    customFilters: true,
    te_score: 82.43,
    learnability: 74.68,
    te_score_improvement: '+5.2%',
    learnability_score_improvement: '+3.1%',
    isShowGrowthBadge: true,
    isShowLearnability: true,
    isShowTechnicalEffectiveness: true,
    disableFilterClickActions: false,
    tooltipLabel: 'Module',
    toolTipLabels: {
      wows: 'Wow: Recognition awarded by Trumio/Client Project Advisor for exceptional performance in one or more competencies within a milestone.',
      kudos:
        'Kudos: Appreciation made by another team member towards specific contributions or efforts during the project.',
      technicalEffectiveness:
        'Composite metric that incorporates technical or core work focused competencies representing their ability to deliver technical work output.',
      learnabilityScore:
        'Composite index that incorporates 6 competencies to generate project delivery potential for a talent work and project delivery.',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Individual Talent Analytics TAS Score chart showing Technical Effectiveness and Attractiveness scores across milestones. This chart demonstrates the custom filters functionality with score cards and includes tooltips for better understanding of the metrics.',
      },
    },
  },
};

// Custom filters demo data
const customFiltersDemoData = [
  {
    milestone: 'Milestone 1',
    trumio_attractiveness_score: 75.2,
    te_score: 82.1,
  },
  {
    milestone: 'Milestone 2',
    trumio_attractiveness_score: 88.5,
    te_score: 91.3,
  },
  {
    milestone: 'Milestone 3',
    trumio_attractiveness_score: 92.1,
    te_score: 89.7,
  },
  {
    milestone: 'Milestone 4',
    trumio_attractiveness_score: 85.8,
    te_score: 94.2,
  },
  {
    milestone: 'Milestone 5',
    trumio_attractiveness_score: 90.3,
    te_score: 87.6,
  },
];

const customFiltersConfig = {
  trumio_attractiveness_score: {
    label: 'Learnability Score',
    color: '#0185E4',
  },
  te_score: {
    label: 'Technical Effectiveness',
    color: '#10B981',
  },
};

export const CustomFiltersDemo: Story = {
  args: {
    chartData: customFiltersDemoData,
    chartConfig: customFiltersConfig,
    XAxisDataKey: 'milestone',
    maxYAxis: 100,
    hasGradient: true,
    customFilters: true,
    te_score: 89.0,
    learnability: 86.4,
    te_score_improvement: '+2.8%',
    learnability_score_improvement: '+4.1%',
    isShowGrowthBadge: true,
    isShowLearnability: true,
    isShowTechnicalEffectiveness: true,
    disableFilterClickActions: false,
    tooltipLabel: 'Module',
    toolTipLabels: {
      learnabilityScore:
        'Learnability Score: Measures how quickly and effectively a talent can acquire new skills and adapt to new challenges.',
      technicalEffectiveness:
        'Technical Effectiveness: Evaluates the quality and efficiency of technical work output and problem-solving abilities.',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the custom filters functionality with learnability and technical effectiveness score cards. Users can toggle between the two metrics, and growth badges show improvement percentages. The chart uses gradient area visualization for better visual appeal.',
      },
    },
  },
};

export const CustomFiltersTechnicalOnly: Story = {
  args: {
    chartData: customFiltersDemoData,
    chartConfig: {
      te_score: {
        label: 'Technical Effectiveness',
        color: '#10B981',
      },
    },
    XAxisDataKey: 'milestone',
    maxYAxis: 100,
    hasGradient: true,
    customFilters: true,
    te_score: 89.0,
    learnability: 86.4,
    te_score_improvement: '+2.8%',
    learnability_score_improvement: '+4.1%',
    isShowGrowthBadge: true,
    isShowLearnability: false, // Hide learnability filter
    isShowTechnicalEffectiveness: true,
    disableFilterClickActions: false,
    toolTipLabels: {
      technicalEffectiveness:
        'Technical Effectiveness: Evaluates the quality and efficiency of technical work output and problem-solving abilities.',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shows custom filters with only technical effectiveness visible. When isShowLearnability is false, only the technical effectiveness score card is displayed, taking up the full width.',
      },
    },
  },
};

export const CustomFiltersDisabled: Story = {
  args: {
    chartData: customFiltersDemoData,
    chartConfig: customFiltersConfig,
    XAxisDataKey: 'milestone',
    maxYAxis: 100,
    hasGradient: true,
    customFilters: true,
    te_score: 89.0,
    learnability: 86.4,
    te_score_improvement: '+2.8%',
    learnability_score_improvement: '+4.1%',
    isShowGrowthBadge: true,
    isShowLearnability: true,
    isShowTechnicalEffectiveness: true,
    disableFilterClickActions: true, // Disable click actions
    toolTipLabels: {
      learnabilityScore:
        'Learnability Score: Measures how quickly and effectively a talent can acquire new skills and adapt to new challenges.',
      technicalEffectiveness:
        'Technical Effectiveness: Evaluates the quality and efficiency of technical work output and problem-solving abilities.',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates custom filters with disabled click actions. The score cards are displayed but clicking them will not change the chart data, useful for read-only scenarios.',
      },
    },
  },
};
