type LegacyStatus =
  | 'inactive'
  | 'active'
  | 'deactivated'
  | 'expired'
  | 'invitation-sent'
  | 'completed'
  | 'ongoing'
  | 'on_going';
type NewStatus =
  | 'INACTIVE'
  | 'ACTIVE'
  | 'DEACTIVATED'
  | 'EXPIRED'
  | 'INVITATION_SENT'
  | 'INVITED'
  | 'INVITE_EXPIRED'
  | 'PROJECT_ONGOING'
  | 'ONGOING_PROJECT'
  | 'REMOVED'
  | 'ASSIGNED_TO_COHORT'
  | 'ASSIGNED_TO_DEPARTMENT'
  | 'ASSIGNED_TO_PROJECT'
  | 'PROJECT_COMPLETED'
  | 'UNASSIGNED'
  | 'OPEN'
  | 'ALLOCATED'
  | 'ON_GOING'
  | 'ONGOING'
  | 'COMPLETED'
  | 'PENDING'
  | 'ASSIGNED';

export interface StatusBadgeProps {
  label: string;
  type: LegacyStatus | NewStatus | string;
  className?: string;
}
