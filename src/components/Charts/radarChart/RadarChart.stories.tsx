import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from './RadarChart';
import { Card } from '@/components/ui/card';
import { radarMockData, chartConfig } from './sampleData';

const meta: Meta<typeof RadarChart> = {
  title: 'Components/Charts/RadarChart',
  component: RadarChart,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '400px', padding: '20px' }}>
        <Card>
          <Story />
        </Card>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radar chart component for visualizing skill assessments and performance comparisons.

**Features:**
- Compares talent scores against cohort averages
- Highlights top competencies with asterisks and dotted underlines
- Interactive tooltips showing detailed scores
- Responsive design with custom styling
- Supports custom colors and configurations

**Data Structure:**
- \`skill\`: Name of the skill being measured
- \`talent_score\`: Individual's score (0-10)
- \`cohort_average\`: Average score of the comparison group (0-10)
- \`top_competencies\`: Boolean indicating if this is a top skill (shows asterisk)
- \`total_score\`: Maximum possible score (typically 10)
        `,
      },
    },
  },
  argTypes: {
    chartData: {
      control: 'object',
      description: 'Array of skill data with talent and cohort scores',
      table: {
        type: {
          summary:
            'Array<{skill: string, talent_score: number, cohort_average: number, top_competencies: boolean, total_score: number}>',
        },
      },
    },
    chartConfig: {
      control: 'object',
      description: 'Configuration for chart colors and styling',
      table: {
        type: {
          summary: 'Array<{name: string, color: string}>',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadarChart>;

// Default chart configuration
const defaultChartConfig = [
  { name: 'talent', color: '#0185E4' },
  { name: 'cohort', color: '#FF9F43' },
];

export const Default: Story = {
  name: 'Balanced Performer',
  args: {
    chartData: [
      {
        skill: 'Collaboration',
        talentScore: 8,
        cohortAverage: 8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Communication',
        talentScore: 8,
        cohortAverage: 8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Leadership',
        talentScore: 9,
        cohortAverage: 8.5,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Effectiveness',
        talentScore: 7.4,
        cohortAverage: 8.2,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Problem Solving',
        talentScore: 9,
        cohortAverage: 8.5,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Innovation',
        talentScore: 8,
        cohortAverage: 8,
        top_competencies: true,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A well-rounded performer with all skills marked as top competencies. Shows how the chart handles decimal scores and close talent vs. cohort comparisons.',
      },
    },
  },
};

export const HighPerformer: Story = {
  name: 'High Performer - Above Average',
  args: {
    chartData: [
      {
        skill: 'Strategic Thinking',
        talentScore: 9.2,
        cohortAverage: 6.8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Team Leadership',
        talentScore: 8.8,
        cohortAverage: 7.1,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Communication',
        talentScore: 9.5,
        cohortAverage: 7.3,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Project Management',
        talentScore: 8.1,
        cohortAverage: 6.9,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Technical Expertise',
        talentScore: 7.8,
        cohortAverage: 7.5,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Innovation',
        talentScore: 9.0,
        cohortAverage: 6.2,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Adaptability',
        talentScore: 8.6,
        cohortAverage: 6.8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Decision Making',
        talentScore: 8.9,
        cohortAverage: 7.0,
        top_competencies: true,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A high-performing individual who consistently scores above cohort averages across multiple skills. Demonstrates clear strengths in strategic areas.',
      },
    },
  },
};

export const DevelopingTalent: Story = {
  name: 'Developing Talent - Growth Opportunities',
  args: {
    chartData: [
      {
        skill: 'Leadership',
        talentScore: 4.2,
        cohortAverage: 7.1,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Public Speaking',
        talentScore: 3.8,
        cohortAverage: 6.5,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Team Collaboration',
        talentScore: 6.1,
        cohortAverage: 7.3,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Technical Skills',
        talentScore: 7.8,
        cohortAverage: 6.9,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Problem Solving',
        talentScore: 7.2,
        cohortAverage: 7.0,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Time Management',
        talentScore: 5.4,
        cohortAverage: 6.8,
        top_competencies: false,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A developing talent with clear strengths in technical areas but opportunities for growth in soft skills. Shows mixed performance against cohort.',
      },
    },
  },
};

export const SpecializedExpert: Story = {
  name: 'Specialized Expert - Domain Focused',
  args: {
    chartData: [
      {
        skill: 'Data Analysis',
        talentScore: 9.8,
        cohortAverage: 6.2,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Statistical Modeling',
        talentScore: 9.5,
        cohortAverage: 5.8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Programming',
        talentScore: 9.2,
        cohortAverage: 6.1,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Team Management',
        talentScore: 5.1,
        cohortAverage: 7.2,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Client Relations',
        talentScore: 4.8,
        cohortAverage: 7.8,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Presentation Skills',
        talentScore: 5.5,
        cohortAverage: 7.0,
        top_competencies: false,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A technical specialist with exceptional domain expertise but areas for improvement in interpersonal skills. Shows how the chart handles extreme performance differences.',
      },
    },
  },
};

export const MinimalData: Story = {
  name: 'Minimal Skills Assessment',
  args: {
    chartData: [
      {
        skill: 'Core Competency',
        talentScore: 8.5,
        cohortAverage: 7.2,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Secondary Skill',
        talentScore: 6.8,
        cohortAverage: 7.8,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Development Area',
        talentScore: 5.2,
        cohortAverage: 6.5,
        top_competencies: false,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal dataset with only 3 skills to test chart behavior with fewer data points.',
      },
    },
  },
};

export const CustomColors: Story = {
  name: 'Custom Color Scheme',
  args: {
    chartData: [
      {
        skill: 'Creativity',
        talentScore: 8.7,
        cohortAverage: 6.9,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Analytical Thinking',
        talentScore: 7.8,
        cohortAverage: 7.5,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Emotional Intelligence',
        talentScore: 9.1,
        cohortAverage: 7.2,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Digital Literacy',
        talentScore: 6.8,
        cohortAverage: 8.1,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Cross-cultural Competence',
        talentScore: 8.2,
        cohortAverage: 6.8,
        top_competencies: true,
        totalScore: 10,
      },
    ],
    chartConfig: [
      { name: 'talent', color: '#10B981' }, // Emerald
      { name: 'cohort', color: '#8B5CF6' }, // Purple
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom color configuration with green for talent and purple for cohort averages.',
      },
    },
  },
};

export const ExtensiveSkillSet: Story = {
  name: 'Comprehensive Skills Assessment',
  args: {
    chartData: [
      {
        skill: 'Leadership',
        talentScore: 8.4,
        cohortAverage: 7.1,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Communication',
        talentScore: 9.2,
        cohortAverage: 7.8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Strategic Planning',
        talentScore: 7.9,
        cohortAverage: 6.8,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Team Building',
        talentScore: 8.1,
        cohortAverage: 7.3,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Project Management',
        talentScore: 7.6,
        cohortAverage: 7.4,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Innovation',
        talentScore: 8.8,
        cohortAverage: 6.5,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Customer Focus',
        talentScore: 8.9,
        cohortAverage: 7.7,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Financial Acumen',
        talentScore: 6.2,
        cohortAverage: 6.9,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Change Management',
        talentScore: 7.8,
        cohortAverage: 6.6,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Digital Transformation',
        talentScore: 8.5,
        cohortAverage: 6.1,
        top_competencies: true,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive assessment with 10 skills to test chart layout and readability with more data points. Tests label positioning and overlap handling.',
      },
    },
  },
};

export const EdgeCaseScores: Story = {
  name: 'Edge Case - Extreme Scores',
  args: {
    chartData: [
      {
        skill: 'Perfect Score',
        talentScore: 10,
        cohortAverage: 5.5,
        top_competencies: true,
        totalScore: 10,
      },
      {
        skill: 'Minimum Score',
        talentScore: 0,
        cohortAverage: 6.2,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Equal Performance',
        talentScore: 7.5,
        cohortAverage: 7.5,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'High Cohort Low Talent',
        talentScore: 2.1,
        cohortAverage: 9.8,
        top_competencies: false,
        totalScore: 10,
      },
      {
        skill: 'Reverse Pattern',
        talentScore: 9.9,
        cohortAverage: 1.2,
        top_competencies: true,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tests edge cases including perfect scores (10), minimum scores (0), equal performance, and extreme differences between talent and cohort.',
      },
    },
  },
};

export const EmptyData: Story = {
  name: 'Empty Dataset',
  args: {
    chartData: [],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests component behavior with empty data array. Should gracefully handle no data scenario.',
      },
    },
  },
};

export const SampleData: Story = {
  name: 'Sample Data from Mock',
  args: {
    chartData: radarMockData,
    chartConfig: chartConfig,
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses the sample data from the mock file to demonstrate real-world data structure and formatting.',
      },
    },
  },
};

export const WithNullValues: Story = {
  name: 'Null Values Handling',
  args: {
    chartData: [
      {
        skill: 'Valid Skill',
        talentScore: 8.5,
        cohortAverage: 7.2,
        topCompetencies: true,
        totalScore: 10,
      },
      {
        skill: 'Null Talent Score',
        talentScore: null,
        cohortAverage: 6.8,
        topCompetencies: false,
        totalScore: 10,
      },
      {
        skill: 'Null Cohort Average',
        talentScore: 7.1,
        cohortAverage: null,
        topCompetencies: true,
        totalScore: 10,
      },
      {
        skill: 'Both Null',
        talentScore: null,
        cohortAverage: null,
        topCompetencies: false,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tests how the chart handles null values in talent scores and cohort averages. Shows graceful degradation.',
      },
    },
  },
};

export const MissingProperties: Story = {
  name: 'Missing Properties',
  args: {
    chartData: [
      {
        skill: 'Complete Data',
        talentScore: 8.0,
        cohortAverage: 7.5,
        topCompetencies: true,
        totalScore: 10,
      },
      {
        skill: 'Missing Talent Score',
        cohortAverage: 6.2,
        topCompetencies: false,
        totalScore: 10,
      },
      {
        skill: 'Missing Cohort Average',
        talentScore: 7.8,
        topCompetencies: true,
        totalScore: 10,
      },
      {
        skill: 'Only Skill Name',
        topCompetencies: false,
        totalScore: 10,
      },
    ],
    chartConfig: defaultChartConfig,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests chart behavior when some data properties are missing entirely. Demonstrates fallback handling.',
      },
    },
  },
};

export const MixedPerformance: Story = {
  name: 'Mixed Performance Profile',
  args: {
    chartData: [
      {
        skill: 'Collaboration',
        talentScore: 6,
        cohortAverage: 6,
        topCompetencies: false,
        totalScore: 10,
      },
      {
        skill: 'Communication',
        talentScore: 5,
        cohortAverage: 6.67,
        topCompetencies: false,
        totalScore: 10,
      },
      {
        skill: 'Leadership',
        talentScore: 7,
        cohortAverage: 6,
        topCompetencies: true,
        totalScore: 10,
      },
      {
        skill: 'Effectiveness',
        talentScore: 6.8,
        cohortAverage: 5.73,
        topCompetencies: false,
        totalScore: 10,
      },
      {
        skill: 'Problem Solving',
        talentScore: 8,
        cohortAverage: 7.67,
        topCompetencies: true,
        totalScore: 10,
      },
      {
        skill: 'Innovation',
        talentScore: 8,
        cohortAverage: 7.2,
        topCompetencies: false,
        totalScore: 10,
      },
    ],
    chartConfig: [
      {
        name: 'talent',
        color: '#0185E4',
      },
      {
        name: 'cohort',
        color: '#FF9F43',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'A mixed performance profile showing varied talent vs cohort performance across different skills. Demonstrates both strengths (Leadership, Problem Solving) and areas for improvement (Communication).',
      },
    },
  },
};
