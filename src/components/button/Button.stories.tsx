import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button';
import { action } from '@storybook/addon-actions';
import '../../tailwindcss/theme.css';
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component with various styles and icons.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'text', 'errorPrimary', 'errorOutline', 'errorText'],
      description: 'Defines the button style',
    },
    icon: {
      control: 'select',
      options: ['chevron', 'download'],
      description: 'Icon displayed in the button',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if set to true',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner instead of button content',
    },

    loaderSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the loading spinner',
    },

    loaderColor: {
      control: 'text',
      description: 'Color of the spinner (Tailwind color string, e.g., white, black)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const onClick = () => {
  action('Button Clicked')();
};
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button Text',
    onClick: onClick,
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Button Text',
    onClick: onClick,
    icon: 'chevron',
    iconPosition: 'right',
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Button Text',
    onClick: onClick,
    icon: 'download',
    iconPosition: 'left',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: 'Button Text',
    onClick: onClick,
    disabled: true,
  },
};

export const ErrorPrimaryButton: Story = {
  args: {
    variant: 'errorPrimary',
    onClick: onClick,
    children: 'Button Text',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    onClick: onClick,
    children: 'Button Text',
  },
};

export const OutlineWithRightIcon: Story = {
  args: {
    variant: 'outline',
    children: 'Button Text',
    onClick: onClick,
    icon: 'chevron',
    iconPosition: 'right',
  },
};

export const OutlineWithLeftIcon: Story = {
  args: {
    variant: 'outline',
    children: 'Button Text',
    onClick: onClick,
    icon: 'download',
    iconPosition: 'left',
  },
};

export const OutlineDisabled: Story = {
  args: {
    variant: 'outline',
    children: 'Button Text',
    onClick: onClick,
    disabled: true,
  },
};

export const ErrorOutlineButton: Story = {
  args: {
    variant: 'errorOutline',
    children: 'Button Text',
    onClick: onClick,
  },
};

export const TextButton: Story = {
  args: {
    variant: 'text',
    onClick: onClick,
    children: 'Button Text',
  },
};

export const TextWithRightIcon: Story = {
  args: {
    variant: 'text',
    children: 'Button Text',
    onClick: onClick,
    icon: 'arrowRight',
    iconPosition: 'right',
  },
};

export const TextWithLeftIcon: Story = {
  args: {
    variant: 'text',
    children: 'Button Text',
    onClick: onClick,
    icon: 'arrowLeft',
    iconPosition: 'left',
  },
};

export const TextDisabled: Story = {
  args: {
    variant: 'text',
    children: 'Button Text',
    onClick: onClick,
    disabled: true,
  },
};

export const ErrorTextButton: Story = {
  args: {
    variant: 'errorText',
    children: 'Button Text',
    onClick: onClick,
  },
};

export const PrimaryLoading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading...',
    onClick: onClick,
    loading: true,
    loaderSize: 'small',
    loaderColor: 'white',
  },
};

export const OutlineLoading: Story = {
  args: {
    variant: 'outline',
    children: 'Loading...',
    onClick: onClick,
    loading: true,
    loaderSize: 'medium',
    loaderColor: '#0185E4',
  },
};

export const TextLoading: Story = {
  args: {
    variant: 'text',
    children: 'Loading...',
    onClick: onClick,
    loading: true,
    loaderSize: 'large',
    loaderColor: '#0185E4',
  },
};

export const ErrorOutlineLoading: Story = {
  args: {
    variant: 'errorOutline',
    children: 'Please Wait...',
    onClick: onClick,
    loading: true,
    loaderSize: 'medium',
    loaderColor: '#FF0000',
  },
};
