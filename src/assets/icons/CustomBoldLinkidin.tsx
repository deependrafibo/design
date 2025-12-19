import React from 'react';
import { CustomIconProps } from './types';

export const CustomBoldLinkidin: React.FC<CustomIconProps> = ({ width = 24, height = 24, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.454 6.01757C4.8532 6.01757 5.98747 4.8833 5.98747 3.4841C5.98747 2.0849 4.8532 0.950623 3.454 0.950623C2.0548 0.950623 0.920525 2.0849 0.920525 3.4841C0.920525 4.8833 2.0548 6.01757 3.454 6.01757ZM8.37968 7.93736V21.993H12.7438V15.0422C12.7438 13.2081 13.0888 11.4319 15.3629 11.4319C17.6058 11.4319 17.6336 13.5288 17.6336 15.158V21.9942H22V14.2861C22 10.4998 21.1848 7.58999 16.7594 7.58999C14.6346 7.58999 13.2104 8.75599 12.628 9.85946H12.5689V7.93736H8.37968ZM1.26789 7.93736H5.63895V21.993H1.26789V7.93736Z"
      fill={color}
    />
  </svg>
);
