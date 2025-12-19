import { Meta, StoryObj } from '@storybook/react';
import { AccordionType } from './types';
import { CustomAccordion } from './CustomAccordion';
import { sections } from './mock';

const meta: Meta<typeof CustomAccordion> = {
  title: 'Components/CustomAccordion',
  component: CustomAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dynamic Accordion component supporting both single and multiple item modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Defines whether the Accordion is in single or multiple mode.',
      options: Object.values(AccordionType),
    },
    collapsible: {
      control: 'boolean',
      description: 'Determines whether the accordion is collapsible (only one section open at a time in single mode).',
    },
    itemClassName: {
      control: 'text',
      description: 'Custom class name for the accordion items.',
    },
    triggerClassName: {
      control: 'text',
      description: 'Custom class name for the accordion triggers (headers).',
    },
    contentClassName: {
      control: 'text',
      description: 'Custom class name for the content section inside the accordion.',
    },
    section: {
      control: 'object',
      description: 'A single section configuration (used when AccordionType is SINGLE).',
      table: {
        type: {
          summary: '{ value: string; trigger: React.ReactNode; content: React.ReactNode; }',
        },
      },
    },
    sections: {
      control: 'object',
      description: 'Array of sections for the Accordion (used when AccordionType is multiple).',
      table: {
        type: {
          summary: '{ value: string; trigger: React.ReactNode; content: React.ReactNode; }[]',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomAccordion>;

export const SingleAccordion: Story = {
  args: {
    type: AccordionType.SINGLE,
    section: sections[0],
    collapsible: true,
  },
};

export const MultipleAccordion: Story = {
  args: {
    type: AccordionType.MULTIPLE,
    sections: sections,
  },
};
