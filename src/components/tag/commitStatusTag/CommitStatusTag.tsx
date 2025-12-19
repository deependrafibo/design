import { CommitStatusTagProps } from './types';

export const CommitStatusTag: React.FC<CommitStatusTagProps> = ({ status, className }) => {
  const statusColor =
    status === 'Open' || status === 'OPEN' || status === 'open'
      ? 'bg-[#E9FAF2]'
      : status === 'Merged' || status === 'MERGED' || status === 'merged'
        ? 'bg-[#E5F0F9]'
        : status === 'Closed' || status === 'CLOSED' || status === 'closed'
          ? 'bg-[#E6E7E7]'
          : 'bg-[#E6E7E7]';
  const statusTextColor =
    status === 'Open' || status === 'OPEN' || status === 'open'
      ? 'text-success-500'
      : status === 'Merged' || status === 'MERGED' || status === 'merged'
        ? 'text-primary-500'
        : status === 'Closed' || status === 'CLOSED' || status === 'closed'
          ? 'text-custom-grey-500'
          : 'text-custom-grey-500';
  return (
    <div
      className={`text-xs text-center ${statusColor} font-semibold ${statusTextColor} px-2 py-1 rounded max-w-16 ${className}`}
    >
      {status}
    </div>
  );
};
