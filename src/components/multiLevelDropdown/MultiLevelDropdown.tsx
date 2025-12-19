import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { DropdownItem, MultiLevelDropdownProps } from './types';
import { CustomCheck } from '@/assets/icons';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const MultiLevelDropdown: React.FC<MultiLevelDropdownProps> = ({
  items,
  onSelect,
  className = '',
  placeholder = 'Select an option',
  label = 'Select Cohort & Project',
  width = '300px',
  required = false,
}) => {
  const [openPath, setOpenPath] = useState<string[]>([]);
  const [clickedPath, setClickedPath] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [selectedCohortId, setSelectedCohortId] = useState<string | null>(null);
  const [, setHoveredPath] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenPath([]);
        setClickedPath([]);
        setHoveredPath([]);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (path: string[]) => {
    setHoveredPath(path);
    if (clickedPath.length === 0 || clickedPath.length <= path.length) {
      setOpenPath(path);
    }
  };

  const handleMouseLeave = () => {
    setHoveredPath([]);
    if (clickedPath.length === 0) {
      setOpenPath([]);
    }
  };

  const handleClick = (item: DropdownItem, path: string[], event: React.MouseEvent) => {
    event.stopPropagation();
    if (path.length === 1) {
      setSelectedCohortId(item.id);
      setClickedPath(path);
      setOpenPath(path);
    }
    if (item.children && item.children.length > 0) {
      const pathStr = path.join('-');
      const clickedPathStr = clickedPath.join('-');
      if (clickedPathStr === pathStr) {
        setClickedPath([]);
        setOpenPath([]);
      } else {
        setClickedPath(path);
        setOpenPath(path);
      }
    } else if (path.length > 1) {
      setSelectedItem(item);
      setIsDropdownOpen(false);
      setOpenPath([]);
      setClickedPath([]);
      setHoveredPath([]);
      onSelect?.(item);
    }
  };

  const isPathOpen = (path: string[]) => {
    const pathStr = path.join('-');
    const openPathStr = openPath.join('-');
    const clickedPathStr = clickedPath.join('-');
    return openPathStr.startsWith(pathStr) || clickedPathStr.startsWith(pathStr);
  };

  const renderItems = (items: DropdownItem[], path: string[] = [], level: number = 0) => {
    return (
      <div
        className={cn(
          'absolute z-50 bg-white border border-gray-200 rounded shadow-md w-full',
          level === 0 ? 'top-full left-0 mt-1' : 'top-0 left-full ml-1',
        )}
      >
        {items.map((item) => {
          const itemPath = [...path, item.id];
          const isOpen = isPathOpen(itemPath);
          const isSelected = selectedItem?.id === item.id;
          const hasChildren = item.children && item.children.length > 0;
          const isCohortSelected = selectedCohortId === item.id && level === 0;

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(itemPath)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={cn(
                  'flex items-center justify-between px-3 py-2 cursor-pointer text-sm transition-colors',
                  level === 0 && isCohortSelected
                    ? 'bg-blue-accent-300 text-primary-500 font-normal'
                    : level === 0
                      ? 'text-gray-700 hover:bg-blue-accent-300 hover:text-primary-500'
                      : isSelected
                        ? 'bg-blue-50 text-blue-600 font-normal'
                        : 'text-gray-700 hover:bg-blue-accent-300 hover:text-primary-500',
                )}
                onClick={(e) => handleClick(item, itemPath, e)}
              >
                <span className="truncate flex-1 pr-2">{item.label}</span>
                <div className="flex items-center space-x-1">
                  {isSelected && level === 1 && <CustomCheck width={16} height={16} color="#0185E4" />}
                  {hasChildren && (
                    <ChevronRight
                      className={cn('w-4 h-4 text-gray-400 transition-transform', isOpen ? 'rotate-90' : '')}
                    />
                  )}
                </div>
              </div>
              {hasChildren && isOpen && (
                <div className="relative">{renderItems(item.children!, itemPath, level + 1)}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn('relative', className)}>
      {label && (
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <div className="relative inline-block text-left w-full" ref={dropdownRef} style={{ width }}>
        <button
          type="button"
          className={cn(
            'w-full px-3 py-2 text-left bg-white border border-gray-100 rounded-sm',
            'hover:bg-gray-50 ',
            'transition-colors duration-150 text-sm',
          )}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <div className="flex justify-between items-center">
            <span className={cn('truncate text-gray-600 text-sm font-normal')}>
              {selectedItem?.label || placeholder}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 flex-shrink-0 transition-transform duration-150',
                isDropdownOpen ? 'transform rotate-180' : '',
              )}
            />
          </div>
        </button>
        {isDropdownOpen && <div className=" w-full">{renderItems(items)}</div>}
      </div>
    </div>
  );
};
