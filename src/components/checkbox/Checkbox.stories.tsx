import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { action } from '@storybook/addon-actions';

const checkboxMeta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable checkbox component with checked and disabled states.

## Features
- Checked and unchecked states
- Disabled state support
- Customizable label
- Accessible design
- Custom styling support

## Usage
\`\`\`tsx
import { Checkbox } from './Checkbox';

<Checkbox
  checked={isChecked}
  label="Accept terms and conditions"
  onChange={(checked) => setIsChecked(checked)}
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
      description: 'Checkbox state (checked or unchecked)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox when true',
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to the checkbox',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional CSS classes for the label',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when checkbox state changes',
    },
  },
};

export default checkboxMeta;
type CheckboxStory = StoryObj<typeof Checkbox>;

const handleCheckboxChange = () => {
  action('checkbox changed');
};

export const Checked: CheckboxStory = {
  args: {
    checked: true,
    label: 'Accept terms and conditions',
    onChange: handleCheckboxChange,
  },
};

export const Unchecked: CheckboxStory = {
  args: {
    checked: false,
    label: 'Subscribe to newsletter',
    onChange: handleCheckboxChange,
  },
};

export const Disabled: CheckboxStory = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled option',
    onChange: handleCheckboxChange,
  },
};

export const DisabledChecked: CheckboxStory = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checked option',
    onChange: handleCheckboxChange,
  },
};

export const WithoutLabel: CheckboxStory = {
  args: {
    checked: false,
    onChange: handleCheckboxChange,
  },
};

export const CustomStyling: CheckboxStory = {
  args: {
    checked: false,
    label: 'Custom styled checkbox',
    labelClassName: 'text-blue-600 font-semibold',
    onChange: handleCheckboxChange,
  },
};

export const TermsAndConditions: CheckboxStory = {
  args: {
    checked: false,
    label: 'I agree to the Terms and Conditions and Privacy Policy',
    onChange: handleCheckboxChange,
  },
};

export const NewsletterSubscription: CheckboxStory = {
  args: {
    checked: true,
    label: 'Subscribe to our newsletter for updates and promotions',
    onChange: handleCheckboxChange,
  },
};

export const MarketingPreferences: CheckboxStory = {
  args: {
    checked: false,
    label: 'Allow marketing communications via email',
    onChange: handleCheckboxChange,
  },
};

export const AccessibilityExample: CheckboxStory = {
  args: {
    checked: false,
    label: 'Enable accessibility features',
    onChange: handleCheckboxChange,
  },
  parameters: {
    docs: {
      description: {
        story: 'This checkbox demonstrates proper accessibility with ARIA labels and keyboard navigation support.',
      },
    },
  },
};
