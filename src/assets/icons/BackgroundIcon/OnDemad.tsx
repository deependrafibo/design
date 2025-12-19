import React from 'react';
import { CustomIconProps } from './types';

export const OnDemad: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#6E6B7B', backgroundColor }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="37.5" fill={backgroundColor} fill-opacity="0.12" />
    <mask
      id="mask0_4007_44339"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="20"
      y="18"
      width="36"
      height="39"
    >
      <path
        d="M37.75 34C41.616 34 44.75 30.866 44.75 27C44.75 23.134 41.616 20 37.75 20C33.884 20 30.75 23.134 30.75 27C30.75 30.866 33.884 34 37.75 34Z"
        fill="white"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.5 55C53.5 46.3016 46.4484 39.25 37.75 39.25C29.0516 39.25 22 46.3016 22 55"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37.75 55L41.25 50.625L37.75 39.25L34.25 50.625L37.75 55Z"
        fill="white"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </mask>
    <g mask="url(#mask0_4007_44339)">
      <path d="M16.75 16.5H58.75V58.5H16.75V16.5Z" fill={color} />
    </g>
  </svg>
);
