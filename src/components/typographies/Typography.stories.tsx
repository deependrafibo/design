import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',

      options: ['28', '26', '24', '20', '18', '16', '14', '12'],

      description: 'Font size in pixels',
      table: {
        defaultValue: { summary: '16' },
      },
    },
    variant: {
      control: 'select',
      options: ['semibold', 'medium', 'regular'],
      description: 'Font weight variant',
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
    tag: {
      control: 'select',

      options: ['div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b1', 'b2', 'b3'],

      description: 'HTML element to render',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    size: '16',
    variant: 'regular',
    tag: 'p',
    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
  },
};

export const Heading1: Story = {
  args: {
    tag: 'h1',
    children: 'Heading 1 | 28px Semi Bold',
    className: 'font-bold ',
  },
};

export const Heading2: Story = {
  args: {
    tag: 'h2',
    children: 'Heading 2 | 24px Medium',
  },
};

export const Heading3: Story = {
  args: {
    tag: 'h3',
    children: 'Heading 3 | 20px Regular',
  },
};

export const BodyText: Story = {
  args: {
    tag: 'p',
    className: 'text-gray-500 font-bold underline',

    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
  },
};

export const SmallText: Story = {
  args: {
    tag: 'p',
    className: 'text-gray-500 font-bold underline',

    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
  },
};

export const CustomStyling: Story = {
  args: {
    tag: 'span',
    className: 'text-blue-600 bg-blue-50 p-4 rounded',
    children: 'This typography has custom styling applied through the className prop.',
  },
};

export const TypographyComponents: Story = {
  render: () => {
    const sizes: ('28' | '26' | '24' | '20' | '18')[] = ['28', '26', '24', '20', '18'];

    const variants: ('semibold' | 'medium' | 'regular')[] = ['semibold', 'medium', 'regular'];

    return (
      <div className="space-y-8 max-w-3xl">
        {sizes.map((size) => (
          <div key={size} className="p-4 bg-white rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">{size}px</h3>
            <div className="space-y-4">
              {variants.map((variant) => (
                <div key={`${size}-${variant}`} className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">
                    {variant === 'semibold' ? 'Semi Bold' : variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </div>
                  <Typography size={size} variant={variant} tag="p">
                    Trumio's mission is to empower university students worldwide to become fully prepared for the
                    upcoming future of work.
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Body1Default: Story = {
  args: {
    tag: 'b1',
    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
  },
};

export const Body1Custom: Story = {
  args: {
    tag: 'b1',
    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
    className: 'text-blue-600 font-medium',
  },
};

export const Body2Default: Story = {
  args: {
    tag: 'b2',
    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
  },
};

export const Body3Default: Story = {
  args: {
    tag: 'b3',
    children:
      "Trumio's mission is to empower university students worldwide to become fully prepared for the upcoming future of work.",
  },
};

export const BodyTypographyShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4 flex gap-4 justify-between">
        <Typography tag="b1">B1 | 16px | Semibold</Typography>
        <Typography tag="b1">B1 - Custom Style with blue color and medium weight</Typography>
      </div>

      <div className="space-y-4 flex gap-4 justify-between">
        <Typography tag="b2">B2 | 14px | Semibold</Typography>
        <Typography tag="b2">B2 - Custom Style with green color and bold weight</Typography>
      </div>

      <div className="space-y-4 flex gap-4 justify-between">
        <Typography tag="b3">B3 | 12px | Semibold</Typography>
        <Typography tag="b3">B3 - Custom Style with purple color and italic style</Typography>
      </div>
    </div>
  ),
};
