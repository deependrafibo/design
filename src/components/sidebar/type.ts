import { IconName } from '@/utils/getIcons';

export interface SidebarItem {
  label: string;
  icon: IconName;
  badgeCount?: number;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

export interface ProfileMenuItem {
  label: string;
  icon: IconName;
  onClick: () => void;
}

export interface SidebarUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface SidebarProps {
  collapsed?: boolean;
  mainItems: SidebarItem[];
  bottomItems?: SidebarItem[];
  activeItem: string;
  onItemClick: (item: SidebarItem) => void;
  user: SidebarUser;
  profileMenuItems: ProfileMenuItem[];
  showSearch?: boolean;
  onToggleCollapse?: () => void;
  orgName?: string;
  orgImageWidthClassname?: string;
  onSearch?: (query: string) => void;
  collapsible?: boolean;
  orgImageUri?: string;
  orgImageClassName?: string;
  orgImageUriCollapsed?: string;
  orgImageUriCollapsedClassName?: string;
}
