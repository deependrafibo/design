import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ProfileMenuItem, SidebarItem, SidebarProps } from './type';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive sidebar component with navigation items, search functionality, user profile menu, and collapsible behavior.',
      },
    },
  },
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed',
    },
    showSearch: {
      control: 'boolean',
      description: 'Whether to show the search input',
    },
    orgName: {
      control: 'text',
      description: 'Organization name to display in the logo',
    },
    activeItem: {
      control: 'select',
      options: ['Dashboard', 'Organization', 'Department', 'Cohorts', 'Billing', 'Analytics', 'Chat', 'Notifications'],
      description: 'Currently active navigation item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const mainItems: SidebarItem[] = [
  { label: 'Dashboard', icon: 'home', href: '/dashboard' },
  { label: 'Organization', icon: 'briefcase', href: '/organization' },
  { label: 'Department', icon: 'database', href: '/department' },
  { label: 'Cohorts', icon: 'grid', href: '/cohorts' },
  { label: 'Billing', icon: 'dollarSign', href: '/billing' },
  { label: 'Analytics', icon: 'activity', href: '/analytics' },
];

const bottomItems: SidebarItem[] = [
  { label: 'Chat', icon: 'messageSquare', href: '/chat' },
  { label: 'Notifications', icon: 'bell', href: '/notifications', badgeCount: 3 },
];

const profileMenuItems: ProfileMenuItem[] = [
  { label: 'Public Profile', icon: 'user', onClick: () => alert('Public Profile clicked') },
  { label: 'Edit Profile', icon: 'edit', onClick: () => alert('Edit Profile clicked') },
  { label: 'Delegates', icon: 'users', onClick: () => alert('Delegates clicked') },
  { label: 'Contact Support', icon: 'mail', onClick: () => alert('Support clicked') },
  { label: 'Privacy Policy & Terms', icon: 'filesText', onClick: () => alert('Privacy clicked') },
  { label: 'Log out', icon: 'logout', onClick: () => alert('Logged out') },
];

const InteractiveSidebar = (args: SidebarProps) => {
  const [activeTab, setActiveTab] = useState(args.activeItem);
  const [isCollapsed, setIsCollapsed] = useState(args.collapsed || false);

  const handleItemClick = (item: SidebarItem) => {
    setActiveTab(item.label);
    args.onItemClick?.(item);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        {...args}
        activeItem={activeTab}
        collapsed={isCollapsed}
        onItemClick={handleItemClick}
        onToggleCollapse={toggleCollapse}
      />
      <div className="flex-1 p-4 bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <button
            onClick={toggleCollapse}
            className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            {isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          </button>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900">Active Tab: {activeTab}</h2>
            <p className="text-gray-600">Sidebar State: {isCollapsed ? 'Collapsed' : 'Expanded'}</p>
            <p className="text-gray-600">Organization: {args.orgName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  args: {
    collapsed: false,
    activeItem: 'Organization',
    mainItems,
    bottomItems,
    profileMenuItems,
    showSearch: true,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',

    user: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },

    onItemClick: (item) => console.log('Clicked:', item),
    orgImageUriCollapsed: 'https://www.ltimindtree.com/wp-content/uploads/2022/09/LT-Favicon.svg',
    orgImageUriCollapsedClassName: 'max-w-[40px]',
  },
  render: (args) => <InteractiveSidebar {...args} />,
};

export const CollapsedView: Story = {
  args: {
    collapsed: true,
    activeItem: 'Dashboard',
    mainItems,
    bottomItems,
    profileMenuItems,
    showSearch: true,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',
    user: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
};

export const CollapsedWithFavicon: Story = {
  args: {
    collapsed: true,
    activeItem: 'Dashboard',
    mainItems,
    bottomItems,
    profileMenuItems,
    showSearch: true,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://www.ltimindtree.com/wp-content/uploads/2022/09/LT-Favicon.svg',
    orgImageClassName: 'max-w-[32px]',
    user: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Collapsed sidebar using the LTIMindtree favicon for better visual representation in compact spaces. The favicon is sized appropriately for the collapsed state.',
      },
    },
  },
};

export const WithoutSearch: Story = {
  args: {
    collapsed: false,
    activeItem: 'Analytics',
    mainItems,
    bottomItems,
    profileMenuItems,
    showSearch: false,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
};

export const WithDisabledItems: Story = {
  args: {
    collapsed: false,
    activeItem: 'Dashboard',
    mainItems: [
      { label: 'Dashboard', icon: 'home', href: '/dashboard' },
      { label: 'Organization', icon: 'briefcase', href: '/organization' },
      { label: 'Department', icon: 'database', href: '/department', disabled: true },
      { label: 'Cohorts', icon: 'grid', href: '/cohorts' },
      { label: 'Billing', icon: 'dollarSign', href: '/billing', disabled: true },
      { label: 'Analytics', icon: 'activity', href: '/analytics' },
    ],
    bottomItems: [
      { label: 'Chat', icon: 'messageSquare', href: '/chat' },
      { label: 'Notifications', icon: 'bell', href: '/notifications', badgeCount: 5 },
    ],
    profileMenuItems,
    showSearch: true,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',
    user: {
      name: 'Admin User',
      email: 'admin@company.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=8',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
};

export const WithMultipleBadges: Story = {
  args: {
    collapsed: false,
    activeItem: 'Chat',
    mainItems: [
      { label: 'Dashboard', icon: 'home', href: '/dashboard' },
      { label: 'Organization', icon: 'briefcase', href: '/organization', badgeCount: 2 },
      { label: 'Department', icon: 'database', href: '/department' },
      { label: 'Cohorts', icon: 'grid', href: '/cohorts', badgeCount: 12 },
      { label: 'Billing', icon: 'dollarSign', href: '/billing' },
      { label: 'Analytics', icon: 'activity', href: '/analytics' },
    ],
    bottomItems: [
      { label: 'Chat', icon: 'messageSquare', href: '/chat', badgeCount: 8 },
      { label: 'Notifications', icon: 'bell', href: '/notifications', badgeCount: 15 },
    ],
    profileMenuItems,
    showSearch: true,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',
    user: {
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
};

export const MinimalProfileMenu: Story = {
  args: {
    collapsed: false,
    activeItem: 'Dashboard',
    mainItems,
    bottomItems,
    profileMenuItems: [
      { label: 'Edit Profile', icon: 'edit', onClick: () => alert('Edit Profile clicked') },
      { label: 'Log out', icon: 'logout', onClick: () => alert('Logged out') },
    ],
    showSearch: true,
    orgName: 'LTIMindtree',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',
    user: {
      name: 'Guest User',
      email: 'guest@company.com',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
};

export const LongOrganizationName: Story = {
  args: {
    collapsed: false,
    activeItem: 'Dashboard',
    mainItems,
    bottomItems,
    profileMenuItems,
    showSearch: true,
    orgName: 'LTIMindtree - Very Long Organization Name That Might Overflow',
    orgImageUri: 'https://tru-dev-api.trumio.ai/user/api/v1/public-assets/client-logo/5bd0fe4f5311236168a109cc',
    orgImageClassName: 'max-w-[200px]',
    user: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    onItemClick: (item) => console.log('Clicked:', item),
  },
  render: (args) => <InteractiveSidebar {...args} />,
};
