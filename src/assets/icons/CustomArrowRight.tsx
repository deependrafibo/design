import React from 'react';
import { CustomIconProps } from './types';

export const CustomArrowRight: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_4007_47368"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="4"
      width="16"
      height="16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7057 12.7085C19.7098 12.7044 19.7139 12.7003 19.718 12.6961C19.8925 12.5161 20 12.2706 20 12C20 11.8633 19.9726 11.7331 19.923 11.6144C19.8756 11.5011 19.8066 11.3947 19.7157 11.3016C19.7125 11.2983 19.7093 11.2951 19.7061 11.2919L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289Z"
        fill={color}
      />
    </mask>
    <g mask="url(#mask0_4007_47368)">
      <rect width="24" height="24" fill={color} />
    </g>
  </svg>
);
