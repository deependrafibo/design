import React from 'react';
import { CustomIconProps } from './types';

export const Asists: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="37.5" fill={color} fill-opacity="0.12" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.75 19.5H50.25C53.225 19.5 55.5 21.775 55.5 24.75V42.25C55.5 45.225 53.225 47.5 50.25 47.5H29.95L23.475 53.975C23.125 54.325 22.775 54.5 22.25 54.5C22.075 54.5 21.725 54.5 21.55 54.325C20.85 54.15 20.5 53.45 20.5 52.75V24.75C20.5 21.775 22.775 19.5 25.75 19.5ZM50.25 44C51.3 44 52 43.3 52 42.25V24.75C52 23.7 51.3 23 50.25 23H25.75C24.7 23 24 23.7 24 24.75V48.55L28.025 44.525C28.375 44.175 28.725 44 29.25 44H50.25Z"
      fill="black"
    />
    <mask
      id="mask0_4007_44260"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="20"
      y="19"
      width="36"
      height="36"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.75 19.5H50.25C53.225 19.5 55.5 21.775 55.5 24.75V42.25C55.5 45.225 53.225 47.5 50.25 47.5H29.95L23.475 53.975C23.125 54.325 22.775 54.5 22.25 54.5C22.075 54.5 21.725 54.5 21.55 54.325C20.85 54.15 20.5 53.45 20.5 52.75V24.75C20.5 21.775 22.775 19.5 25.75 19.5ZM50.25 44C51.3 44 52 43.3 52 42.25V24.75C52 23.7 51.3 23 50.25 23H25.75C24.7 23 24 23.7 24 24.75V48.55L28.025 44.525C28.375 44.175 28.725 44 29.25 44H50.25Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_44260)">
      <rect x="17" y="16" width="42" height="42" fill={color} />
    </g>
  </svg>
);
