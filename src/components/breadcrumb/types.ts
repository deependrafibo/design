import { IconName } from '../../utils/getIcons';

export interface BreadCrumbItems {
  label: string;
  href: string;
  iconName?: IconName;
}

export interface BreadCrumbProps {
  items: BreadCrumbItems[];
  showSidebarCollapseIcon?: boolean;
  collapsed?: boolean;
  collapseAction?: () => void;
  maxItemsForCollapse?: number;
}
