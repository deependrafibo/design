import React from 'react';
import { CustomIconProps } from './types';

export const Paid: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#FF9F43' }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width={width} height={height} rx="37.5" fill={color} fill-opacity="0.12" />
    <path
      d="M32.25 40.8333C32.25 44.0092 37.3982 46.5833 43.75 46.5833C50.1018 46.5833 55.25 44.0092 55.25 40.8333C55.25 37.6574 50.1018 35.0833 43.75 35.0833C37.3982 35.0833 32.25 37.6574 32.25 40.8333Z"
      stroke="#FF9F43"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.25 40.8333V48.5C32.25 51.674 37.3982 54.25 43.75 54.25C50.1018 54.25 55.25 51.674 55.25 48.5V40.8333M20.75 25.5C20.75 27.5547 22.9427 29.4522 26.5 30.4795C30.0573 31.5068 34.4427 31.5068 38 30.4795C41.5573 29.4522 43.75 27.5547 43.75 25.5C43.75 23.4453 41.5573 21.5478 38 20.5205C34.4427 19.4932 30.0573 19.4932 26.5 20.5205C22.9427 21.5478 20.75 23.4453 20.75 25.5Z"
      stroke="#FF9F43"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.75 25.5V44.6667C20.75 46.3687 22.2297 47.4458 24.5833 48.5"
      stroke="#FF9F43"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.75 35.0833C20.75 36.7853 22.2297 37.8625 24.5833 38.9166"
      stroke="#FF9F43"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
