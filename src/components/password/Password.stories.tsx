import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './Password';
import { useState } from 'react';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Input/Password',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible Password Input component with validation, strength meter, and optional confirmation matching.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the input field',
      defaultValue: '300px',
    },
    height: {
      control: 'text',
      description: 'Height of the input field',
      defaultValue: '40px',
    },
    isConfirmation: {
      control: 'boolean',
      description: 'Whether this is a confirmation password field',
      defaultValue: false,
    },
    compareWith: {
      control: 'text',
      description: 'Password to compare with in confirmation field',
    },
    minLength: {
      control: 'number',
      description: 'Minimum allowed password length',
      defaultValue: 6,
    },
    maxLength: {
      control: 'number',
      description: 'Maximum allowed password length',
      defaultValue: 20,
    },
    showMatchText: {
      control: 'boolean',
      description: 'Show match/mismatch text message',
      defaultValue: true,
    },
    matchLabel: {
      control: 'text',
      description: 'Text to show when passwords match',
      defaultValue: '✅ Passwords match!',
    },
    mismatchLabel: {
      control: 'text',
      description: 'Text to show when passwords do not match',
      defaultValue: '❌ Passwords do not match',
    },
    showStrengthMeter: {
      control: 'boolean',
      description: 'Show a password strength meter below the input',
      defaultValue: true,
    },
    strengthLabel: {
      control: 'text',
      description: 'Label prefix for password strength (e.g., "Strength:")',
      defaultValue: 'Strength:',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
      defaultValue: false,
    },
    onMatchChange: { action: 'match changed' },
    onchange: { action: 'changed' },
    autoComplete: {
      control: 'select',
      options: ['off', 'on', 'current-password', 'new-password'],
      description: 'Specifies the autocomplete behavior of the password input',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: 'New Password',
    placeholder: 'Enter your password',
    width: '300px',
  },
};

export const PasswordWithWeakStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    value: '123',
    width: '300px',
  },
};

export const PasswordWithNormalStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    value: '123456',
    width: '300px',
  },
};

export const PasswordWithGoodStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    value: '12345678',
    width: '300px',
  },
};

export const PasswordWithStrongStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    value: '1234567890',
    width: '300px',
  },
};

export const ConfirmationPassword: Story = {
  args: {
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    isConfirmation: true,
    compareWith: '12345678',
    showMatchText: true,
    matchLabel: '✅ Match!',
    mismatchLabel: '❌ Not matching!',
    width: '300px',
  },
};

export const MatchTextHidden: Story = {
  args: {
    label: 'Confirm Password',
    placeholder: 'Re-enter password',
    isConfirmation: true,
    compareWith: 'mySecret!',
    showMatchText: false,
    width: '300px',
  },
};

export const HideStrengthMeter: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    showStrengthMeter: false,
    width: '300px',
  },
};

export const CustomLabelStyle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    labelClassName: 'text-blue-500 font-bold',
    width: '300px',
  },
};

export const CustomHeight: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    height: '50px',
    width: '300px',
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    className: 'border-2 border-blue-500',
    width: '400px',
  },
};

// Registration Form Example
export const RegistrationFormExample: Story = {
  render: () => {
    const [password, setPassword] = useState('');
    return (
      <div className="space-y-4 w-[400px]">
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="new-password"
          value={password}
          onchange={setPassword}
          required
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          isConfirmation
          compareWith={password}
          autoComplete="new-password"
          required
        />
      </div>
    );
  },
};

// Login Form Example
export const LoginFormExample: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    autoComplete: 'current-password',
    required: true,
  },
};
