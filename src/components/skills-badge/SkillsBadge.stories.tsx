import type { Meta, StoryObj } from '@storybook/react';
import { SkillsBadge } from './SkillsBadge';

const meta: Meta<typeof SkillsBadge> = {
  title: 'Components/SkillsBadge',
  component: SkillsBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showCount: {
      control: 'number',
      description: 'Number of skills to show before truncating',
    },
    skills: {
      control: 'object',
      description: 'Array of skills with label and value',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the container div',
    },
    skillClassName: {
      control: 'text',
      description: 'Additional classes for individual skill badges',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkillsBadge>;

const defaultSkills = [
  { label: 'React', value: 'react' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'GraphQL', value: 'graphql' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'Tailwind CSS', value: 'tailwind' },
];

export const Default: Story = {
  args: {
    skills: defaultSkills,
  },
};

export const WithShowCount: Story = {
  args: {
    skills: defaultSkills,
    showCount: 3,
  },
};

export const ShowAll: Story = {
  args: {
    skills: defaultSkills,
    showCount: 10, // Greater than skills length, so shows all
  },
};

export const FewSkills: Story = {
  args: {
    skills: [
      { label: 'React', value: 'react' },
      { label: 'TypeScript', value: 'typescript' },
    ],
  },
};

export const LongSkillNames: Story = {
  args: {
    skills: [
      { label: 'React Native', value: 'react-native' },
      { label: 'TypeScript with React', value: 'typescript-react' },
      { label: 'Node.js with Express', value: 'node-express' },
      { label: 'GraphQL with Apollo', value: 'graphql-apollo' },
    ],
    showCount: 2,
  },
};

export const Empty: Story = {
  args: {
    skills: [],
  },
};

export const WithCustomContainerClass: Story = {
  args: {
    skills: defaultSkills,
    className: 'bg-gray-50 p-4 rounded-lg',
  },
};

export const WithCustomSkillClass: Story = {
  args: {
    skills: defaultSkills,
    showCount: 3,
    skillClassName: 'border border-primary/20',
  },
};

export const WithAllCustomClasses: Story = {
  args: {
    skills: defaultSkills,
    showCount: 3,
    className: 'bg-gray-50 p-4 rounded-lg max-w-md',
    skillClassName: 'border border-primary/20 shadow-sm',
  },
};

export const DenseLayout: Story = {
  args: {
    skills: defaultSkills,
    className: 'gap-1',
    skillClassName: 'px-2 py-0',
  },
};

export const WideLayout: Story = {
  args: {
    skills: defaultSkills,
    className: 'gap-4',
    skillClassName: 'px-4 py-1',
  },
};
