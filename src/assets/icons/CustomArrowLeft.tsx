import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowLeft: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_4007_47367"
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
        d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29426 12.7085C4.29015 12.7044 4.28608 12.7003 4.28205 12.6961C4.10747 12.5161 4 12.2706 4 12C4 11.8633 4.02742 11.7331 4.07705 11.6144C4.12435 11.5011 4.19344 11.3947 4.28431 11.3016C4.28749 11.2983 4.2907 11.2951 4.29392 11.2919L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47367)">
      <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill={color} />
    </g>
  </svg>
);
