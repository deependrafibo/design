import { InputFile } from './InputFile';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof InputFile> = {
  title: 'Components/Input/FileInput',
  component: InputFile,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A file input component that provides a clean interface for file selection with customizable styling and validation.

## Features
- Customizable label and placeholder text
- File type validation support
- Error state handling
- Responsive design
- Accessible file input interface

## Usage
\`\`\`tsx
import { InputFile } from './InputFile';

<InputFile
  label="Upload Document"
  placeholder="Choose a file or drag it here"
  onchange={(file) => console.log('Selected file:', file)}
  accept=".pdf,.doc,.docx"
  multiple={false}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the file input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no file is selected',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the input container',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional CSS classes for the label',
    },
    labelStyle: {
      control: 'text',
      description: 'Inline styles for the label',
    },
    onchange: {
      action: 'file selected',
      description: 'Callback triggered when files are selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Default: Story = {
  args: {
    label: 'Upload File',
    placeholder: 'No file chosen',
    onchange: action('file selected'),
  },
};

export const WithFileTypes: Story = {
  args: {
    label: 'Upload Document',
    placeholder: 'Choose a PDF, DOC, or DOCX file',
    onchange: action('file selected'),
  },
};

export const MultipleFiles: Story = {
  args: {
    label: 'Upload Images',
    placeholder: 'Choose one or more image files',
    onchange: action('files selected'),
  },
};

export const Required: Story = {
  args: {
    label: 'Required File Upload',
    placeholder: 'Please select a file (required)',
    onchange: action('file selected'),
  },
};

export const WithError: Story = {
  args: {
    label: 'File Upload',
    placeholder: 'Choose a file',
    onchange: action('file selected'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Upload',
    placeholder: 'Upload disabled',
    onchange: action('file selected'),
  },
};

export const CustomStyling: Story = {
  args: {
    label: 'Custom Styled Upload',
    placeholder: 'Drag and drop files here',
    className: 'border-2 border-dashed border-blue-300 rounded-lg p-4 hover:border-blue-500 transition-colors',
    labelClassName: 'text-blue-600 font-semibold',
    onchange: action('file selected'),
  },
};

export const ImageOnly: Story = {
  args: {
    label: 'Profile Picture',
    placeholder: 'Select an image file (JPG, PNG, GIF)',
    onchange: action('image selected'),
  },
};

export const LargeFileUpload: Story = {
  args: {
    label: 'Upload Large File',
    placeholder: 'Select a file (max 100MB)',
    className: 'w-96',
    onchange: action('large file selected'),
  },
};
