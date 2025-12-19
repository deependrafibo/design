export interface TalentProfileHeaderProps {
  name: string;
  email: string;
  imageUri?: string;
  department?: string;
  role: string;
  dateAdded: string;
  toggleOn?: boolean;
  onToggle?: () => void;
  onNameClick?: () => void;
  className?: string;
  label?: string;
  alt?: string;
  type?: 'active' | 'deactivated';
  isToggleDisabled?: boolean;
}

export interface ProfileHeaderProps {
  imageUri: string;
  alt: string;
  onNameClick?: () => void;
  name: string;
  role: string;
  education: string;
  instuteName: string;
  instuteStartDate: string;
  instuteEndDate: string;
  startDate: string;
  endDate: string;
  expectedEndDate?: string;
}
