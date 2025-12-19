import React from 'react';
import { CustomIconProps } from './types';

export const CustomBold: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4 11.6C18.4 10.7 19 9.4 19 8C19 5.2 16.8 3 14 3H6C5.4 3 5 3.4 5 4V12V20C5 20.6 5.4 21 6 21H15C17.8 21 20 18.8 20 16C20 14.1 18.9 12.5 17.4 11.6ZM7 5H14C15.7 5 17 6.3 17 8C17 9.7 15.7 11 14 11H7V5ZM7 19H15C16.7 19 18 17.7 18 16C18 14.3 16.7 13 15 13H14H7V19Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47381"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="5"
      y="3"
      width="15"
      height="18"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 11.6C18.4 10.7 19 9.4 19 8C19 5.2 16.8 3 14 3H6C5.4 3 5 3.4 5 4V12V20C5 20.6 5.4 21 6 21H15C17.8 21 20 18.8 20 16C20 14.1 18.9 12.5 17.4 11.6ZM7 5H14C15.7 5 17 6.3 17 8C17 9.7 15.7 11 14 11H7V5ZM7 19H15C16.7 19 18 17.7 18 16C18 14.3 16.7 13 15 13H14H7V19Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47381)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
