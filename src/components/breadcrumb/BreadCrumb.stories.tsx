import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './BreadCrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Breadcrumb component for showing hierarchical navigation. Supports icons, custom separators, and auto-collapsing for long paths.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: '', iconName: 'home', href: '/' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Open listing', href: '/open-listing' },
      { label: 'Project Details', href: '/project-details' },
      { label: 'View Bid', href: '/view-bid' },
    ],
  },
};

export const WithOnlyTextLabels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Section', href: '/section' },
      { label: 'Sub-section', href: '/section/sub' },
      { label: 'Article', href: '/section/sub/article' },
    ],
  },
};

export const WithIconsOnlyAtStart: Story = {
  args: {
    items: [
      { label: '', iconName: 'home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Smartphones', href: '/products/electronics/phones' },
    ],
  },
};

export const CollapsedBreadcrumb: Story = {
  args: {
    showSidebarCollapseIcon: true,
    collapsed: true,
    collapseAction: () => console.log('Collapse action triggered'),
    items: [
      { label: '', iconName: 'home', href: '/' },
      { label: 'Level 1', href: '/1' },
      { label: 'Level 2', href: '/2' },
      { label: 'Level 3', href: '/3' },
      { label: 'Level 4', href: '/4' },
      { label: 'Level 5', href: '/5' },
      { label: 'Final Page', href: '/final' },
    ],
  },
};

export const AllIcons: Story = {
  args: {
    items: [
      { label: '', iconName: 'home', href: '/' },
      { label: 'Profile', iconName: 'user', href: '/profile' },
      { label: 'Settings', iconName: 'settings', href: '/settings' },
      { label: 'Billing', iconName: 'briefcase', href: '/settings/billing' },
    ],
  },
};
