import React from 'react';
import { CustomIconProps } from './types';

export const Resarch: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#28C76F', backgroundColor }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.5 21.25V26.5H22.25V21.25H27.5ZM19.625 18.625V29.125H30.125V18.625H19.625ZM40.625 25.1875V30.4375H35.375V25.1875H40.625ZM32.75 22.5625V33.0625H43.25V22.5625H32.75ZM27.5 37V42.25H22.25V37H27.5ZM19.625 34.375V44.875H30.125V34.375H19.625Z"
      fill={color}
    />
    <path
      d="M45.875 29.125V37H38V44.875H30.125V55.375H56.375V29.125H45.875ZM40.625 39.625H45.875V44.875H40.625V39.625ZM38 52.75H32.75V47.5H38V52.75ZM45.875 52.75H40.625V47.5H45.875V52.75ZM53.75 52.75H48.5V47.5H53.75V52.75ZM53.75 44.875H48.5V39.625H53.75V44.875ZM48.5 37V31.75H53.75V37H48.5Z"
      fill={color}
    />
    <circle cx="37.5" cy="37.5" r="37.5" fill={backgroundColor} fill-opacity="0.12" />
  </svg>
);
