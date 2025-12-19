import React from 'react';
import { CustomIconProps } from './types';

export const CustomVerticalBarChart: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3C17.4 3 17 3.4 17 4V20C17 20.6 17.4 21 18 21C18.6 21 19 20.6 19 20V4C19 3.4 18.6 3 18 3ZM12 9C12.6 9 13 9.4 13 10V20C13 20.6 12.6 21 12 21C11.4 21 11 20.6 11 20V10C11 9.4 11.4 9 12 9ZM5 16C5 15.4 5.4 15 6 15C6.6 15 7 15.4 7 16V20C7 20.6 6.6 21 6 21C5.4 21 5 20.6 5 20V16Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47375"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="5"
      y="3"
      width="14"
      height="18"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3C17.4 3 17 3.4 17 4V20C17 20.6 17.4 21 18 21C18.6 21 19 20.6 19 20V4C19 3.4 18.6 3 18 3ZM12 9C12.6 9 13 9.4 13 10V20C13 20.6 12.6 21 12 21C11.4 21 11 20.6 11 20V10C11 9.4 11.4 9 12 9ZM5 16C5 15.4 5.4 15 6 15C6.6 15 7 15.4 7 16V20C7 20.6 6.6 21 6 21C5.4 21 5 20.6 5 20V16Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47375)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
