import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowDown: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_4007_47366"
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
        d="M4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V16.5858L18.2929 11.2929C18.6834 10.9024 19.3166 10.9024 19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7085 19.7057C12.7044 19.7098 12.7003 19.7139 12.6961 19.718C12.5161 19.8925 12.2706 20 12 20C11.8633 20 11.7331 19.9726 11.6144 19.923C11.5011 19.8756 11.3947 19.8066 11.3016 19.7157C11.2983 19.7125 11.2951 19.7093 11.2919 19.7061L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47366)">
      <rect width="24" height="24" transform="matrix(0 1 1 0 0 0)" fill={color} />
    </g>
  </svg>
);
