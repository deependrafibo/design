import React from 'react';
import { CustomIconProps } from './types';

export const CustomPullRequest: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 2C3.8 2 2 3.8 2 6C2 7.9 3.3 9.4 5 9.9V21C5 21.6 5.4 22 6 22C6.6 22 7 21.6 7 21V9.9C8.7 9.5 10 7.9 10 6C10 3.8 8.2 2 6 2ZM19 8V14.1C20.7 14.6 22 16.1 22 18C22 20.2 20.2 22 18 22C15.8 22 14 20.2 14 18C14 16.1 15.3 14.5 17 14.1V8C17 7.4 16.6 7 16 7H13C12.4 7 12 6.6 12 6C12 5.4 12.4 5 13 5H16C17.7 5 19 6.3 19 8ZM16 18C16 19.1 16.9 20 18 20C19.1 20 20 19.1 20 18C20 16.9 19.1 16 18 16C16.9 16 16 16.9 16 18ZM4 6C4 7.1 4.9 8 6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47523"
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
        d="M6 2C3.8 2 2 3.8 2 6C2 7.9 3.3 9.4 5 9.9V21C5 21.6 5.4 22 6 22C6.6 22 7 21.6 7 21V9.9C8.7 9.5 10 7.9 10 6C10 3.8 8.2 2 6 2ZM19 8V14.1C20.7 14.6 22 16.1 22 18C22 20.2 20.2 22 18 22C15.8 22 14 20.2 14 18C14 16.1 15.3 14.5 17 14.1V8C17 7.4 16.6 7 16 7H13C12.4 7 12 6.6 12 6C12 5.4 12.4 5 13 5H16C17.7 5 19 6.3 19 8ZM16 18C16 19.1 16.9 20 18 20C19.1 20 20 19.1 20 18C20 16.9 19.1 16 18 16C16.9 16 16 16.9 16 18ZM4 6C4 7.1 4.9 8 6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6Z"
        fill={color}
      />
    </mask>
    <g mask="url(#mask0_4007_47523)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
