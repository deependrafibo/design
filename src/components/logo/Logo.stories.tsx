import { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays the Trumio logo and name in a row with customizable size and color.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logoWidth: { control: 'number', description: 'Width of the Logo' },
    logoHeight: { control: 'number', description: 'Height of the Logo' },
    nameWidth: { control: 'number', description: 'Width of the Name' },
    nameHeight: { control: 'number', description: 'Height of the Name' },
    color: { control: 'color', description: 'Color of the Logo and Name' },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    logoWidth: 150,
    logoHeight: 150,
    nameWidth: 325,
    nameHeight: 545,
    className: 'flex items-center space-x-2 gap-2',
    logoUpperColor: '#00B2FF',
    logoCenterColor: '#15D1F2',
    logoLowerColor: '#23DFEB',
    color: 'black',
  },
};

export const Small: LogoStory = {
  args: {
    logoWidth: 100,
    logoHeight: 100,
    className: 'flex items-center justify-center space-x-2 gap-2',
    logoUpperColor: '#00B2FF',
    logoCenterColor: '#15D1F2',
    logoLowerColor: '#23DFEB',
  },
};

export const Large: LogoStory = {
  args: {
    logoWidth: 250,
    logoHeight: 250,
    nameWidth: 450,
    nameHeight: 700,
    className: 'flex items-center justify-center space-x-2 gap-2',
    logoUpperColor: '#00B2FF',
    logoCenterColor: '#15D1F2',
    logoLowerColor: '#23DFEB',
    color: 'black',
  },
};

export const name: LogoStory = {
  args: {
    nameWidth: 450,
    nameHeight: 700,
    className: 'flex items-center justify-center space-x-2 gap-2',
    color: 'red',
  },
};

export const CustomColor: LogoStory = {
  args: {
    logoWidth: 150,
    logoHeight: 150,
    nameWidth: 325,
    nameHeight: 545,
    className: 'flex items-center justify-center space-x-2 gap-2 ',
    logoUpperColor: '#00B2FF',
    logoCenterColor: '#15D1F2',
    logoLowerColor: '#23DFEB',
    color: '#0065C1',
  },
};

export const CustomColorWithCustomClass: LogoStory = {
  args: {
    logoWidth: 150,
    logoHeight: 150,
    nameWidth: 150,
    nameHeight: 80,
    className: 'flex flex-col items-center justify-center ',
    logoUpperColor: '#00B2FF',
    logoCenterColor: '#15D1F2',
    logoLowerColor: '#23DFEB',
    color: '#0065C1',
  },
};
