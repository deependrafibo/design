import React from 'react';
import { CustomIconProps } from './types';

export const Achieve: React.FC<CustomIconProps> = ({ width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="16" height="16" fill="url(#pattern0_21635_344510)" />
    <defs>
      <pattern id="pattern0_21635_344510" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_21635_344510" transform="scale(0.00195312)" />
      </pattern>
      <image
        id="image0_21635_344510"
        width="512"
        height="512"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6..." // truncated
      />
    </defs>
  </svg>
);
