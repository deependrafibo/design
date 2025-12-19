import React from 'react';
import { CustomIconProps } from './types';

export const CustomLayout: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 2H19C20.7 2 22 3.3 22 5V19C22 20.7 20.7 22 19 22H5C3.3 22 2 20.7 2 19V5C2 3.3 3.3 2 5 2ZM19 4H5C4.4 4 4 4.4 4 5V8H20V5C20 4.4 19.6 4 19 4ZM4 19V10H8V20H5C4.4 20 4 19.6 4 19ZM10 20H19C19.6 20 20 19.6 20 19V10H10V20Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47534"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="20"
      height="20"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 2H19C20.7 2 22 3.3 22 5V19C22 20.7 20.7 22 19 22H5C3.3 22 2 20.7 2 19V5C2 3.3 3.3 2 5 2ZM19 4H5C4.4 4 4 4.4 4 5V8H20V5C20 4.4 19.6 4 19 4ZM4 19V10H8V20H5C4.4 20 4 19.6 4 19ZM10 20H19C19.6 20 20 19.6 20 19V10H10V20Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47534)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
