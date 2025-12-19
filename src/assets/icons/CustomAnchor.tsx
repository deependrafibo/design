import React from 'react';
import { CustomIconProps } from './types';

export const CustomAnchor: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 11H22C22.6 11 23 11.4 23 12.1C23 18.2 18.1 23.1 12 23.1C5.9 23.1 1 18.2 1 12.1C1 11.5 1.4 11.1 2 11.1H5C5.6 11.1 6 11.5 6 12.1C6 12.7 5.6 13.1 5 13.1H3.1C3.5 17.2 6.8 20.5 11 21V8.9C9.3 8.4 8 6.9 8 5C8 2.8 9.8 1 12 1C14.2 1 16 2.8 16 5C16 6.9 14.7 8.5 13 8.9V20.9C17.1 20.5 20.4 17.2 20.9 13H19C18.4 13 18 12.6 18 12C18 11.4 18.4 11 19 11ZM12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47357"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="1"
      width="20"
      height="23"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11H22C22.6 11 23 11.4 23 12.1C23 18.2 18.1 23.1 12 23.1C5.9 23.1 1 18.2 1 12.1C1 11.5 1.4 11.1 2 11.1H5C5.6 11.1 6 11.5 6 12.1C6 12.7 5.6 13.1 5 13.1H3.1C3.5 17.2 6.8 20.5 11 21V8.9C9.3 8.4 8 6.9 8 5C8 2.8 9.8 1 12 1C14.2 1 16 2.8 16 5C16 6.9 14.7 8.5 13 8.9V20.9C17.1 20.5 20.4 17.2 20.9 13H19C18.4 13 18 12.6 18 12C18 11.4 18.4 11 19 11ZM12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47357)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);

export default CustomAnchor;
