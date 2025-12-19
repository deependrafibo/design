import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AlertModal } from './AlertModal';
import '../../tailwindcss/theme.css';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/Modal/AlertModal',
  component: AlertModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An alert modal component with customizable icons, countdown timer, and action buttons.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls modal visibility',
    },
    title: {
      control: 'text',
      description: 'Main title of the alert modal',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    iconType: {
      control: 'select',
      options: ['video', 'mic', 'idle', 'cross'],
      description: 'Type of icon to display (video, mic, idle, or cross)',
    },
    icon: {
      control: false,
      description: 'Custom icon component (overrides iconType)',
    },
    countdownSeconds: {
      control: { type: 'number', min: 0, max: 60, step: 1 },
      description: 'Initial countdown seconds',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when modal is closed',
    },
    onCountdownEnd: {
      action: 'countdownEnded',
      description: 'Callback when countdown reaches zero',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

export const VideoIcon: Story = {
  args: {
    isOpen: true,
    title: 'Camera Not Detected',
    description: 'Please check your camera connection and permissions.',
    iconType: 'video',
    onClose: action('closed'),
    primaryAction: {
      label: 'Cancel',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
    },
    secondaryAction: {
      label: 'Retry',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const MicIcon: Story = {
  args: {
    isOpen: true,
    title: 'Microphone Not Detected',
    description: 'Please check your microphone connection and permissions.',
    iconType: 'mic',
    onClose: action('closed'),
    primaryAction: {
      label: 'Cancel',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
    },
    secondaryAction: {
      label: 'Check Settings',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const IdleIcon: Story = {
  args: {
    isOpen: true,
    title: 'Session Idle',
    description: 'Your session has been idle for too long. Would you like to continue?',
    iconType: 'idle',
    onClose: action('closed'),
    primaryAction: {
      label: 'End Session',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
    },
    secondaryAction: {
      label: 'Continue',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const CrossIcon: Story = {
  args: {
    isOpen: true,
    title: 'Action Failed',
    description: 'The operation could not be completed. Please try again.',
    iconType: 'cross',
    onClose: action('closed'),
    primaryAction: {
      label: 'Close',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
    },
    secondaryAction: {
      label: 'Retry',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const WithCountdown: Story = {
  args: {
    isOpen: true,
    title: 'Auto-Close Warning',
    description: 'This modal will automatically close in 10 seconds.',
    iconType: 'idle',
    countdownSeconds: 10,
    onClose: action('closed'),
    onCountdownEnd: action('countdownEnded'),
    primaryAction: {
      label: 'Close in 10s',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
    },
    secondaryAction: {
      label: 'Stay',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    isOpen: true,
    title: 'Camera Disabled',
    iconType: 'video',
    onClose: action('closed'),
    primaryAction: {
      label: 'OK',
      onClick: action('primaryAction'),
      variant: 'primary',
    },
  },
};

export const PrimaryActionOnly: Story = {
  args: {
    isOpen: true,
    title: 'Information',
    description: 'This is a simple alert with only one action button.',
    iconType: 'idle',
    onClose: action('closed'),
    primaryAction: {
      label: 'Got it',
      onClick: action('primaryAction'),
      variant: 'primary',
    },
  },
};

export const SecondaryActionOnly: Story = {
  args: {
    isOpen: true,
    title: 'Confirm Action',
    description: 'Please confirm your action to proceed.',
    iconType: 'idle',
    onClose: action('closed'),
    secondaryAction: {
      label: 'Confirm',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const CustomStyling: Story = {
  args: {
    isOpen: true,
    title: 'Custom Styled Modal',
    description: 'This modal has custom styling applied.',
    iconType: 'video',
    className: 'shadow-2xl border-2 border-blue-500',
    onClose: action('closed'),
    primaryAction: {
      label: 'Cancel',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
      className: 'min-w-[120px]',
    },
    secondaryAction: {
      label: 'Accept',
      onClick: action('secondaryAction'),
      variant: 'primary',
      className: 'min-w-[120px]',
    },
  },
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    title: 'Microphone Permission Required',
    description:
      'We need access to your microphone to record your interview responses. Please grant microphone permissions in your browser settings. This will allow us to capture your audio during the interview session. Without microphone access, you will not be able to complete the interview.',
    iconType: 'mic',
    onClose: action('closed'),
    primaryAction: {
      label: 'Skip',
      onClick: action('primaryAction'),
      variant: 'errorOutline',
    },
    secondaryAction: {
      label: 'Grant Permission',
      onClick: action('secondaryAction'),
      variant: 'primary',
    },
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <AlertModal
          isOpen={true}
          title="Video Icon"
          iconType="video"
          primaryAction={{
            label: 'Close',
            onClick: () => {},
          }}
        />
        <AlertModal
          isOpen={true}
          title="Mic Icon"
          iconType="mic"
          primaryAction={{
            label: 'Close',
            onClick: () => {},
          }}
        />
        <AlertModal
          isOpen={true}
          title="Idle Icon"
          iconType="idle"
          primaryAction={{
            label: 'Close',
            onClick: () => {},
          }}
        />
        <AlertModal
          isOpen={true}
          title="Cross Icon"
          iconType="cross"
          primaryAction={{
            label: 'Close',
            onClick: () => {},
          }}
        />
      </div>
    </div>
  ),
};
