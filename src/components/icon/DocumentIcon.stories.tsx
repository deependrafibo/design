import type { Meta, StoryObj } from '@storybook/react';
import { CustomDocumentIconProps } from './types';
import { CustomDocumentPSD } from '../../assets/icons/document/CustomDocumentPSD';
import { CustomDocumentSVG } from '../../assets/icons/document/CustomDocumentSVG';
import { CustomDocumentTxt } from '../../assets/icons/document/CustomDocumentTxt';
import { CustomDocumentXls } from '../../assets/icons/document/CustomDocumentXls';
import { CustomDocumentZip } from '../../assets/icons/document/CustomDocumentZip';
import { CustomDocumentAi } from '../../assets/icons/document/CustomDocumentAi';
import { CustomDocumentAvi } from '../../assets/icons/document/CustomDocumentAvi';
import { CustomDocumentMkv } from '../../assets/icons/document/CustomDocumentMkv';
import { CustomDocumentMP3 } from '../../assets/icons/document/CustomDocumentMP3';
import { CustomDocumentPdf } from '../../assets/icons/document/CustomDocumentPdf';
import { CustomDocumentPpt } from '../../assets/icons/document/CustomDocumentPpt';
import { CustomDocumentDoc } from '../../assets/icons/document/CustomDocumentDoc';
import { CustomDocumentGif } from '../../assets/icons/document/CustomDocumentGif';
import { CustomDocumentJpg } from '../../assets/icons/document/CustomDocumentJpg';

const meta: Meta<typeof CustomDocumentPSD> = {
  title: 'Icons/Document',
  component: CustomDocumentPSD,
  argTypes: {
    width: {
      control: 'number',
      description: 'The width of the icon (default: 24)',
    },
    height: {
      control: 'number',
      description: 'The height of the icon (default: 24)',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A collection of customizable icons with various styles and types, including PSD and SVG document icons.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CustomDocumentIconProps>;

export const CustomDocumentPSDIcon: Story = {
  render: (args) => <CustomDocumentPSD {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentSVGIcon: Story = {
  render: (args) => <CustomDocumentSVG {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentTxtIcon: Story = {
  render: (args) => <CustomDocumentTxt {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentXlsIcon: Story = {
  render: (args) => <CustomDocumentXls {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentZipIcon: Story = {
  render: (args) => <CustomDocumentZip {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};
export const CustomDocumentAiIcon: Story = {
  render: (args) => <CustomDocumentAi {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentAviIcon: Story = {
  render: (args) => <CustomDocumentAvi {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentMkvIcon: Story = {
  render: (args) => <CustomDocumentMkv {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentMP3Icon: Story = {
  render: (args) => <CustomDocumentMP3 {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};

export const CustomDocumentPdfIcon: Story = {
  render: (args) => <CustomDocumentPdf {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};
export const CustomDocumentPptIcon: Story = {
  render: (args) => <CustomDocumentPpt {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};
export const CustomDocumentDocIcon: Story = {
  render: (args) => <CustomDocumentDoc {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};
export const CustomDocumentGifIcon: Story = {
  render: (args) => <CustomDocumentGif {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};
export const CustomDocumentJpgIcon: Story = {
  render: (args) => <CustomDocumentJpg {...args} />,
  args: {
    width: 53,
    height: 48,
  },
};
