import React from 'react';
import { CustomIconProps } from './types';

export const CustomBattery: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 5H3C1.3 5 0 6.3 0 8V16C0 17.7 1.3 19 3 19H17C18.7 19 20 17.7 20 16V8C20 6.3 18.7 5 17 5ZM18 16C18 16.6 17.6 17 17 17H3C2.4 17 2 16.6 2 16V8C2 7.4 2.4 7 3 7H17C17.6 7 18 7.4 18 8V16ZM24 13V11C24 10.4 23.6 10 23 10C22.4 10 22 10.4 22 11V13C22 13.6 22.4 14 23 14C23.6 14 24 13.6 24 13Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47377"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="5"
      width="24"
      height="14"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 5H3C1.3 5 0 6.3 0 8V16C0 17.7 1.3 19 3 19H17C18.7 19 20 17.7 20 16V8C20 6.3 18.7 5 17 5ZM18 16C18 16.6 17.6 17 17 17H3C2.4 17 2 16.6 2 16V8C2 7.4 2.4 7 3 7H17C17.6 7 18 7.4 18 8V16ZM24 13V11C24 10.4 23.6 10 23 10C22.4 10 22 10.4 22 11V13C22 13.6 22.4 14 23 14C23.6 14 24 13.6 24 13Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47377)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
