import { StatusBadgeProps } from './types';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ label, type, className }) => {
  let badgeClass = '';

  switch (type) {
    case 'active':
    case 'ACTIVE':
      badgeClass = 'bg-green-100 text-green-strength';
      break;
    case 'deactivated':
    case 'DEACTIVATED':
      badgeClass = 'bg-gray-100 text-gray-500';
      break;
    case 'expired':
    case 'EXPIRED':
      badgeClass = 'bg-error-100 text-error';
      break;
    case 'invitation-sent':
    case 'INVITATION_SENT':
      badgeClass = 'bg-blue-accent-100 text-blue-700';
      break;
    case 'INVITED':
      badgeClass = 'bg-blue-accent-100 text-blue-700';
      break;
    case 'INVITE_EXPIRED':
      badgeClass = 'bg-error-100 text-error';
      break;
    case 'PROJECT_ONGOING':
    case 'ONGOING_PROJECT':
      badgeClass = 'bg-green-100 text-green-strength';
      break;
    case 'REMOVED':
      badgeClass = 'bg-gray-100 text-gray-600';
      break;
    case 'ASSIGNED_TO_COHORT':
      badgeClass = 'bg-orange-100 text-orange-500';
      break;
    case 'ASSIGNED_TO_DEPARTMENT':
      badgeClass = 'bg-blue-accent-100 text-blue-700';
      break;
    case 'ASSIGNED_TO_PROJECT':
      badgeClass = 'bg-purple-100 text-purple-500';
      break;
    case 'PROJECT_COMPLETED':
      badgeClass = 'bg-cyan-100 text-cyan-500';
      break;
    case 'UNASSIGNED':
      badgeClass = 'bg-gray-100 text-gray-500';
      break;
    case 'OPEN':
      badgeClass = 'bg-cyan-100 text-cyan-600';
      break;
    case 'ALLOCATED':
      badgeClass = 'bg-green-100 text-green-strength';
      break;
    case 'ON_GOING':
    case 'ONGOING':
      badgeClass = 'bg-green-100 text-green-strength';
      break;
    case 'COMPLETED':
      badgeClass = 'bg-blue-100 text-blue-600';
      break;
    case 'PENDING':
      badgeClass = 'bg-orange-100 text-orange-600';
      break;
    case 'ASSIGNED':
      badgeClass = 'bg-green-100 text-green-strength';
      break;
    case 'inactive':
    case 'INACTIVE':
      badgeClass = 'bg-gray-100 text-gray-600';
      break;
    default:
      badgeClass = 'bg-gray-100 text-gray-600';
      break;
  }

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full inline-block ${badgeClass} ${className}`}>
      {label}
    </span>
  );
};
