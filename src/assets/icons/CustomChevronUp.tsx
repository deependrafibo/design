import React from 'react';
import { CustomIconProps } from './types';

export const CustomChevronUp: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.7 15.7C18.5 15.9 18.3 16 18 16C17.7 16 17.5 15.9 17.3 15.7L12 10.4L6.7 15.7C6.3 16.1 5.7 16.1 5.3 15.7C4.9 15.3 4.9 14.7 5.3 14.3L11.3 8.3C11.7 7.9 12.3 7.9 12.7 8.3L18.7 14.3C19.1 14.7 19.1 15.3 18.7 15.7Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47396"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="5"
      y="8"
      width="14"
      height="8"
    >
      <path
        d="M18.7 15.7C18.5 15.9 18.3 16 18 16C17.7 16 17.5 15.9 17.3 15.7L12 10.4L6.7 15.7C6.3 16.1 5.7 16.1 5.3 15.7C4.9 15.3 4.9 14.7 5.3 14.3L11.3 8.3C11.7 7.9 12.3 7.9 12.7 8.3L18.7 14.3C19.1 14.7 19.1 15.3 18.7 15.7Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47396)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
