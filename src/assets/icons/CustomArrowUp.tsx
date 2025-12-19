import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowUp: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_4007_47371"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="4"
      width="16"
      height="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29289 12.7071C4.68342 13.0976 5.31658 13.0976 5.70711 12.7071L11 7.41421V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V7.41421L18.2929 12.7071C18.6834 13.0976 19.3166 13.0976 19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7085 4.29426C12.7044 4.29015 12.7003 4.28608 12.6961 4.28205C12.5161 4.10747 12.2706 4 12 4C11.8633 4 11.7331 4.02742 11.6144 4.07705C11.5011 4.12435 11.3947 4.19344 11.3016 4.28431C11.2983 4.28749 11.2951 4.2907 11.2919 4.29392L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47371)">
      <rect y="24" width="24" height="24" transform="rotate(-90 0 24)" fill={color} />
    </g>
  </svg>
);
