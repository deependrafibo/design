import React from 'react';
import { CustomIconProps } from './types';

export const CollapseIcon: React.FC<CustomIconProps> = ({ width = 22, height = 22, color = '#0185E4' }) => (
  <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4168 1.8335H4.5835C3.02516 1.8335 1.8335 3.02516 1.8335 4.5835V17.4168C1.8335 18.9752 3.02516 20.1668 4.5835 20.1668H17.4168C18.9752 20.1668 20.1668 18.9752 20.1668 17.4168V4.5835C20.1668 3.02516 18.9752 1.8335 17.4168 1.8335ZM3.66683 17.4168V4.5835C3.66683 4.0335 4.0335 3.66683 4.5835 3.66683H7.3335V18.3335H4.5835C4.0335 18.3335 3.66683 17.9668 3.66683 17.4168ZM17.4168 18.3335C17.9668 18.3335 18.3335 17.9668 18.3335 17.4168V4.5835C18.3335 4.0335 17.9668 3.66683 17.4168 3.66683H9.16683V18.3335H17.4168Z"
      fill={color}
    />
    <mask id="mask0" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={1} y={1} width={20} height={20}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4168 1.8335H4.5835C3.02516 1.8335 1.8335 3.02516 1.8335 4.5835V17.4168C1.8335 18.9752 3.02516 20.1668 4.5835 20.1668H17.4168C18.9752 20.1668 20.1668 18.9752 20.1668 17.4168V4.5835C20.1668 3.02516 18.9752 1.8335 17.4168 1.8335ZM3.66683 17.4168V4.5835C3.66683 4.0335 4.0335 3.66683 4.5835 3.66683H7.3335V18.3335H4.5835C4.0335 18.3335 3.66683 17.9668 3.66683 17.4168ZM17.4168 18.3335C17.9668 18.3335 18.3335 17.9668 18.3335 17.4168V4.5835C18.3335 4.0335 17.9668 3.66683 17.4168 3.66683H9.16683V18.3335H17.4168Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect width="22" height="22" fill={color} />
    </g>
    <path
      d="M15.5832 7.3335L11.9165 11.0002L15.5832 14.6668"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
