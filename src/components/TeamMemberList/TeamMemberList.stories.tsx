import { Meta, StoryObj } from '@storybook/react';
import { TeamMemberList } from './TeamMemberList';
import { mockTeamMembers } from './TeamMemberListMockData';

const meta: Meta<typeof TeamMemberList> = {
  title: 'Components/TeamMemberList',
  component: TeamMemberList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof TeamMemberList>;

export const Default: Story = {
  args: {
    title: 'Team',
    items: mockTeamMembers,
    height: '400px',
    width: '480px',
    onInvite: () => alert('Invite clicked'),
  },
};

export const WithFewMembers: Story = {
  args: {
    title: 'Core Team',
    items: mockTeamMembers.slice(0, 3),
    height: '280px',
    width: '420px',
  },
};

export const WithoutInviteButton: Story = {
  args: {
    title: 'Observers',
    items: mockTeamMembers,
    height: '360px',
    width: '460px',
    onInvite: undefined,
  },
};
