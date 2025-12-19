import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowUpLeft: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.41421 8L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L8 9.41421V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.86441 6.02699 6.73512 6.07588 6.61722C6.12468 6.49927 6.19702 6.38877 6.29289 6.29289C6.48816 6.09763 6.74408 6 7 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H9.41421Z"
      fill={color}
    />
    <mask
      id="mask0_4007_47369"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="6"
      y="6"
      width="12"
      height="12"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41421 8L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L8 9.41421V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.86441 6.02699 6.73512 6.07588 6.61722C6.12468 6.49927 6.19702 6.38877 6.29289 6.29289C6.48816 6.09763 6.74408 6 7 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H9.41421Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_4007_47369)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
