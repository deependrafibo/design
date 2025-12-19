import React from 'react';
import { CustomIconProps } from './types';

export const CustomBookmark: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2H17C18.7 2 20 3.3 19.9 5V21C19.9 21.4 19.7 21.7 19.4 21.9C19.2 22 19.1 22 18.9 22C18.7 22 18.5 21.9 18.3 21.8L11.9 17.2L5.5 21.8C5.2 22 4.8 22.1 4.5 21.9C4.2 21.7 4 21.4 4 21V5C4 3.3 5.3 2 7 2ZM12.6 15.2L18 19.1V5C18 4.4 17.6 4 17 4H7C6.4 4 6 4.4 6 5V19.1L11.4 15.2C11.6 15.1 11.8 15 12 15C12.2 15 12.4 15.1 12.6 15.2Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47384"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="2"
      width="16"
      height="21"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2H17C18.7 2 20 3.3 19.9 5V21C19.9 21.4 19.7 21.7 19.4 21.9C19.2 22 19.1 22 18.9 22C18.7 22 18.5 21.9 18.3 21.8L11.9 17.2L5.5 21.8C5.2 22 4.8 22.1 4.5 21.9C4.2 21.7 4 21.4 4 21V5C4 3.3 5.3 2 7 2ZM12.6 15.2L18 19.1V5C18 4.4 17.6 4 17 4H7C6.4 4 6 4.4 6 5V19.1L11.4 15.2C11.6 15.1 11.8 15 12 15C12.2 15 12.4 15.1 12.6 15.2Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47384)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
