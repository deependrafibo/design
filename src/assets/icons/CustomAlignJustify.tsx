import React from 'react';
import { CustomIconProps } from './types';

export const CustomAlignJustify: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 5C21.6 5 22 5.4 22 6C22 6.6 21.6 7 21 7H3C2.4 7 2 6.6 2 6C2 5.4 2.4 5 3 5H21ZM3 11H21C21.6 11 22 10.6 22 10C22 9.4 21.6 9 21 9H3C2.4 9 2 9.4 2 10C2 10.6 2.4 11 3 11ZM22 14C22 13.4 21.6 13 21 13H3C2.4 13 2 13.4 2 14C2 14.6 2.4 15 3 15H21C21.6 15 22 14.6 22 14ZM21 17C21.6 17 22 17.4 22 18C22 18.6 21.6 19 21 19H3C2.4 19 2 18.6 2 18C2 17.4 2.4 17 3 17H21Z"
        fill={color}
      />
      <mask
        id="mask0_4007_47354"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="5"
        width="20"
        height="14"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 5C21.6 5 22 5.4 22 6C22 6.6 21.6 7 21 7H3C2.4 7 2 6.6 2 6C2 5.4 2.4 5 3 5H21ZM3 11H21C21.6 11 22 10.6 22 10C22 9.4 21.6 9 21 9H3C2.4 9 2 9.4 2 10C2 10.6 2.4 11 3 11ZM22 14C22 13.4 21.6 13 21 13H3C2.4 13 2 13.4 2 14C2 14.6 2.4 15 3 15H21C21.6 15 22 14.6 22 14ZM21 17C21.6 17 22 17.4 22 18C22 18.6 21.6 19 21 19H3C2.4 19 2 18.6 2 18C2 17.4 2.4 17 3 17H21Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_4007_47354)">
        <rect width="24" height="24" fill={color} />
      </g>
    </svg>
  );
};
