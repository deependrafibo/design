import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowUpRight: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H17C17.1356 6 17.2649 6.02699 17.3828 6.07588C17.4999 6.12432 17.6096 6.19595 17.705 6.29078C17.7071 6.29291 17.7093 6.29505 17.7114 6.2972C17.8898 6.47782 18 6.72604 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V9.41421Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47370"
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
        d="M16 9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H17C17.1356 6 17.2649 6.02699 17.3828 6.07588C17.4999 6.12432 17.6096 6.19595 17.705 6.29078C17.7071 6.29291 17.7093 6.29505 17.7114 6.2972C17.8898 6.47782 18 6.72604 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V9.41421Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47370)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
