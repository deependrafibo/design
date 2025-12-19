import { Meta, StoryObj } from '@storybook/react';
import { CohortHeader } from './CohortHeader';
import { Status } from '../departmentHeader/enums';

const cohortHeaderMeta: Meta<typeof CohortHeader> = {
  title: 'Components/Headers/CohortHeader',
  component: CohortHeader,
  parameters: {
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

export default cohortHeaderMeta;
type CohortHeaderStory = StoryObj<typeof CohortHeader>;

export const Default: CohortHeaderStory = {
  args: {
    cohortName: 'Cohort 1',
    departmentName: 'Department 1',
    endDate: '2025-01-01',
    keySkills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
    label: 'Active',
    type: 'active',
    status: Status.ACTIVE,
    toggleOn: false,
    showToggle: false,
    onToggle: () => {
      console.log('Toggle clicked');
    },
    epuAvailable: 10,
    avgLearnibiltyScore: 80,
  },
};
