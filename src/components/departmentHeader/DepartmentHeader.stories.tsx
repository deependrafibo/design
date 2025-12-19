import { Meta, StoryObj } from '@storybook/react';
import DepartmentHeader from './DepartmentHeader';
import { action } from '@storybook/addon-actions';
import { Status } from './enums';

const departmentHeaderMeta: Meta<typeof DepartmentHeader> = {
  title: 'Components/Headers/DepartmentHeader',
  component: DepartmentHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Department header component for displaying department information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onToggle: { action: 'toggled' },
  },
};

export default departmentHeaderMeta;
type DepartmentHeaderStory = StoryObj<typeof DepartmentHeader>;

export const Default: DepartmentHeaderStory = {
  args: {
    name: 'Engineering',
    identifier: 'ENG-001',
    cohortCount: 3,
    createdAt: '2023-05-15',
    status: Status.ACTIVE,
    onToggle: action('toggled'),
    label: 'Active',
    type: 'active',
  },
};
