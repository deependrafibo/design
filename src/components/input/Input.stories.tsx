import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { InputProps } from './types';

const meta: Meta<InputProps> = {
  title: 'Components/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onchange: { action: 'onchange' },
    autoComplete: {
      control: 'select',
      options: ['off', 'on', 'username', 'email', 'current-password', 'new-password', 'tel', 'url'],
      description: 'Specifies the autocomplete behavior of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'datetime-local', 'time', 'month', 'week'],
      description: 'The type of input field',
    },
    min: {
      control: 'text',
      description:
        'Minimum value for date, time, datetime-local, number, or range inputs. Format: YYYY-MM-DD for date, YYYY-MM-DDTHH:mm for datetime-local, HH:mm for time',
    },
    max: {
      control: 'text',
      description:
        'Maximum value for date, time, datetime-local, number, or range inputs. Format: YYYY-MM-DD for date, YYYY-MM-DDTHH:mm for datetime-local, HH:mm for time',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
    required: true,
    autoComplete: 'username',
  },
};

// Email Input
export const EmailInput: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email address',
    type: 'email',
    required: true,
    autoComplete: 'email',
  },
};

// Password Input
export const PasswordInput: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    required: true,
    autoComplete: 'current-password',
  },
};

// Disabled Input
export const DisabledInput: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'You cannot type here',
    disabled: true,
    value: 'Read-only text',
  },
};

// Input with MaxLength & MinLength
export const LimitedLengthInput: Story = {
  args: {
    label: 'Nickname',
    placeholder: '3 to 10 characters',
    minLength: 3,
    maxLength: 10,
    required: true,
  },
};

// Input with Manual Error Display
export const ErrorInput: Story = {
  args: {
    label: 'With Error',
    placeholder: 'Something went wrong',
    hasError: true,
    errorMessage: 'This is a custom error message',
  },
};

// Input with Pre-filled Value
export const PrefilledInput: Story = {
  args: {
    label: 'Prefilled Input',
    placeholder: 'Edit me...',
    value: 'Hello, Storybook!',
  },
};

// DateTime Local Input
const DateTimeLocalInputComponent = (args: InputProps) => {
  const [dateValue, setDateValue] = useState('');

  return (
    <div className="max-w-md">
      <Input
        {...args}
        value={dateValue}
        onchange={(value) => {
          setDateValue(value);
          if (value) {
            const localDate = new Date(value);
            console.log('Selected date:', localDate);
          }
        }}
      />
      {dateValue && <p className="mt-2 text-xs text-gray-600">Selected: {new Date(dateValue).toLocaleString()}</p>}
    </div>
  );
};

export const DateTimeLocalInput: Story = {
  args: {
    label: 'Select Date and Time',
    placeholder: 'Select start date and time',
    type: 'datetime-local',
    required: true,
  },
  render: (args) => <DateTimeLocalInputComponent {...args} />,
};

// Date Input
const DateInputComponent = (args: InputProps) => {
  const [dateValue, setDateValue] = useState('');

  return (
    <div className="max-w-md">
      <Input
        {...args}
        value={dateValue}
        onchange={(value) => {
          setDateValue(value);
          if (value) {
            console.log('Selected date:', value);
          }
        }}
      />
      {dateValue && <p className="mt-2 text-xs text-gray-600">Selected: {new Date(dateValue).toLocaleDateString()}</p>}
    </div>
  );
};

export const DateInput: Story = {
  args: {
    label: 'Select Date',
    placeholder: 'Select date',
    type: 'date',
    required: true,
  },
  render: (args) => <DateInputComponent {...args} />,
};

// Time Input
const TimeInputComponent = (args: InputProps) => {
  const [timeValue, setTimeValue] = useState('');

  return (
    <div className="max-w-md">
      <Input
        {...args}
        value={timeValue}
        onchange={(value) => {
          setTimeValue(value);
          console.log('Selected time:', value);
        }}
      />
      {timeValue && <p className="mt-2 text-xs text-gray-600">Selected: {timeValue}</p>}
    </div>
  );
};

export const TimeInput: Story = {
  args: {
    label: 'Select Time',
    placeholder: 'Select time',
    type: 'time',
    required: true,
  },
  render: (args) => <TimeInputComponent {...args} />,
};

// DateTime with Min/Max Constraints
const DateTimeWithMinMaxComponent = (args: InputProps) => {
  const [dateValue, setDateValue] = useState('');

  // Calculate min and max dates
  const minDateTime = new Date();
  minDateTime.setHours(9, 0, 0, 0); // Today at 9 AM

  const maxDateTime = new Date();
  maxDateTime.setDate(maxDateTime.getDate() + 7);
  maxDateTime.setHours(17, 0, 0, 0); // 7 days from now at 5 PM

  const formatDateTimeForInput = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="max-w-md space-y-4">
      <Input
        {...args}
        value={dateValue}
        min={formatDateTimeForInput(minDateTime)}
        max={formatDateTimeForInput(maxDateTime)}
        onchange={(value) => {
          setDateValue(value);
          if (value) {
            console.log('Selected date:', new Date(value));
          }
        }}
      />
      {dateValue && (
        <div className="text-xs text-gray-600">
          <p className="font-semibold">Selected: {new Date(dateValue).toLocaleString()}</p>
        </div>
      )}
      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
        <p className="font-semibold mb-1">Restrictions:</p>
        <p>• Minimum: {minDateTime.toLocaleString()}</p>
        <p>• Maximum: {maxDateTime.toLocaleString()}</p>
        <p className="mt-2 text-blue-600 font-medium">✨ Smart Time Adjustment:</p>
        <p className="mt-1">If you select the minimum date, times before 9:00 AM will be auto-adjusted to 9:00 AM</p>
        <p className="mt-1">If you select the maximum date, times after 5:00 PM will be auto-adjusted to 5:00 PM</p>
      </div>
    </div>
  );
};

export const DateTimeWithMinMax: Story = {
  args: {
    label: 'Schedule Meeting (Next 7 Days, 9 AM - 5 PM)',
    placeholder: 'Select date and time',
    type: 'datetime-local',
    required: true,
  },
  render: (args) => <DateTimeWithMinMaxComponent {...args} />,
};

// Date with Min/Max Constraints
const DateWithMinMaxComponent = (args: InputProps) => {
  const [dateValue, setDateValue] = useState('');

  // Calculate first and last day of current month
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const formatDateForInput = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="max-w-md space-y-4">
      <Input
        {...args}
        value={dateValue}
        min={formatDateForInput(firstDay)}
        max={formatDateForInput(lastDay)}
        onchange={(value) => {
          setDateValue(value);
          console.log('Selected date:', value);
        }}
      />
      {dateValue && (
        <p className="text-xs text-gray-600 font-semibold">
          Selected: {new Date(dateValue + 'T00:00:00').toLocaleDateString()}
        </p>
      )}
      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
        <p className="font-semibold mb-1">Restrictions:</p>
        <p>• Minimum: {firstDay.toLocaleDateString()}</p>
        <p>• Maximum: {lastDay.toLocaleDateString()}</p>
        <p className="mt-2 italic">Only dates in the current month are selectable</p>
      </div>
    </div>
  );
};

export const DateWithMinMax: Story = {
  args: {
    label: 'Select Date (Current Month Only)',
    placeholder: 'Select date',
    type: 'date',
    required: true,
  },
  render: (args) => <DateWithMinMaxComponent {...args} />,
};

// Time with Min/Max Constraints
const TimeWithMinMaxComponent = (args: InputProps) => {
  const [timeValue, setTimeValue] = useState('');

  return (
    <div className="max-w-md space-y-4">
      <Input
        {...args}
        value={timeValue}
        min="09:00"
        max="17:00"
        onchange={(value) => {
          setTimeValue(value);
          console.log('Selected time:', value);
        }}
      />
      {timeValue && <p className="text-xs text-gray-600 font-semibold">Selected: {timeValue}</p>}
      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
        <p className="font-semibold mb-1">Restrictions:</p>
        <p>• Minimum: 09:00 (9 AM)</p>
        <p>• Maximum: 17:00 (5 PM)</p>
        <p className="mt-2 italic">Only business hours are selectable</p>
      </div>
    </div>
  );
};

export const TimeWithMinMax: Story = {
  args: {
    label: 'Select Time (Business Hours: 9 AM - 5 PM)',
    placeholder: 'Select time',
    type: 'time',
    required: true,
  },
  render: (args) => <TimeWithMinMaxComponent {...args} />,
};

// DateTime Auto-Adjustment Demo
const DateTimeAutoAdjustmentComponent = (args: InputProps) => {
  const [dateValue, setDateValue] = useState('');
  const [adjustmentLog, setAdjustmentLog] = useState<string[]>([]);

  const minDateTime = new Date();
  minDateTime.setDate(14);
  minDateTime.setMonth(9);
  minDateTime.setFullYear(2024);
  minDateTime.setHours(14, 0, 0, 0);

  const maxDateTime = new Date();
  maxDateTime.setDate(16);
  maxDateTime.setMonth(9);
  maxDateTime.setFullYear(2024);
  maxDateTime.setHours(10, 0, 0, 0);

  const formatDateTimeForInput = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const minStr = formatDateTimeForInput(minDateTime);
  const maxStr = formatDateTimeForInput(maxDateTime);

  return (
    <div className="max-w-lg space-y-4">
      <Input
        {...args}
        value={dateValue}
        min={minStr}
        max={maxStr}
        onchange={(value) => {
          const prevValue = dateValue;
          setDateValue(value);

          if (value && prevValue && value !== prevValue) {
            const log = `Changed from ${new Date(prevValue).toLocaleString()} to ${new Date(value).toLocaleString()}`;
            setAdjustmentLog((prev) => [...prev, log]);
          } else if (value && !prevValue) {
            setAdjustmentLog((prev) => [...prev, `Initial selection: ${new Date(value).toLocaleString()}`]);
          }
        }}
      />

      {adjustmentLog.length > 0 && (
        <div className="text-xs bg-gray-50 p-3 rounded border border-gray-200 max-h-32 overflow-y-auto">
          <p className="font-semibold text-gray-800 mb-2">📝 Activity Log:</p>
          {adjustmentLog.map((log, idx) => (
            <p key={idx} className="text-gray-600 text-[10px] mb-1">
              • {log}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export const DateTimeAutoAdjustment: Story = {
  args: {
    label: 'Meeting Schedule with Auto-Adjustment',
    placeholder: 'Select date and time',
    type: 'datetime-local',
    required: true,
  },
  render: (args) => <DateTimeAutoAdjustmentComponent {...args} />,
};
