import React from 'react';
import { CustomIconProps } from './types';

export const CustomCircle: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12ZM3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3C7 3 3 7 3 12Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47402"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12ZM3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3C7 3 3 7 3 12Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47402)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
