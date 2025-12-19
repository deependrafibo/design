import React from 'react';
import { CircularProgressBarProps } from './types';

const getColor = (value: number) => {
  if (value <= 25) return '#EA5455';
  if (value <= 50) return '#F5B845';
  return '#3BC795';
};

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  const radius = 30;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const clamped = Math.min(Math.max(value, 0), 100);
  const strokeDashoffset = circumference - (clamped / 100) * circumference;
  const strokeColor = getColor(clamped);

  return (
    <div className="flex justify-center items-center mb-6">
      <svg height={radius * 2} width={radius * 2}>
        <circle stroke="#E9ECEF" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#5E5873"
          fontSize="10"
          fontFamily="Montserrat, sans-serif"
        >
          {clamped}%
        </text>
      </svg>
    </div>
  );
};
