import { Meta, StoryObj } from '@storybook/react';
import { OrgLogo } from './OrgLogo';

const meta: Meta<typeof OrgLogo> = {
  title: 'Components/OrgLogo',
  component: OrgLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    imageUri: {
      control: 'text',
      description:
        'URL of the organization logo image. When provided, this will be displayed instead of the default SVG logo.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OrgLogo>;

export const Default: Story = {
  args: {
    showText: true,
    size: 'md',
    showPoweredBy: true,
    orgName: 'Acme Corp',
    poweredByText: 'Trumio',
  },
};

export const IconOnly: Story = {
  args: {
    showText: false,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithoutPoweredBy: Story = {
  args: {
    showPoweredBy: false,
  },
};

export const CustomOrg: Story = {
  args: {
    orgName: 'TechCorp',
    poweredByText: 'PowerPlatform',
  },
};

export const CustomLogo: Story = {
  args: {
    orgName: 'TechCorp',
    logoSvg: (
      <svg width="21" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22H22" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="#4CAF50" strokeWidth="2" />
      </svg>
    ),
  },
};

export const WithImageLogo: Story = {
  args: {
    orgName: 'LTIMindtree',
    imageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    showText: false,
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Displays only the LTIMindtree logo without any text. Useful for compact layouts or when the logo is self-explanatory.',
      },
    },
  },
};

export const WithImageLogoAndText: Story = {
  args: {
    orgName: 'LTIMindtree',
    imageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    showText: true,
    showPoweredBy: true,
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Displays the LTIMindtree logo with the organization name and "Powered by" text. This is the most common use case.',
      },
    },
  },
};

export const WithImageLogoAndPoweredBy: Story = {
  args: {
    orgName: 'LTIMindtree',
    imageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    showText: false,
    showPoweredBy: true,
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Displays the LTIMindtree logo with only the "Powered by" text, without the organization name. Useful when the logo already contains the organization name.',
      },
    },
  },
};

export const LTIMindtreeLogo: Story = {
  args: {
    orgName: 'LTIMindtree',
    imageUri:
      'https://ltim-ft-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc?logo_type=FULL',
    showText: true,
    showPoweredBy: true,
    size: 'lg',
    imageClassName: 'max-w-[200px]',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A dedicated story showcasing the LTIMindtree logo with organization name and powered by text. This demonstrates how the component handles real-world logo images.',
      },
    },
  },
};
