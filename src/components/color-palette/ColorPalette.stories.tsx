import { Meta, StoryFn } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

export default {
  title: 'Design System/Color Palette',
  component: ColorPalette,
} as Meta<typeof ColorPalette>;

export const Default: StoryFn<typeof ColorPalette> = (args) => <ColorPalette {...args} />;

Default.args = {
  categories: [
    {
      title: 'CTAs',
      description: 'These colors are used for different states of CTA buttons',
      colors: [
        { name: 'Primary', hex: '#0065C1' },
        { name: 'Secondary', hex: '#0185E4' },
        { name: 'Danger', hex: '#EA5455' },
      ],
    },
    {
      title: 'Typography',
      description: 'These colors are used for typography',
      colors: [
        {
          hex: '#0185E4',
        },
        {
          hex: '#5E5873',
        },
        {
          hex: '#6E6B7B',
        },
        { hex: '#9E9E9E' },
        { name: 'Invalid', hex: '#EA5455' },
        { name: 'Valid', hex: '#28C76F' },
      ],
    },
    {
      title: 'Separators',
      colors: [
        { hex: '#EBE9F1' },
        { hex: '#28c76f' }, // TODO: layer fix this
      ],
    },
    {
      title: 'Status',
      description: 'These colors are used for status across the platform',
      colors: [
        { hex: '#FFD600' },
        { hex: '#FF9F43' },
        { hex: '#FF6D00' },
        { hex: '#EA5455' },
        { hex: '#B71C1C' },
        { hex: '#0D6EFD' },
        { hex: '#B843FF' },
        { hex: '#28C76F' },
        { hex: '#607D8B' },
        { hex: '#E1F0FC' },
        { hex: '#0D6EFD' },
        { hex: '#00B0FF' },
        { hex: '#00B8D4' },
        { hex: '#46D8D5' },
      ],
    },
    {
      title: 'Logo',
      description: 'These colors are used in the Trumio logo',
      colors: [{ hex: '#00B2FF' }, { hex: '#23DFEB' }, { hex: '#0065C1' }],
    },
    {
      title: 'Shadow',
      description: 'These colors are used for shadow effects',
      colors: [{ name: 'Shadow', hex: '#0000000D' }],
    },
  ],
};
