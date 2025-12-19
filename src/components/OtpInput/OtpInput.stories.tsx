import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button';
import { OTPInput } from './OtpInput';

const meta: Meta<typeof OTPInput> = {
  title: 'Components/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable OTP (One-Time Password) input component with support for different lengths, validation, and styling options.',
      },
    },
  },
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of input fields to display',
    },
    value: {
      control: 'text',
      description: 'Current OTP value (controlled component)',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when OTP value changes',
    },
    onComplete: {
      action: 'completed',
      description: 'Triggered when all OTP fields are filled',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all input fields',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Automatically focus the first input field on mount (default: false)',
    },
    isNumberOnly: {
      control: 'boolean',
      description: 'Restrict input to numbers only',
    },
    inputClassName: {
      control: 'text',
      description: 'Additional CSS classes for input fields',
    },
    containerClassName: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
    hasError: {
      control: 'boolean',
      description: 'Display error styling on inputs',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below inputs',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for each input field',
    },
    inputType: {
      control: { type: 'select', options: ['text', 'password', 'tel'] },
      description: 'HTML input type attribute',
    },
    inputMode: {
      control: {
        type: 'select',
        options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
      },
      description: 'HTML inputMode attribute',
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Maximum characters allowed per input field',
    },
    handleBlur: {
      description: 'Function to handle blur event on input fields',
    },
  },
};

export default meta;

type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false as per new default behavior
    isNumberOnly: true,
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');
      return (
        <OTPInput
          {...args}
          label="OTP"
          labelClassName="text-gray-600 mb-1"
          value={otp}
          onChange={(value) => setOtp(value)}
          inputClassName="bg-white rounded-md border border-gray-300 focus:border-truBlue"
          onComplete={(value) => console.log('Completed:', value)}
        />
      );
    };

    return <RenderComponent />;
  },
};

export const WithAutoFocus: Story = {
  args: {
    length: 4,
    autoFocus: true, // Explicitly enable autoFocus for this story
    isNumberOnly: true,
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return (
        <OTPInput
          {...args}
          label="OTP with AutoFocus"
          labelClassName="text-gray-600 mb-1"
          value={otp}
          onChange={(value) => setOtp(value)}
          inputClassName="bg-white rounded-md border border-gray-300 focus:border-truBlue"
          onComplete={(value) => console.log('Completed:', value)}
        />
      );
    };

    return <RenderComponent />;
  },
};

export const WithSeparator: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false
    isNumberOnly: true,
    separator: '-',
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return (
        <OTPInput
          {...args}
          value={otp}
          onChange={(value) => setOtp(value)}
          separator={<span className="mx-2 text-gray-400">-</span>}
        />
      );
    };

    return <RenderComponent />;
  },
};

export const SixDigit: Story = {
  args: {
    length: 6,
    autoFocus: false, // Updated to false
    isNumberOnly: true,
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return <OTPInput {...args} value={otp} onChange={(value) => setOtp(value)} />;
    };

    return <RenderComponent />;
  },
};

export const WithError: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false
    isNumberOnly: true,
    hasError: true,
    errorMessage: 'Invalid OTP code',
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return <OTPInput {...args} value={otp} onChange={(value) => setOtp(value)} />;
    };

    return <RenderComponent />;
  },
};

export const CustomStyling: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false
    isNumberOnly: true,
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return <OTPInput {...args} value={otp} onChange={(value) => setOtp(value)} />;
    };

    return <RenderComponent />;
  },
};

export const Disabled: Story = {
  args: {
    length: 4,
    disabled: true,
    value: '1234',
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('1234');

      return <OTPInput {...args} value={otp} onChange={(value) => setOtp(value)} />;
    };

    return <RenderComponent />;
  },
};

export const AlphanumericOTP: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false
    isNumberOnly: false,
    placeholder: 'X',
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return <OTPInput {...args} value={otp} onChange={(value) => setOtp(value)} />;
    };

    return <RenderComponent />;
  },
};

export const PasswordType: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false
    isNumberOnly: true,
    inputType: 'password',
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');

      return <OTPInput {...args} value={otp} onChange={(value) => setOtp(value)} />;
    };

    return <RenderComponent />;
  },
};

export const WithVerification: Story = {
  args: {
    length: 4,
    autoFocus: false, // Updated to false
    isNumberOnly: true,
  },
  render: (args) => {
    const RenderComponent = () => {
      const [otp, setOtp] = useState('');
      const [error, setError] = useState(false);

      const handleComplete = (code: string) => {
        setError(code !== '1234');
      };

      return (
        <div className="flex flex-col items-center">
          <OTPInput
            {...args}
            value={otp}
            onChange={(value) => {
              setOtp(value);
              setError(false);
            }}
            onComplete={handleComplete}
            hasError={error}
            errorMessage="Invalid verification code"
          />
          <div className="mt-4">
            <Button onClick={() => setOtp('')}>Clear</Button>
          </div>
        </div>
      );
    };

    return <RenderComponent />;
  },
};
