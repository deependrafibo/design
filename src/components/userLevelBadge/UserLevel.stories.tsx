import UserLevelBadge from './UserLevelBadge';
import { UserLevelBadgeProps } from './types';

export default {
  title: 'Components/UserLevelBadge',
  component: UserLevelBadge,
  argTypes: {
    level: {
      control: 'text',
      description: 'The level of the user (e.g. Department, Project)',
    },
  },
};

export const DepartmentLevel = () => <UserLevelBadge level="Department" />;

export const ProjectLevel = () => <UserLevelBadge level="Project" />;

export const DynamicLevel = (args: UserLevelBadgeProps) => <UserLevelBadge {...args} />;
DynamicLevel.args = {
  level: 'Department',
};
