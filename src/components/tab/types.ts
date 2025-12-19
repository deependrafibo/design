import { IconName } from '../../utils/getIcons';
import { ReactNode } from 'react';

export interface TabItem {
  name: string;
  iconName?: IconName;
  id?: string;
}

export interface TabProps {
  tabs: TabItem[];
  variant?: 'withIcon' | 'withoutIcon';
  defaultActiveTab?: number;
  activeTab?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  underlineColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  activeBackgroundColor?: string;
  children?: ReactNode | ReactNode[];
  showContent?: boolean;
}
