import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable toggle switch component with on/off states.

## Features
- On/off toggle states
- Disabled state support
- Customizable label
- Accessible design
- Custom styling support
- Smooth animations

## Usage
\`\`\`tsx
import { Toggle } from './Toggle';

<Toggle
  checked={isEnabled}
  label="Enable notifications"
  onChange={(checked) => setIsEnabled(checked)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Toggle state (on or off)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the toggle when true',
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to the toggle',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional CSS classes for the label',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when toggle state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const handleToggleChange = () => {
  action('toggle changed');
};

export const On: Story = {
  args: {
    checked: true,
    label: 'Notifications enabled',
    onChange: handleToggleChange,
  },
};

export const Off: Story = {
  args: {
    checked: false,
    label: 'Notifications disabled',
    onChange: handleToggleChange,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled toggle',
    onChange: handleToggleChange,
  },
};

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled toggle (on)',
    onChange: handleToggleChange,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
    onChange: handleToggleChange,
  },
};

export const CustomStyling: Story = {
  args: {
    checked: false,
    label: 'Custom styled toggle',
    labelClassName: 'text-blue-600 font-semibold',
    onChange: handleToggleChange,
  },
};

export const DarkMode: Story = {
  args: {
    checked: true,
    label: 'Dark mode',
    onChange: handleToggleChange,
  },
};

export const AutoSave: Story = {
  args: {
    checked: false,
    label: 'Auto-save changes',
    onChange: handleToggleChange,
  },
};

export const TwoFactorAuth: Story = {
  args: {
    checked: true,
    label: 'Two-factor authentication',
    onChange: handleToggleChange,
  },
};

export const EmailNotifications: Story = {
  args: {
    checked: false,
    label: 'Email notifications',
    onChange: handleToggleChange,
  },
};

export const PushNotifications: Story = {
  args: {
    checked: true,
    label: 'Push notifications',
    onChange: handleToggleChange,
  },
};

export const AccessibilityExample: Story = {
  args: {
    checked: false,
    label: 'Screen reader support',
    onChange: handleToggleChange,
  },
  parameters: {
    docs: {
      description: {
        story: 'This toggle demonstrates proper accessibility with ARIA labels and keyboard navigation support.',
      },
    },
  },
};
