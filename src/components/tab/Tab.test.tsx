import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Tab } from './Tab';
import '@testing-library/jest-dom';
import { TabItem } from './types';

vi.mock('../../utils/getIcons', () => ({
  iconComponents: {
    home: () => <svg data-testid="home-icon" />,
    user: () => <svg data-testid="user-icon" />,
    briefcase: () => <svg data-testid="briefcase-icon" />,
    graduation: () => <svg data-testid="graduation-icon" />,
  },
}));

describe('Tab Component', () => {
  const tabsWithIcons: TabItem[] = [
    { name: 'Account', iconName: 'home' },
    { name: 'Profile', iconName: 'user' },
    { name: 'Portfolio', iconName: 'briefcase' },
    { name: 'Education', iconName: 'graduation' },
  ];

  const tabsWithoutIcons: TabItem[] = [
    { name: 'Overview' },
    { name: 'Details' },
    { name: 'Analytics' },
    { name: 'Reports' },
  ];

  it('renders tab buttons correctly with icons', () => {
    render(<Tab tabs={tabsWithIcons} variant="withIcon" defaultActiveTab={0} />);
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
  });

  it('renders tab buttons correctly without icons', () => {
    render(<Tab tabs={tabsWithoutIcons} variant="withoutIcon" defaultActiveTab={0} />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  it('sets the active tab correctly', () => {
    const handleTabChange = vi.fn();
    render(<Tab tabs={tabsWithoutIcons} variant="withoutIcon" defaultActiveTab={0} onTabChange={handleTabChange} />);

    const secondTab = screen.getByText('Details');
    fireEvent.click(secondTab);
    expect(handleTabChange).toHaveBeenCalledTimes(1);
    expect(handleTabChange).toHaveBeenCalledWith(1);
  });

  it('applies active and inactive styles to tabs', () => {
    render(
      <Tab
        tabs={tabsWithoutIcons}
        variant="withoutIcon"
        defaultActiveTab={0}
        activeTextColor="text-blue-500"
        inactiveTextColor="text-gray-500"
      />,
    );

    const activeTab = screen.getByText('Overview');
    expect(activeTab).toHaveClass('text-blue-500');

    const inactiveTab = screen.getByText('Details');
    expect(inactiveTab).toHaveClass('text-gray-500');
  });

  it('renders the correct content based on the active tab', () => {
    const panels = [
      <div key="0">Personal Info Content</div>,
      <div key="1">Education Content</div>,
      <div key="2">Experience Content</div>,
      <div key="3">Skills Content</div>,
    ];

    render(
      <Tab
        tabs={[{ name: 'Personal Info' }, { name: 'Education' }, { name: 'Experience' }, { name: 'Skills' }]}
        variant="withoutIcon"
        defaultActiveTab={1}
      >
        {panels}
      </Tab>,
    );

    expect(screen.getByText('Education Content')).toBeInTheDocument();
  });

  it('applies custom styles and className', () => {
    render(
      <Tab
        tabs={tabsWithoutIcons}
        variant="withoutIcon"
        defaultActiveTab={0}
        className="custom-class"
        underlineColor="bg-green-500"
        activeBackgroundColor="bg-blue-200"
      />,
    );

    const tabList = screen.getByText('Overview').parentElement?.parentElement;
    expect(tabList).toHaveClass('custom-class');
  });

  it('respects controlled activeTab prop', () => {
    const handleTabChange = vi.fn();

    render(<Tab tabs={tabsWithIcons} variant="withIcon" activeTab={2} onTabChange={handleTabChange} />);

    const tab = screen.getByText('Portfolio');
    expect(tab).toHaveClass('text-secondary-500');
  });

  it('renders underline for active tab in "withoutIcon" variant', () => {
    render(<Tab tabs={tabsWithoutIcons} variant="withoutIcon" defaultActiveTab={0} underlineColor="bg-purple-500" />);

    const tab = screen.getByText('Overview');
    const underline = tab.parentElement?.querySelector('div.bg-purple-500');
    expect(underline).toBeInTheDocument();
  });
});
