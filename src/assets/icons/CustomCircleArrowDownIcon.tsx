import React from 'react';
import { CustomIconProps } from './types';

export const CustomCircleArrowDownIcon: React.FC<CustomIconProps> = ({
  width = 24,
  height = 24,
  color = '#6E6B7B',
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12ZM16.7 12.7L12.7 16.7C12.6 16.8 12.5 16.9 12.4 16.9C12.3 17 12.1 17 12 17C11.9 17 11.7 17 11.6 16.9C11.5 16.9 11.4 16.8 11.3 16.7L7.3 12.7C6.9 12.3 6.9 11.7 7.3 11.3C7.7 10.9 8.3 10.9 8.7 11.3L11 13.6V8C11 7.4 11.4 7 12 7C12.6 7 13 7.4 13 8V13.6L15.3 11.3C15.7 10.9 16.3 10.9 16.7 11.3C17.1 11.7 17.1 12.3 16.7 12.7ZM12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47360"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12ZM16.7 12.7L12.7 16.7C12.6 16.8 12.5 16.9 12.4 16.9C12.3 17 12.1 17 12 17C11.9 17 11.7 17 11.6 16.9C11.5 16.9 11.4 16.8 11.3 16.7L7.3 12.7C6.9 12.3 6.9 11.7 7.3 11.3C7.7 10.9 8.3 10.9 8.7 11.3L11 13.6V8C11 7.4 11.4 7 12 7C12.6 7 13 7.4 13 8V13.6L15.3 11.3C15.7 10.9 16.3 10.9 16.7 11.3C17.1 11.7 17.1 12.3 16.7 12.7ZM12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47360)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
