import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardWithRadio } from './CardWithRadio';

const meta: Meta<typeof CardWithRadio> = {
  title: 'Components/CardWithRadio',
  component: CardWithRadio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardWithRadio>;

export const Default: Story = {
  args: {
    title: 'I will not be billing',
    description: 'I will be operating the business only and will not be billing to Clients.',
    selected: false,
    onClick: () => console.log('Default clicked'),
  },
};

export const Selected: Story = {
  args: {
    title: 'I will be billing',
    description: 'I will be part of the delivery team too and will be billing to Clients.',
    selected: true,
    onClick: () => console.log('Selected clicked'),
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(false);
    return (
      <CardWithRadio
        title="Interactive Option"
        description="Click to toggle selected state."
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
    );
  },
};
