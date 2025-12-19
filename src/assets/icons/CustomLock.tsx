import React from 'react';
import { CustomIconProps } from './types';

export const CustomLock: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 10H18V7C18 3.7 15.3 1 12 1C8.7 1 6 3.7 6 7V10H5C3.3 10 2 11.3 2 13V20C2 21.7 3.3 23 5 23H19C20.7 23 22 21.7 22 20V13C22 11.3 20.7 10 19 10ZM8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10H8V7ZM19 21C19.6 21 20 20.6 20 20V13C20 12.4 19.6 12 19 12H5C4.4 12 4 12.4 4 13V20C4 20.6 4.4 21 5 21H19Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47554"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="1"
      width="20"
      height="22"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 10H18V7C18 3.7 15.3 1 12 1C8.7 1 6 3.7 6 7V10H5C3.3 10 2 11.3 2 13V20C2 21.7 3.3 23 5 23H19C20.7 23 22 21.7 22 20V13C22 11.3 20.7 10 19 10ZM8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10H8V7ZM19 21C19.6 21 20 20.6 20 20V13C20 12.4 19.6 12 19 12H5C4.4 12 4 12.4 4 13V20C4 20.6 4.4 21 5 21H19Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47554)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
