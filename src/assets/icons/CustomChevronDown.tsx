import React from 'react';
import { CustomIconProps } from './types';

export const CustomChevronDown: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.7 8.3C18.5 8.1 18.3 8 18 8C17.7 8 17.5 8.1 17.3 8.3L12 13.6L6.7 8.3C6.3 7.9 5.7 7.9 5.3 8.3C4.9 8.7 4.9 9.3 5.3 9.7L11.3 15.7C11.7 16.1 12.3 16.1 12.7 15.7L18.7 9.7C19.1 9.3 19.1 8.7 18.7 8.3Z"
      fill={color}
    />
    <mask
      id="mask0_4189_3244"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="5"
      y="8"
      width="14"
      height="8"
    >
      <path
        d="M18.7 8.3C18.5 8.1 18.3 8 18 8C17.7 8 17.5 8.1 17.3 8.3L12 13.6L6.7 8.3C6.3 7.9 5.7 7.9 5.3 8.3C4.9 8.7 4.9 9.3 5.3 9.7L11.3 15.7C11.7 16.1 12.3 16.1 12.7 15.7L18.7 9.7C19.1 9.3 19.1 8.7 18.7 8.3Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4189_3244)">
      <rect width="24" height="24" transform="matrix(1 0 0 -1 0 24)" fill={color} />
    </g>
  </svg>
);
