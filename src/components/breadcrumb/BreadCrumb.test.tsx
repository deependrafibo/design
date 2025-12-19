import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Breadcrumb } from './BreadCrumb';
import '@testing-library/jest-dom';

vi.mock('../../utils/getIcons', () => ({
  iconComponents: {
    home: () => <svg data-testid="home-icon" />,
    user: () => <svg data-testid="user-icon" />,
    briefcase: () => <svg data-testid="briefcase-icon" />,
    settings: () => <svg data-testid="settings-icon" />,
  },
}));

describe('Breadcrumb Component', () => {
  it('renders breadcrumb items with only text labels', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Section', href: '/section' },
          { label: 'Details', href: '/section/details' },
        ]}
      />,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Section')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('renders icon when iconName is provided', () => {
    render(
      <Breadcrumb
        items={[
          { label: '', iconName: 'home', href: '/' },
          { label: 'Profile', iconName: 'user', href: '/profile' },
        ]}
      />,
    );

    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  it('displays ellipsis when items exceed the limit', () => {
    render(
      <Breadcrumb
        items={[
          { label: '', iconName: 'home', href: '/' },
          { label: 'Level 1', href: '/1' },
          { label: 'Level 2', href: '/2' },
          { label: 'Level 3', href: '/3' },
          { label: 'Level 4', href: '/4' },
          { label: 'Level 5', href: '/5' },
          { label: 'Final Page', href: '/final' },
        ]}
      />,
    );

    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Level 4')).toBeInTheDocument();
    expect(screen.getByText('Final Page')).toBeInTheDocument();
  });

  it('renders the last breadcrumb item as current page', () => {
    render(
      <Breadcrumb
        items={[
          { label: '', iconName: 'home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Current Page', href: '/current' },
        ]}
      />,
    );

    const lastItem = screen.getByText('Current Page');
    expect(lastItem).toHaveAttribute('aria-current', 'page');
  });

  it('renders links for non-final items', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Intermediate', href: '/intermediate' },
          { label: 'Final', href: '/final' },
        ]}
      />,
    );

    const link = screen.getByText('Intermediate').closest('a');
    expect(link).toHaveAttribute('href', '/intermediate');
  });
});
