import { JSX } from 'react';

export type TypographyTheme = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  textDecoration?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  minWidth?: string;
};

export type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  theme: TypographyTheme;
  tag: T;
  children: React.ReactNode;
} & JSX.IntrinsicElements[T];

export type FontSize = '28' | '26' | '24' | '20' | '18' | '16' | '14' | '12';

export type FontVariant = 'semibold' | 'medium' | 'regular';
