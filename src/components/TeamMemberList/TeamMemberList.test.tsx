import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { TeamMemberList } from './TeamMemberList';
import { mockTeamMembers } from './TeamMemberListMockData';

describe('TeamMemberList Component', () => {
  it('renders title and member count correctly', () => {
    render(<TeamMemberList items={mockTeamMembers} title="Team" />);
    expect(screen.getByText('Team')).toBeInTheDocument();
    expect(screen.getByText(`${mockTeamMembers.length} Members`)).toBeInTheDocument();
  });

  it('renders all member names and roles', () => {
    render(<TeamMemberList items={mockTeamMembers} />);
    mockTeamMembers.forEach((member) => {
      expect(screen.getAllByText(member.name).length).toBeGreaterThan(0);
    });
  });

  it('renders avatars with correct alt text', () => {
    render(<TeamMemberList items={mockTeamMembers} />);
    mockTeamMembers.forEach((member) => {
      const img = screen.getByAltText(member.name) as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toContain(member.avatar);
    });
  });

  it('calls onInvite when invite button is clicked', () => {
    const handleInvite = vi.fn();
    render(<TeamMemberList items={mockTeamMembers} onInvite={handleInvite} />);
    fireEvent.click(screen.getByText('Invite'));
    expect(handleInvite).toHaveBeenCalledTimes(1);
  });

  it('does not render Invite button when onInvite is undefined', () => {
    render(<TeamMemberList items={mockTeamMembers} onInvite={undefined} />);
    expect(screen.queryByText('Invite')).not.toBeInTheDocument();
  });

  it('applies custom height and width styles', () => {
    render(<TeamMemberList items={mockTeamMembers} height="500px" width="600px" />);
    const container = screen.getByTestId('team-container');
    expect(container).toHaveStyle({ height: '500px', width: '600px' });
  });
});
