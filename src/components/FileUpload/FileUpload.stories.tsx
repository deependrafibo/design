import { FileUpload } from './FileUpload';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the component',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file uploads',
      defaultValue: true,
    },
    label: {
      control: 'text',
      description: 'Label text for the upload area',
    },
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Progress of the file upload (0-100)',
    },
    status: {
      control: { type: 'select', options: ['idle', 'loading', 'success', 'error'] },
      description: 'Status of the file upload',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    onChange: {
      action: 'changed',
      description: 'Callback triggered when files are uploaded',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    className: 'w-full',
    multiple: true,
    label: 'Upload Files',
    progress: 50,
    status: 'loading',
    onChange: action('file-uploaded'),
  },
};

export const SingleFileUpload: Story = {
  args: {
    className: 'w-full',
    multiple: false,
    label: 'Upload Single File',
    progress: 75,
    status: 'loading',
    onChange: action('file-uploaded'),
  },
};

export const Uploaded: Story = {
  args: {
    className: 'w-full',
    multiple: true,
    label: 'Files Uploaded',
    progress: 100,
    status: 'success',
    onChange: action('file-uploaded'),
  },
};

export const WithError: Story = {
  args: {
    className: 'w-full',
    multiple: true,
    label: 'Upload Files',
    progress: 50,
    status: 'error',
    error: true,
    onChange: action('file-uploaded'),
  },
};

export const Empty: Story = {
  args: {
    className: 'w-full',
    multiple: true,
    label: 'Upload Files',
    onChange: action('file-uploaded'),
  },
};
