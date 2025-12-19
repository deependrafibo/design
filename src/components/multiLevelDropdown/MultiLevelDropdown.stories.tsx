import { Meta, StoryObj } from '@storybook/react';
import { MultiLevelDropdown } from './MultiLevelDropdown';
import { DropdownItem } from './types';

const meta: Meta<typeof MultiLevelDropdown> = {
  title: 'Components/MultiLevelDropdown',
  component: MultiLevelDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the dropdown menu',
    },
    required: {
      control: 'boolean',
      description: 'Show required asterisk',
    },
    label: {
      control: 'text',
      description: 'Dropdown label',
    },
    placeholder: {
      control: 'text',
      description: 'Dropdown placeholder',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiLevelDropdown>;

const sampleData: DropdownItem[] = [
  {
    id: 'cohort1',
    label: 'Cohort 1',
    children: [
      { id: 'project1-1', label: 'Project name 1' },
      { id: 'project1-2', label: 'Project name 2' },
      { id: 'project1-3', label: 'Project name 3' },
    ],
  },
  {
    id: 'cohort2',
    label: 'Cohort 2',
    children: [
      { id: 'select-cohort-only', label: 'Select cohort only' },
      { id: 'project2-1', label: 'Project name 1' },
      { id: 'project2-2', label: 'Project name 2' },
      { id: 'project2-3', label: 'Project name 3' },
      { id: 'project2-4', label: 'Project name 4' },
    ],
  },
  {
    id: 'cohort3',
    label: 'Cohort 3',
    children: [
      { id: 'project3-1', label: 'Project name 1' },
      { id: 'project3-2', label: 'Project name 2' },
    ],
  },
  {
    id: 'cohort4',
    label: 'Cohort 4',
    children: [{ id: 'project4-1', label: 'Project name 1' }],
  },
];

export const Default: Story = {
  args: {
    items: sampleData,
    label: 'Select Cohort & Project',
    placeholder: 'Select cohort & project',
  },
};

export const WithRequired: Story = {
  args: {
    items: sampleData,
    label: 'Select Cohort & Project',
    placeholder: 'Select cohort & project',
    width: '300px',
    required: true,
  },
};

export const CustomWidth: Story = {
  args: {
    items: sampleData,
    label: 'Custom Width Example',
    placeholder: 'Choose your option',
    width: '400px',
  },
};

export const Nested: Story = {
  args: {
    items: [
      {
        id: 'parent1',
        label: 'Parent 1',
        children: [
          {
            id: 'child1',
            label: 'Child 1',
            children: [
              { id: 'grandchild1', label: 'Grandchild 1' },
              { id: 'grandchild2', label: 'Grandchild 2' },
            ],
          },
        ],
      },
      {
        id: 'parent2',
        label: 'Parent 2',
        children: [{ id: 'child2', label: 'Child 2' }],
      },
    ],
    label: 'Nested Example',
    placeholder: 'Select item',
    width: '350px',
  },
};

export const WithCustomLabel: Story = {
  args: {
    items: sampleData,
    label: 'Custom Label',
    placeholder: 'Pick something',
    width: '350px',
  },
};
