import { Meta, StoryObj } from '@storybook/react';
import { ToastType } from './types';
import { CustomToast } from './Toast';

const meta: Meta<typeof CustomToast> = {
  title: 'Components/Toast',
  component: CustomToast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable toast notification component supporting multiple types and variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Defines the type of toast message.',
      options: Object.values(ToastType),
    },
    variant: {
      control: 'select',
      description: 'Defines the variant of the toast.',
      options: ['filled', 'light', 'outline'],
    },
    title: {
      control: 'text',
      description: 'The title of the toast message.',
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show the icon or not.',
    },
    closeIcon: {
      control: 'boolean',
      description: 'Whether to show a custom close icon.',
    },
    hideIcon: {
      control: 'boolean',
      description: 'Whether to hide the default icon.',
    },
    hideTitle: {
      control: 'boolean',
      description: 'Whether to hide the title of the toast.',
    },
    containerClassName: {
      control: 'text',
      description: 'Custom class for the container of the toast.',
    },
    contentClassName: {
      control: 'text',
      description: 'Custom class for the content area inside the toast.',
    },
    iconClassName: {
      control: 'text',
      description: 'Custom class for the icon.',
    },
    titleClassName: {
      control: 'text',
      description: 'Custom class for the title.',
    },
    closeBtnClassName: {
      control: 'text',
      description: 'Custom class for the close button.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomToast>;

// Success Toast
export const SuccessToast: Story = {
  args: {
    type: ToastType.SUCCESS,
    title: 'Success!',
    variant: 'light',
    onClose: () => {},
    icon: true,
  },
};

// Error Toast
export const ErrorToast: Story = {
  args: {
    type: ToastType.ERROR,
    title: 'Error!',
    variant: 'light',
    onClose: () => {},
    icon: true,
  },
};

// Warning Toast
export const WarningToast: Story = {
  args: {
    type: ToastType.WARNING,
    title: 'Warning!',
    variant: 'outline',
    onClose: () => {},
    containerClassName: 'bg-yellow-100',
    contentClassName: 'text-yellow-700',
    icon: true,
  },
};

// Info Toast
export const InfoToast: Story = {
  args: {
    type: ToastType.INFO,
    title: 'Information!',
    variant: 'light',
    onClose: () => {},
    containerClassName: 'bg-blue-100',
    contentClassName: 'text-blue-700',
    icon: true,
  },
};

// Custom Toast
export const CustomToastComponent: Story = {
  args: {
    type: ToastType.INFO,
    title: 'Custom Toast!',
    variant: 'outline',
    onClose: () => {},
    containerClassName: 'bg-gray-100 border-gray-600',
    contentClassName: 'text-gray-700 font-montserrat text-sm',
    hideIcon: false,
    hideTitle: false,
    iconClassName: 'text-blue-500',
    closeBtnClassName: 'text-black',
  },
};
