import React, { useState } from 'react';
import { TabProps } from './types';
import { iconComponents, IconName } from '../../utils/getIcons';

export const Tab: React.FC<TabProps> = ({
  tabs,
  variant = 'withoutIcon',
  defaultActiveTab = 0,
  activeTab,
  onTabChange,
  className = '',
  underlineColor = 'bg-secondary-500',
  activeTextColor = 'text-secondary-500',
  inactiveTextColor = 'text-neutral-500',
  activeBackgroundColor = 'bg-blue-accent',
  children,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<number>(defaultActiveTab);

  const currentActiveTab = activeTab !== undefined ? activeTab : internalActiveTab;

  const handleTabClick = (index: number) => {
    if (activeTab === undefined) {
      setInternalActiveTab(index);
    }
    onTabChange?.(index);
  };

  const getIcon = (iconName: IconName, isActive: boolean) => {
    const IconComponent = iconComponents[iconName];
    if (!IconComponent) return null;
    const color = isActive ? '#0185E4' : '#9E9E9E';
    return <IconComponent color={color} />;
  };

  const activeTabContent = Array.isArray(children)
    ? children[currentActiveTab]
    : currentActiveTab === 0
      ? children
      : null;

  return (
    <div>
      <div className={`flex gap-4 font-Montserrat ${className}`}>
        {tabs.map((tab, index) => {
          const isActive = currentActiveTab === index;
          let tabClasses =
            'flex items-center gap-2 cursor-pointer px-4 py-2 rounded relative font-medium cursor-pointer';

          if (variant === 'withIcon') {
            tabClasses += isActive ? ` ${activeBackgroundColor} ` : '';
          } else {
            tabClasses += !isActive ? ' font-normal' : '';
          }

          return (
            <div
              key={index}
              className={tabClasses}
              onClick={() => handleTabClick(index)}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
            >
              {variant === 'withIcon' && tab.iconName && getIcon(tab.iconName, isActive)}
              <span className={isActive ? activeTextColor : inactiveTextColor}>{tab.name}</span>
              {isActive && variant === 'withoutIcon' && (
                <div className={`absolute bottom-0 left-0 w-full h-[3px] rounded-lg ${underlineColor}`}></div>
              )}
            </div>
          );
        })}
      </div>

      {children && <div className="mt-4">{activeTabContent}</div>}
    </div>
  );
};
