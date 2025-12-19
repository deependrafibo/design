import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowLeftIcon: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.86441 18 6.73512 17.973 6.61722 17.9241C6.50103 17.8761 6.39207 17.8051 6.2972 17.7114C6.29505 17.7093 6.29291 17.7071 6.29078 17.705C6.11106 17.5242 6 17.2751 6 17V7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7V14.5858Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47364"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="6"
      y="6"
      width="12"
      height="12"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.86441 18 6.73512 17.973 6.61722 17.9241C6.50103 17.8761 6.39207 17.8051 6.2972 17.7114C6.29505 17.7093 6.29291 17.7071 6.29078 17.705C6.11106 17.5242 6 17.2751 6 17V7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7V14.5858Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47364)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
