import React from 'react';
import { CustomIconProps } from './types';

export const CustomCircleArrowRightIcon: React.FC<CustomIconProps> = ({
  width = 24,
  height = 24,
  color = '#6E6B7B',
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1ZM12 21C7 21 3 17 3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21ZM16.9373 11.7314C16.9172 11.6828 16.9 11.6414 16.9 11.6C16.9 11.5 16.8 11.4 16.7 11.3L12.7 7.3C12.3 6.9 11.7 6.9 11.3 7.3C10.9 7.7 10.9 8.3 11.3 8.7L13.6 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H13.6L11.3 15.3C10.9 15.7 10.9 16.3 11.3 16.7C11.5 16.9 11.7 17 12 17C12.3 17 12.5 16.9 12.7 16.7C13.1 16.3 13.1 15.7 12.7 15.3L10.4 13H16Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47362"
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
        d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1ZM12 21C7 21 3 17 3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21ZM16.9373 11.7314C16.9172 11.6828 16.9 11.6414 16.9 11.6C16.9 11.5 16.8 11.4 16.7 11.3L12.7 7.3C12.3 6.9 11.7 6.9 11.3 7.3C10.9 7.7 10.9 8.3 11.3 8.7L13.6 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H13.6L11.3 15.3C10.9 15.7 10.9 16.3 11.3 16.7C11.5 16.9 11.7 17 12 17C12.3 17 12.5 16.9 12.7 16.7C13.1 16.3 13.1 15.7 12.7 15.3L10.4 13H16Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47362)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
