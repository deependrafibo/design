import React from 'react';
import { CustomIconProps } from './types';

export const Protoying: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#FF9F43' }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="75" height="75" rx="37.5" fill="#FF9F43" fill-opacity="0.12" />
    <path
      d="M39.5 35L36 38.5L32.5 35L36 31.5L39.5 35ZM36 24.5L39.71 28.21L44.085 23.835L36 15.75L27.915 23.835L32.29 28.21L36 24.5ZM25.5 35L29.21 31.29L24.835 26.915L16.75 35L24.835 43.085L29.21 38.71L25.5 35ZM46.5 35L42.79 38.71L47.165 43.085L55.25 35L47.165 26.915L42.79 31.29L46.5 35ZM36 45.5L32.29 41.79L27.915 46.165L36 54.25L44.085 46.165L39.71 41.79L36 45.5Z"
      fill={color}
    />
  </svg>
);
