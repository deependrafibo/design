import React, { useState } from 'react';
import { CustomMenu, CustomAlignJustify } from '../../assets/icons';
import { HamburgerProps } from './types';

// Hamburger Component
export const Hamburger: React.FC<HamburgerProps> = ({
  className,
  width = 24,
  height = 24,
  color = '#6E6B7B',
  isExpand = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpand);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <button className={`relative flex items-center gap-4 ${className}`} onClick={handleToggle}>
      <div
        className={`
          absolute transition-opacity duration-300 ease-in-out 
          ${isExpanded ? 'opacity-100' : 'opacity-0'} 
        `}
        data-testid="menu-icon"
      >
        <CustomMenu width={width} height={height} color={color} />
      </div>

      <div
        className={`
          absolute transition-opacity duration-300 ease-in-out 
          ${!isExpanded ? 'opacity-100' : 'opacity-0'} 
        `}
      >
        <CustomAlignJustify width={width} height={height} color="#6E6B7B" />
      </div>
    </button>
  );
};
