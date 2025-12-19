import { Status } from './enums';

export interface DepartmentHeaderProps {
  name: string;
  identifier: string;
  cohortCount: number;
  createdAt: string;
  status: Status;
  toggleOn: boolean;
  onToggle: () => void;
  className?: string;
  label?: string;
  type?: 'active' | 'deactivated' | 'expired' | 'invitation-sent';
  disabled?: boolean;
}
