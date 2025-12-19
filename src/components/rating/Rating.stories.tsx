import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable rating component for displaying and collecting user ratings.

## Features
- Interactive star ratings
- Read-only mode support
- Customizable star count
- Hover effects
- Accessible design
- Custom styling support

## Usage
\`\`\`tsx
import { Rating } from './Rating';

<Rating
  value={3.5}
  maxValue={5}
  onChange={(rating) => setRating(rating)}
  readOnly={false}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Current rating value',
    },
    maxValue: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum rating value (number of stars)',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when rating value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

const handleRatingChange = () => {
  action('rating changed');
};

export const Default: Story = {
  args: {
    rating: 3.5,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const ZeroRating: Story = {
  args: {
    rating: 0,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const ReadOnly: Story = {
  args: {
    rating: 4,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const Disabled: Story = {
  args: {
    rating: 2.5,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const CustomMaxValue: Story = {
  args: {
    rating: 7,
    maxValue: 10,
    onChange: handleRatingChange,
  },
};

export const SmallSize: Story = {
  args: {
    rating: 3,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const LargeSize: Story = {
  args: {
    rating: 4,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const CustomStyling: Story = {
  args: {
    rating: 3.5,
    maxValue: 5,
    onChange: handleRatingChange,
  },
};

export const ProductRating: Story = {
  args: {
    rating: 4.2,
    maxValue: 5,
    onChange: handleRatingChange,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a read-only product rating display.',
      },
    },
  },
};

export const ReviewForm: Story = {
  args: {
    rating: 0,
    maxValue: 5,
    onChange: handleRatingChange,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of an interactive rating for a review form.',
      },
    },
  },
};

export const AccessibilityExample: Story = {
  args: {
    rating: 3,
    maxValue: 5,
    onChange: handleRatingChange,
  },
  parameters: {
    docs: {
      description: {
        story: 'This rating demonstrates proper accessibility with ARIA labels and keyboard navigation support.',
      },
    },
  },
};
