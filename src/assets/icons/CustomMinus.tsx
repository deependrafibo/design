import React from 'react';
import { CustomIconProps } from './types';

export const CustomMinus: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 12C20 12.6 19.6 13 19 13H5C4.4 13 4 12.6 4 12C4 11.4 4.4 11 5 11H19C19.6 11 20 11.4 20 12Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47446"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="16"
      height="2"
    >
      <path
        d="M20 12C20 12.6 19.6 13 19 13H5C4.4 13 4 12.6 4 12C4 11.4 4.4 11 5 11H19C19.6 11 20 11.4 20 12Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47446)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
