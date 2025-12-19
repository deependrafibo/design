import React, { ReactNode } from 'react';
import { FontSize, FontVariant } from './types';

interface TypographyProps {
  variant?: FontVariant;
  size?: FontSize;
  children: ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

type TagStyle = {
  size: FontSize;
  variant: FontVariant;
};

const tagStyleMap: Record<string, TagStyle> = {
  h1: { size: '28', variant: 'semibold' },
  h2: { size: '26', variant: 'semibold' },
  h3: { size: '24', variant: 'semibold' },
  h4: { size: '20', variant: 'semibold' },
  h5: { size: '18', variant: 'semibold' },
  b1: { size: '16', variant: 'semibold' },
  b2: { size: '14', variant: 'semibold' },
  b3: { size: '12', variant: 'semibold' },
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'regular',
  size = '16',

  children,
  className = '',
  tag = 'div',
  ...props
}) => {
  const defaultStyle = tagStyleMap[tag as string];

  const finalVariant = variant || defaultStyle?.variant || 'regular';
  const finalSize = size || defaultStyle?.size || '16';

  const sizeMap: Record<FontSize, string> = {
    '28': 'text-[28px]',
    '26': 'text-[26px]',
    '24': 'text-[24px]',
    '20': 'text-[20px]',
    '18': 'text-[18px]',
    '16': 'text-[16px]',
    '14': 'text-[14px]',
    '12': 'text-[12px]',
  };

  const variantMap: Record<FontVariant, string> = {
    semibold: 'font-semibold',
    medium: 'font-medium',
    regular: 'font-normal',
  };

  const sizeClass = sizeMap[finalSize as FontSize] || 'text-[16px]';
  const variantClass = variantMap[finalVariant as FontVariant] || 'font-normal';
  const Tag = tag;

  const baseClasses = `${sizeClass} ${variantClass}`;
  const finalClassName = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <Tag className={finalClassName} {...props}>
      {children}
    </Tag>
  );
};
