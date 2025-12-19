import React from 'react';
import { CustomIconProps } from './types';

export const Secure: React.FC<CustomIconProps> = ({ width = 75, height = 75, color = '#28C76F' }) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="37.5" fill={color} fill-opacity="0.12" />
    <path
      d="M49.8125 34.375L47.0562 33.0625C44.825 32.0125 43.25 29.65 43.25 27.1562V18.625H56.375V27.1562C56.375 29.65 54.9313 32.0125 52.5688 33.0625L49.8125 34.375ZM45.875 21.25V27.1562C45.875 28.7312 46.7938 30.0437 48.1063 30.7L49.8125 31.4875L51.5187 30.7C52.8312 30.0437 53.75 28.6 53.75 27.1562V21.25H45.875Z"
      fill={color}
    />
    <path
      d="M53.75 37V44.875H22.25V23.875H38V21.25H22.25C20.8062 21.25 19.625 22.4312 19.625 23.875V44.875C19.625 46.3188 20.8062 47.5 22.25 47.5H32.75V52.75H27.5V55.375H48.5V52.75H43.25V47.5H53.75C55.1937 47.5 56.375 46.3188 56.375 44.875V37H53.75ZM40.625 52.75H35.375V47.5H40.625V52.75Z"
      fill={color}
    />
  </svg>
);
