import React, { useState } from 'react';
import { BreadCrumbProps } from './types';
import { iconComponents, IconName } from '../../utils/getIcons';
import { CollapseIcon, CustomChevronRight, ExpandIcon } from '../../assets/icons';

const getIcon = (iconName: IconName) => {
  const IconComponent = iconComponents[iconName];
  if (!IconComponent) return null;
  return <IconComponent color={'#0185E4'} data-testid={`${iconName}-icon`} height={14} width={14} />;
};

interface TooltipProps {
  items: Array<{ label: string; href: string; iconName?: IconName }>;
  isVisible: boolean;
  onItemClick: (href: string) => void;
}

const Tooltip: React.FC<TooltipProps> = ({ items, isVisible, onItemClick }) => {
  if (!isVisible || items.length === 0) return null;

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-full h-3 bg-transparent"></div>
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>

      <div className="py-2 max-h-60 overflow-y-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 text-sm"
            onClick={() => onItemClick(item.href)}
          >
            {item.iconName && getIcon(item.iconName)}
            <span className="text-neutral-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Breadcrumb: React.FC<BreadCrumbProps> = ({
  items,
  showSidebarCollapseIcon = true,
  collapsed = true,
  collapseAction = () => {},
  maxItemsForCollapse = 3,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const MAX_ITEMS = maxItemsForCollapse || 3;

  let visibleItems = items;
  let hiddenItems: Array<{ label: string; href: string; iconName?: IconName }> = [];

  if (items.length > MAX_ITEMS) {
    visibleItems = [items[0], { label: 'ellipsis', href: '' }, items[items.length - 1]];
    hiddenItems = items.slice(1, items.length - 1);
  }

  const handleTooltipItemClick = (href: string) => {
    if (href) {
      window.location.href = href;
    }
    setShowTooltip(false);
  };

  return (
    <nav className="text-sm text-neutral-500 font-medium cursor-pointer" aria-label="Breadcrumb">
      <div className="flex items-center gap-3">
        {showSidebarCollapseIcon && (
          <div className="flex items-center gap-3">
            <span className="cursor-pointer" onClick={collapseAction} data-testid="sidebar-collapse-icon">
              {collapsed ? <ExpandIcon width={15} height={15} /> : <CollapseIcon width={15} height={15} />}
            </span>
            <span>|</span>
          </div>
        )}
        <ol className="flex items-center space-x-2">
          {visibleItems.map((item, idx) => {
            const isEllipsis = item.label === 'ellipsis';
            const isLast = idx === visibleItems.length - 1;

            return (
              <li key={idx} className="flex items-center gap-1">
                {idx > 0 && (
                  <span>
                    <CustomChevronRight width={14} height={14} />
                  </span>
                )}
                {isEllipsis ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <span className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer inline-block">...</span>
                    <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                      <Tooltip items={hiddenItems} isVisible={showTooltip} onItemClick={handleTooltipItemClick} />
                    </div>
                  </div>
                ) : (
                  <>
                    {isLast ? (
                      <div className="flex items-center gap-1">
                        {item.iconName && getIcon(item.iconName)}
                        <span className="text-secondary-500 font-medium" aria-current="page">
                          {item.label}
                        </span>
                      </div>
                    ) : (
                      <a href={item.href} className="flex items-center gap-1 hover:text-neutral-700 transition-colors">
                        {item.iconName && getIcon(item.iconName)}
                        {item.label && <span>{item.label}</span>}
                      </a>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
