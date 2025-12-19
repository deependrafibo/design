import React from 'react';
import { TeamMemberListProps } from './types';

export const TeamMemberList: React.FC<TeamMemberListProps> = ({
  title = 'Team',
  items,
  onInvite,
  height = '360px',
  width = '480px',
}) => {
  return (
    <div data-testid="team-container" className={`bg-white rounded-lg p-4 m-2 shadow-lg`} style={{ width, height }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <div className="text-lg font-normal text-gray-700">{title}</div>
          <div className="text-sm text-gray-500">{items.length} Members</div>
        </div>
        {onInvite && (
          <button
            onClick={onInvite}
            className="text-base text-blue-500 px-3 py-1 rounded hover:bg-blue-50 cursor-pointer"
          >
            Invite
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4 pr-2 overflow-x-hidden max-h-[calc(100%-60px)] custom-scrollbar">
        {items.map((member, idx) => (
          <div key={idx} className="flex items-center gap-4 w-full min-w-0">
            <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">{member.name}</span>
              <span className="text-sm text-gray-500">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
