import { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import { useState } from 'react';
const meta: Meta<typeof Tab> = {
  title: 'Components/Tabs',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile tab component that supports icons, content switching, and customizable styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['withIcon', 'withoutIcon'],
    },
    className: {
      control: 'text',
    },
    underlineColor: {
      control: 'text',
    },
    activeTextColor: {
      control: 'text',
    },
    inactiveTextColor: {
      control: 'text',
    },
    activeBackgroundColor: {
      control: 'text',
    },
    activeTab: { table: { disable: true } },
    defaultActiveTab: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const WithIcons: Story = {
  args: {
    tabs: [
      { name: 'Account', iconName: 'home' },
      { name: 'Profile', iconName: 'user' },
      { name: 'Portfolio', iconName: 'briefcase' },
      { name: 'Education', iconName: 'graduation' },
    ],
    variant: 'withIcon',
  },
};

export const WithoutIcons: Story = {
  args: {
    tabs: [
      { name: 'Favorite Talent' },
      { name: 'Favorite Teams' },
      { name: 'Matched Teams' },
      { name: 'Matched Talent' },
    ],
    variant: 'withoutIcon',
  },
};

export const WithContent: Story = {
  args: {
    tabs: [{ name: 'Personal Info' }, { name: 'Education' }, { name: 'Experience' }, { name: 'Skills' }],
    variant: 'withoutIcon',
  },
  render: function Story(args) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const panels = [
      <div className="p-4 border rounded text-neutral-500" key="0">
        <h3 className="text-lg font-medium">Personal Information</h3>
        <p>This section contains personal details.</p>
      </div>,
      <div className="p-4 border rounded text-neutral-500" key="1">
        <h3 className="text-lg font-medium">Education History</h3>
        <p>Your educational background information goes here.</p>
      </div>,
      <div className="p-4 border rounded text-neutral-500" key="2">
        <h3 className="text-lg font-medium">Work Experience</h3>
        <p>Details about your previous work experience.</p>
      </div>,
      <div className="p-4 border rounded text-neutral-500" key="3">
        <h3 className="text-lg font-medium">Skills & Expertise</h3>
        <p>List of your professional skills and competencies.</p>
      </div>,
    ];

    return (
      <Tab {...args} activeTab={activeTab} onTabChange={setActiveTab}>
        {panels}
      </Tab>
    );
  },
};

export const CustomStyling: Story = {
  args: {
    tabs: [{ name: 'Daily' }, { name: 'Weekly' }, { name: 'Monthly' }, { name: 'Yearly' }],
    variant: 'withoutIcon',
    className: 'justify-start',
    underlineColor: 'bg-purple-500',
    activeTextColor: 'text-purple-600',
    inactiveTextColor: 'text-gray-500',
    defaultActiveTab: 3,
    activeBackgroundColor: 'bg-purple-100',
  },
};
