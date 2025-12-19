import { Status } from '../departmentHeader/enums';

type LegacyStatus =
  | 'inactive'
  | 'active'
  | 'deactivated'
  | 'expired'
  | 'invitation-sent'
  | 'completed'
  | 'ongoing'
  | 'on_going';
type NewStatus = 'INACTIVE' | 'ACTIVE' | 'DEACTIVATED' | 'EXPIRED' | 'OPEN' | 'ON_GOING' | 'ONGOING' | 'COMPLETED';
export interface CohortHeaderProps {
  cohortName: string;
  departmentName: string;
  keySkills?: string[];
  endDate: string;
  status: Status;
  label: string;
  type?: LegacyStatus | NewStatus | string;
  onToggle: () => void;
  toggleOn?: boolean;
  showToggle?: boolean;
  className?: string;
  epuAvailable?: number;
  avgLearnibiltyScore?: number;
  medianLearnibiltyScore?: number;
  medianTsScore?: number;
}
