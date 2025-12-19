import { Meta, StoryObj } from '@storybook/react';
import { ModifiedProgressBar } from './ModifiedProgressBar';

const meta: Meta<typeof ModifiedProgressBar> = {
  title: 'Components/ModifiedProgressBar',
  component: ModifiedProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A progress bar component to display process progress. It supports dynamic progress, error handling, and custom labels. Can be used for file uploads, form submissions, or any process requiring progress feedback.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: { table: { disable: true } },
    status: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ModifiedProgressBar>;

export const Default: Story = {
  args: {
    label: 'Uploading document, this will only take a few seconds',
    progress: 50,
    status: 'loading',
  },
};

export const WithError: Story = {
  args: {
    label: 'Uploading document, this will only take a few seconds',
    progress: 0,
    status: 'error',
  },
};

export const Success: Story = {
  args: {
    label: 'Uploading document, this will only take a few seconds',
    progress: 100,
    status: 'success',
  },
};

export const NoProgress: Story = {
  args: {
    label: 'Waiting to start the upload...',
    progress: 0,
    status: 'idle',
  },
};
