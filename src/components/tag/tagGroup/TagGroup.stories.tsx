import { Meta, StoryObj } from '@storybook/react';
import { TagGroup } from './TagGroup';
import { BadgeType } from './types';

const meta: Meta<typeof TagGroup> = {
  title: 'Components/Tag/TagGroup',
  component: TagGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'TagGroup component displays a collection of tags with optional truncation and custom colors. It supports tooltips to show overflow tags when truncated.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tags: {
      description: 'Array of tag objects with id and name properties',
      control: 'object',
    },
    truncateAfter: {
      description: 'Number of tags to display before truncating. Remaining tags shown in tooltip.',
      control: { type: 'number', min: 1, max: 10 },
    },
    tooltipDirection: {
      description: 'Direction where the tooltip appears',
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    tagColors: {
      description: 'Custom colors for tags with background and text properties',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

// Sample data
const sampleTags: BadgeType[] = [
  { id: '1', name: 'React' },
  { id: '2', name: 'TypeScript' },
  { id: '3', name: 'JavaScript' },
  { id: '4', name: 'Node.js' },
  { id: '5', name: 'Python' },
];

const manyTags: BadgeType[] = [
  { id: '1', name: 'React' },
  { id: '2', name: 'TypeScript' },
  { id: '3', name: 'JavaScript' },
  { id: '4', name: 'Node.js' },
  { id: '5', name: 'Python' },
  { id: '6', name: 'Java' },
  { id: '7', name: 'C++' },
  { id: '8', name: 'Go' },
  { id: '9', name: 'Rust' },
  { id: '10', name: 'Swift' },
];

const projectTags: BadgeType[] = [
  { id: '1', name: 'E-commerce Platform' },
  { id: '2', name: 'Mobile App Development' },
  { id: '3', name: 'Data Analytics Dashboard' },
  { id: '4', name: 'API Integration' },
];

// Default story
export const Default: Story = {
  args: {
    tags: sampleTags,
  },
};

// With custom colors - Primary Blue
export const CustomColorsPrimaryBlue: Story = {
  args: {
    tags: sampleTags,
    tagColors: {
      background: '#E0F0FB',
      text: '#0185E4',
    },
  },
};

// With custom colors - Green
export const CustomColorsGreen: Story = {
  args: {
    tags: sampleTags,
    tagColors: {
      background: '#E4F9ED',
      text: '#28C76F',
    },
  },
};

// With custom colors - Purple
export const CustomColorsPurple: Story = {
  args: {
    tags: sampleTags,
    tagColors: {
      background: '#F2F1FE',
      text: '#7367F0',
    },
  },
};

// With custom colors - Orange
export const CustomColorsOrange: Story = {
  args: {
    tags: sampleTags,
    tagColors: {
      background: '#FFF4E8',
      text: '#FF9F43',
    },
  },
};

// Truncated with tooltip
export const TruncatedWithTooltip: Story = {
  args: {
    tags: manyTags,
    truncateAfter: 3,
    tooltipDirection: 'bottom',
  },
};

// Truncated with custom colors
export const TruncatedWithCustomColors: Story = {
  args: {
    tags: manyTags,
    truncateAfter: 3,
    tooltipDirection: 'right',
    tagColors: {
      background: '#E0F0FB',
      text: '#0185E4',
    },
  },
};

// Tooltip on the right
export const TooltipRight: Story = {
  args: {
    tags: manyTags,
    truncateAfter: 4,
    tooltipDirection: 'right',
  },
};

// Tooltip on the left
export const TooltipLeft: Story = {
  args: {
    tags: manyTags,
    truncateAfter: 4,
    tooltipDirection: 'left',
  },
};

// Tooltip on top
export const TooltipTop: Story = {
  args: {
    tags: manyTags,
    truncateAfter: 4,
    tooltipDirection: 'top',
  },
};

// Project tags example
export const ProjectTags: Story = {
  args: {
    tags: projectTags,
    truncateAfter: 2,
    tooltipDirection: 'right',
    tagColors: {
      background: '#E0F0FB',
      text: '#0185E4',
    },
  },
};

// Few tags (no truncation needed)
export const FewTags: Story = {
  args: {
    tags: [
      { id: '1', name: 'React' },
      { id: '2', name: 'TypeScript' },
    ],
    truncateAfter: 5,
  },
};

// Single tag
export const SingleTag: Story = {
  args: {
    tags: [{ id: '1', name: 'React' }],
  },
};

// Empty state
export const EmptyTags: Story = {
  args: {
    tags: [],
  },
};

// Long tag names
export const LongTagNames: Story = {
  args: {
    tags: [
      { id: '1', name: 'Full Stack Web Development' },
      { id: '2', name: 'Cloud Infrastructure Engineering' },
      { id: '3', name: 'Machine Learning and AI' },
      { id: '4', name: 'DevOps and CI/CD Pipelines' },
    ],
    truncateAfter: 2,
    tooltipDirection: 'right',
    tagColors: {
      background: '#FFFAED',
      text: '#F6C01C',
    },
  },
};

// All tags visible (no truncation)
export const AllTagsVisible: Story = {
  args: {
    tags: manyTags,
  },
};

// Interview projects example (matching user's use case)
export const InterviewProjects: Story = {
  args: {
    tags: [
      { id: 'proj-1', name: 'E-commerce Platform' },
      { id: 'proj-2', name: 'Mobile Banking App' },
      { id: 'proj-3', name: 'Social Media Dashboard' },
      { id: 'proj-4', name: 'Healthcare Portal' },
    ],
    truncateAfter: 3,
    tooltipDirection: 'right',
    tagColors: {
      background: '#E0F0FB',
      text: '#0185E4',
    },
  },
};

// Comparison of different color schemes
export const ColorComparison: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">Default (Blue)</h3>
        <TagGroup tags={sampleTags} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Custom Blue</h3>
        <TagGroup
          tags={sampleTags}
          tagColors={{
            background: '#E0F0FB',
            text: '#0185E4',
          }}
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Green</h3>
        <TagGroup
          tags={sampleTags}
          tagColors={{
            background: '#E4F9ED',
            text: '#28C76F',
          }}
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Purple</h3>
        <TagGroup
          tags={sampleTags}
          tagColors={{
            background: '#F2F1FE',
            text: '#7367F0',
          }}
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Orange</h3>
        <TagGroup
          tags={sampleTags}
          tagColors={{
            background: '#FFF4E8',
            text: '#FF9F43',
          }}
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Yellow</h3>
        <TagGroup
          tags={sampleTags}
          tagColors={{
            background: '#FFFAED',
            text: '#F6C01C',
          }}
        />
      </div>
    </div>
  ),
};

// Truncation comparison
export const TruncationComparison: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">No Truncation</h3>
        <TagGroup tags={manyTags} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Truncate After 3</h3>
        <TagGroup tags={manyTags} truncateAfter={3} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Truncate After 5</h3>
        <TagGroup tags={manyTags} truncateAfter={5} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Truncate After 7</h3>
        <TagGroup tags={manyTags} truncateAfter={7} />
      </div>
    </div>
  ),
};
