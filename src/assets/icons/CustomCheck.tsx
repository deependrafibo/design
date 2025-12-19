import React from 'react';
import { CustomIconProps } from './types';

export const CustomCheck: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47393"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="6"
      width="18"
      height="13"
    >
      <path
        d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47393)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
