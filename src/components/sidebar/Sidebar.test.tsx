import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Sidebar } from './Sidebar';
import '@testing-library/jest-dom';
import { SidebarItem, ProfileMenuItem, SidebarUser } from './type';

vi.mock('@/utils/getIcons', () => ({
  iconComponents: {
    search: () => <div data-testid="search-icon">SearchIcon</div>,
    chevronUp: () => <div data-testid="chevron-up-icon">UpIcon</div>,
    chevronDown: () => <div data-testid="chevron-down-icon">DownIcon</div>,
    home: () => <div data-testid="home-icon">HomeIcon</div>,
    activity: () => <div data-testid="activity-icon">ActivityIcon</div>,
    user: () => <div data-testid="user-icon">UserIcon</div>,
    logout: () => <div data-testid="logout-icon">LogoutIcon</div>,
  },
}));

describe('Sidebar Component', () => {
  const mainItems: SidebarItem[] = [
    { label: 'Dashboard', icon: 'home', href: '/dashboard' },
    { label: 'Organization', icon: 'activity', href: '/organization' },
  ];

  const bottomItems: SidebarItem[] = [
    { label: 'Notifications', icon: 'activity', href: '/notifications', badgeCount: 3 },
  ];

  const profileMenuItems: ProfileMenuItem[] = [
    { label: 'Profile', icon: 'user', onClick: vi.fn() },
    { label: 'Log out', icon: 'logout', onClick: vi.fn() },
  ];

  const user: SidebarUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: '/avatar.png',
  };

  it('renders expanded sidebar with all elements', () => {
    const onItemClick = vi.fn();

    render(
      <Sidebar
        mainItems={mainItems}
        bottomItems={bottomItems}
        profileMenuItems={profileMenuItems}
        user={user}
        activeItem="Dashboard"
        onItemClick={onItemClick}
      />,
    );

    expect(screen.getByTestId('org-logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Organization')).toBeInTheDocument();
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('renders collapsed sidebar correctly', () => {
    const onItemClick = vi.fn();

    render(
      <Sidebar
        collapsed={true}
        mainItems={mainItems}
        bottomItems={bottomItems}
        profileMenuItems={profileMenuItems}
        user={user}
        activeItem="Dashboard"
        onItemClick={onItemClick}
      />,
    );

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('w-[88px]');
    expect(sidebar).not.toHaveClass('w-[235px]');
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    const activityIcon = screen.getAllByTestId('activity-icon');
    expect(activityIcon.length).toBe(2);
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('highlights active item correctly', () => {
    const onItemClick = vi.fn();
    render(
      <Sidebar
        mainItems={mainItems}
        bottomItems={bottomItems}
        profileMenuItems={profileMenuItems}
        user={user}
        activeItem="Dashboard"
        onItemClick={onItemClick}
      />,
    );

    const buttons = screen.getAllByRole('button');
    const dashboardButton = buttons.find((button) => button.textContent?.includes('Dashboard'));
    const orgButton = buttons.find((button) => button.textContent?.includes('Organization'));
    expect(dashboardButton).toHaveClass('bg-secondary-50');
    expect(dashboardButton).toHaveClass('text-secondary-500');
    expect(dashboardButton).toHaveClass('border-secondary-500');
    expect(orgButton).not.toHaveClass('text-secondary-500');
    expect(orgButton).toHaveClass('text-gray-500');
  });

  it('calls onItemClick when an item is clicked', () => {
    const onItemClick = vi.fn();
    render(
      <Sidebar
        mainItems={mainItems}
        bottomItems={bottomItems}
        profileMenuItems={profileMenuItems}
        user={user}
        activeItem="Dashboard"
        onItemClick={onItemClick}
      />,
    );
    fireEvent.click(screen.getByText('Organization'));
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith(mainItems[1]);
  });

  it('toggles profile menu visibility', () => {
    const onItemClick = vi.fn();
    render(
      <Sidebar
        mainItems={mainItems}
        bottomItems={bottomItems}
        profileMenuItems={profileMenuItems}
        user={user}
        activeItem="Dashboard"
        onItemClick={onItemClick}
      />,
    );
    fireEvent.click(screen.getByText('Profile'));
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });
});
