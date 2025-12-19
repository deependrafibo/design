import React from 'react';
import { CustomIconProps } from './types';

export const University: React.FC<CustomIconProps> = ({
  width = 75,
  height = 75,
  color = '#6E6B7B',
  backgroundColor,
}) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="37.5" fill={backgroundColor} fill-opacity="0.12" />
    <path
      d="M38 22.25L18.75 32.75L38 43.25L53.75 34.6575V46.75H57.25V32.75M25.75 40.065V47.065L38 53.75L50.25 47.065V40.065L38 46.75L25.75 40.065Z"
      fill={color}
    />
  </svg>
);
