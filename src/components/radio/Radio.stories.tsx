import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { action } from '@storybook/addon-actions';

const radioMeta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable radio button component with checked and disabled states.

## Features
- Checked and unchecked states
- Disabled state support
- Customizable label
- Accessible design
- Custom styling support
- Group selection support

## Usage
\`\`\`tsx
import { Radio } from './Radio';

<Radio
  checked={isSelected}
  label="Option 1"
  onChange={(checked) => setIsSelected(checked)}
/>
\`\`\`

## Radio Group Example
\`\`\`tsx
const [selectedOption, setSelectedOption] = useState('option1');

<div>
  <Radio
    checked={selectedOption === 'option1'}
    label="Option 1"
    onChange={() => setSelectedOption('option1')}
  />
  <Radio
    checked={selectedOption === 'option2'}
    label="Option 2"
    onChange={() => setSelectedOption('option2')}
  />
</div>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Radio button state (checked or unchecked)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button when true',
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to the radio button',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the radio button container',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional CSS classes for the label',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when radio button state changes',
    },
  },
};

export default radioMeta;

type RadioStory = StoryObj<typeof Radio>;

const handleRadioChange = () => {
  action('radio changed');
};

export const RadioChecked: RadioStory = {
  args: {
    checked: true,
    onChange: handleRadioChange,
    label: 'Option 1',
  },
};

export const RadioUnchecked: RadioStory = {
  args: {
    checked: false,
    onChange: handleRadioChange,
    label: 'Option 2',
  },
};

export const Disabled: RadioStory = {
  args: {
    checked: false,
    disabled: true,
    onChange: handleRadioChange,
    label: 'Disabled option',
  },
};

export const DisabledChecked: RadioStory = {
  args: {
    checked: true,
    disabled: true,
    onChange: handleRadioChange,
    label: 'Disabled checked option',
  },
};

export const WithoutLabel: RadioStory = {
  args: {
    checked: false,
    onChange: handleRadioChange,
  },
};

export const CustomStyling: RadioStory = {
  args: {
    checked: false,
    label: 'Custom styled radio',
    className: 'p-4 border border-gray-300 rounded-lg',
    labelClassName: 'text-blue-600 font-semibold',
    onChange: handleRadioChange,
  },
};

export const PaymentMethod: RadioStory = {
  args: {
    checked: true,
    label: 'Credit Card',
    onChange: handleRadioChange,
  },
};

export const ShippingOption: RadioStory = {
  args: {
    checked: false,
    label: 'Express Shipping (2-3 business days)',
    onChange: handleRadioChange,
  },
};

export const NotificationPreference: RadioStory = {
  args: {
    checked: false,
    label: 'Email notifications only',
    onChange: handleRadioChange,
  },
};

export const SizeSelection: RadioStory = {
  args: {
    checked: false,
    label: 'Large',
    onChange: handleRadioChange,
  },
};

export const AccessibilityExample: RadioStory = {
  args: {
    checked: false,
    label: 'High contrast mode',
    onChange: handleRadioChange,
  },
  parameters: {
    docs: {
      description: {
        story: 'This radio button demonstrates proper accessibility with ARIA labels and keyboard navigation support.',
      },
    },
  },
};

// Radio Group Example
export const RadioGroup: RadioStory = {
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('option1');

    return (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold mb-3">Select your preference:</h3>
        <Radio checked={selectedOption === 'option1'} label="Option 1" onChange={() => setSelectedOption('option1')} />
        <Radio checked={selectedOption === 'option2'} label="Option 2" onChange={() => setSelectedOption('option2')} />
        <Radio checked={selectedOption === 'option3'} label="Option 3" onChange={() => setSelectedOption('option3')} />
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-sm">Selected: {selectedOption}</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows how to create a radio group where only one option can be selected at a time.',
      },
    },
  },
};
