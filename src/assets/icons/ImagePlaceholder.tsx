import React from 'react';
import { CustomIconProps } from './BackgroundIcon/types';

export const ImagePlaceholder: React.FC<CustomIconProps> = ({
  width = 75,
  height = 75,
  color = '#6E6B7B',
  backgroundColor,
}) => (
  <svg width={width} height={height} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="37.5" cy="37.5" r="37.5" fill={backgroundColor || color} fillOpacity="0.12" />
    <svg x="20" y="20" width="35" height="35" viewBox="0 0 20 18" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
    </svg>
  </svg>
);
