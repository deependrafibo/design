import React from 'react';
import { CustomIconProps } from './types';

export const CustomEdit: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7 2.3L21.7 7.3C22.1 7.7 22.1 8.3 21.7 8.7L8.7 21.7C8.5 21.9 8.3 22 8 22H3C2.4 22 2 21.6 2 21V16C2 15.7 2.1 15.5 2.3 15.3L15.3 2.3C15.7 1.9 16.3 1.9 16.7 2.3ZM4 20H7.6L19.6 8L16 4.4L4 16.4V20Z"
        fill={color}
      />
    </svg>
  );
};
