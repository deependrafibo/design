import React from 'react';
import { CustomIconProps } from './types';

export const Ecommerce: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#6E6B7B' }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M52 36.125V28.25L44.125 19.5H25.75C25.2859 19.5 24.8408 19.6844 24.5126 20.0126C24.1844 20.3408 24 20.7859 24 21.25V52.75C24 53.2141 24.1844 53.6592 24.5126 53.9874C24.8408 54.3156 25.2859 54.5 25.75 54.5H36.25"
      stroke="#651FFF"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.25 19.5V28.25H52M41.675 42.25H50.075L52.875 45.8533L45.875 54.5L38.875 45.8533L41.675 42.25Z"
      stroke="#651FFF"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="37.5" cy="37.5" r="37.5" fill={color} fill-opacity="0.12" />
  </svg>
);
