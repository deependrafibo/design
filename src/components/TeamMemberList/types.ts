export interface TeamMemberListProps {
  title?: string;
  items: {
    name: string;
    role: string;
    avatar: string;
  }[];
  onInvite?: () => void;
  height?: string;
  width?: string;
}
