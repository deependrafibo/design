import type { Meta, StoryObj } from '@storybook/react';
import { Grade } from './Grade';

const meta: Meta<typeof Grade> = {
  title: 'Components/Grade',
  component: Grade,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['A', 'B', 'C', 'D', 'E'],
      description: 'Grade value (A-E)',
    },
    size: {
      control: { type: 'number', min: 14, max: 40, step: 2 },
      description: 'Size of the grade circle in pixels (default: 28px, range: 14-40px)',
      defaultValue: 28,
    },
    textSize: {
      control: { type: 'number', min: 12, max: 24, step: 1 },
      description: 'Size of the grade text in pixels (default: 18px)',
      defaultValue: 18,
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler. When provided, the grade becomes clickable and shows a pointer cursor.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grade>;

// Basic usage examples
export const Basic: Story = {
  args: {
    value: 'A',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage without click handler. The grade is displayed in a circle without any wrapper.',
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    value: 'A',
    onClick: () => console.log('Grade clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grade with click handler. Shows a pointer cursor and is wrapped in a container.',
      },
    },
  },
};

// Grade variations
export const GradeA: Story = {
  args: {
    value: 'A',
    size: 28,
    textSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grade A with cyan color (#00BCD4)',
      },
    },
  },
};

export const GradeB: Story = {
  args: {
    value: 'B',
    size: 28,
    textSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grade B with green color (#28C76F)',
      },
    },
  },
};

export const GradeC: Story = {
  args: {
    value: 'C',
    size: 28,
    textSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grade C with yellow color (#FBC02D)',
      },
    },
  },
};

export const GradeD: Story = {
  args: {
    value: 'D',
    size: 28,
    textSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grade D with orange color (#FF9F43)',
      },
    },
  },
};

export const GradeE: Story = {
  args: {
    value: 'E',
    size: 28,
    textSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grade E with red color (#EA5455)',
      },
    },
  },
};

// Size variations
export const Small: Story = {
  args: {
    value: 'A',
    size: 14,
    textSize: 12,
  },
  parameters: {
    docs: {
      description: {
        story: 'Smallest recommended size (14px)',
      },
    },
  },
};

export const Default: Story = {
  args: {
    value: 'A',
    size: 28,
    textSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size (28px)',
      },
    },
  },
};

export const Large: Story = {
  args: {
    value: 'A',
    size: 40,
    textSize: 24,
  },
  parameters: {
    docs: {
      description: {
        story: 'Largest recommended size (40px)',
      },
    },
  },
};
