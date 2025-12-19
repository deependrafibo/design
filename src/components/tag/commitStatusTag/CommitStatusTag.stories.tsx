import { Meta, StoryObj } from '@storybook/react';
import { CommitStatusTag } from './CommitStatusTag';

const meta: Meta<typeof CommitStatusTag> = {
  title: 'Components/Tag/CommitStatusTag',
  component: CommitStatusTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tag component for displaying commit status with different visual styles for each status type.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['Open', 'Merged', 'Closed', 'OPEN', 'MERGED', 'CLOSED'],
      description: 'The commit status to display',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommitStatusTag>;

export const Open: Story = {
  args: {
    status: 'Open',
  },
};

export const OpenUppercase: Story = {
  args: {
    status: 'OPEN',
  },
};

export const Merged: Story = {
  args: {
    status: 'Merged',
  },
};

export const MergedUppercase: Story = {
  args: {
    status: 'MERGED',
  },
};

export const Closed: Story = {
  args: {
    status: 'Closed',
  },
};

export const ClosedUppercase: Story = {
  args: {
    status: 'CLOSED',
  },
};

export const WithCustomClassName: Story = {
  args: {
    status: 'Open',
    className: 'mx-4 my-2',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Lowercase</span>
        <CommitStatusTag status="Open" />
        <CommitStatusTag status="Merged" />
        <CommitStatusTag status="Closed" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Uppercase</span>
        <CommitStatusTag status="OPEN" />
        <CommitStatusTag status="MERGED" />
        <CommitStatusTag status="CLOSED" />
      </div>
    </div>
  ),
};
