import { Meta, StoryObj } from '@storybook/react';
import TopBannerToast, { TopBannerToastProps } from './TopBannerToast';

const meta: Meta<typeof TopBannerToast> = {
  title: 'Components/Toast/TopBannerToast',
  component: TopBannerToast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A full-width top banner toast for high-visibility, dismissible notifications.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
    title: { control: 'text' },
    dismissText: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TopBannerToast>;

const Template = (args: TopBannerToastProps) => (
  <div>
    <TopBannerToast {...args} />
    <div className="p-6">Your page content here…</div>
  </div>
);

export const Info: Story = {
  render: Template,
  args: {
    type: 'info',
    title: '2 minutes left.',
    message: 'Please wrap up your response before this interview ends.',
  },
};

export const Success: Story = {
  render: Template,
  args: {
    type: 'success',
    title: 'Profile updated.',
    message: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  render: Template,
  args: {
    type: 'warning',
    title: 'Unsaved changes.',
    message: 'You have unsaved edits. Be sure to save before leaving.',
  },
};

export const Error: Story = {
  render: Template,
  args: {
    type: 'error',
    title: 'Something went wrong.',
    message: 'We could not complete your request. Try again.',
  },
};

export const CustomDismissText: Story = {
  render: Template,
  args: {
    type: 'info',
    title: 'Maintenance ends in 5 minutes.',
    message: 'You may experience temporary disruptions.',
    dismissText: 'Close',
  },
};
