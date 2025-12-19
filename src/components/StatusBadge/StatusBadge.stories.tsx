import { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Active: Story = {
  args: {
    label: 'Active',
    type: 'active',
  },
};

export const ActiveUppercase: Story = {
  args: {
    label: 'ACTIVE',
    type: 'ACTIVE',
  },
};

export const Deactivated: Story = {
  args: {
    label: 'Deactivated',
    type: 'deactivated',
  },
};

export const DeactivatedUppercase: Story = {
  args: {
    label: 'DEACTIVATED',
    type: 'DEACTIVATED',
  },
};

export const Expired: Story = {
  args: {
    label: 'Expired',
    type: 'expired',
  },
};

export const ExpiredUppercase: Story = {
  args: {
    label: 'EXPIRED',
    type: 'EXPIRED',
  },
};

export const InvitationSent: Story = {
  args: {
    label: 'Invitation Sent',
    type: 'invitation-sent',
  },
};

export const InvitationSentUppercase: Story = {
  args: {
    label: 'INVITATION_SENT',
    type: 'INVITATION_SENT',
  },
};

export const Invited: Story = {
  args: {
    label: 'Invited',
    type: 'INVITED',
  },
};

export const InviteExpired: Story = {
  args: {
    label: 'Invite Expired',
    type: 'INVITE_EXPIRED',
  },
};

export const ProjectOngoing: Story = {
  args: {
    label: 'Project Ongoing',
    type: 'PROJECT_ONGOING',
  },
};

export const Removed: Story = {
  args: {
    label: 'Removed',
    type: 'REMOVED',
  },
};

export const AssignedToCohort: Story = {
  args: {
    label: 'Assigned to Cohort',
    type: 'ASSIGNED_TO_COHORT',
  },
};

export const AssignedToDepartment: Story = {
  args: {
    label: 'Assigned to Department',
    type: 'ASSIGNED_TO_DEPARTMENT',
  },
};

export const AssignedToProject: Story = {
  args: {
    label: 'Assigned to Project',
    type: 'ASSIGNED_TO_PROJECT',
  },
};

export const ProjectCompleted: Story = {
  args: {
    label: 'Project Completed',
    type: 'PROJECT_COMPLETED',
  },
};

export const Unassigned: Story = {
  args: {
    label: 'Unassigned',
    type: 'UNASSIGNED',
  },
};

export const Open: Story = {
  args: {
    label: 'Open',
    type: 'OPEN',
  },
};

export const Allocated: Story = {
  args: {
    label: 'Allocated',
    type: 'ALLOCATED',
  },
};

export const OnGoing: Story = {
  args: {
    label: 'On Going',
    type: 'ON_GOING',
  },
};

export const Completed: Story = {
  args: {
    label: 'Completed',
    type: 'COMPLETED',
  },
};

export const Pending: Story = {
  args: {
    label: 'Pending',
    type: 'PENDING',
  },
};

export const Assigned: Story = {
  args: {
    label: 'Assigned',
    type: 'ASSIGNED',
  },
};

export const Default: Story = {
  args: {
    label: 'Unknown Status',
    type: 'UNKNOWN_STATUS' as any,
  },
};

export const AllStatusTypes: Story = {
  render: () => (
    <div className="space-y-6 p-4 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Active & Working States</h3>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="Active" type="ACTIVE" />
          <StatusBadge label="Allocated" type="ALLOCATED" />
          <StatusBadge label="Assigned" type="ASSIGNED" />
          <StatusBadge label="Assigned to Cohort" type="ASSIGNED_TO_COHORT" />
          <StatusBadge label="Assigned to Department" type="ASSIGNED_TO_DEPARTMENT" />
          <StatusBadge label="Assigned to Project" type="ASSIGNED_TO_PROJECT" />
          <StatusBadge label="Project Ongoing" type="PROJECT_ONGOING" />
          <StatusBadge label="Ongoing Project" type="ONGOING_PROJECT" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Progress & Working States</h3>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="On Going" type="ON_GOING" />
          <StatusBadge label="Pending" type="PENDING" />
          <StatusBadge label="Open" type="OPEN" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Completed States</h3>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="Completed" type="COMPLETED" />
          <StatusBadge label="Project Completed" type="PROJECT_COMPLETED" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Invitation States</h3>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="Invitation Sent" type="INVITATION_SENT" />
          <StatusBadge label="Invited" type="INVITED" />
          <StatusBadge label="Invite Expired" type="INVITE_EXPIRED" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Inactive & Removed States</h3>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="Deactivated" type="DEACTIVATED" />
          <StatusBadge label="Unassigned" type="UNASSIGNED" />
          <StatusBadge label="Removed" type="REMOVED" />
          <StatusBadge label="Expired" type="EXPIRED" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A comprehensive showcase of all available status badge types organized by category. This demonstrates the complete range of status indicators available in the design system.',
      },
    },
  },
};
