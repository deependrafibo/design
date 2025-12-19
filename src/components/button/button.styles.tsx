import { ButtonTheme } from './types';

const primary = {
  base: 'flex items-center justify-center gap-2 rounded-[6px] min-w-[64px] shadow-primary-shadow disabled:hover:shadow-none disabled:shadow-none',
  backgroundColor: 'bg-primary-500 hover:shadow-primary-hover disabled:bg-disable-Blue',
  textColor: 'text-white text-center text-base font-semibold',
  padding: 'py-[10px] px-5',
  iconFill: 'white',
};

const outline = {
  base: 'flex items-center justify-center gap-2 rounded-[6px] min-w-[64px] disabled:hover:bg-transparent disabled:shadow-none',
  backgroundColor: 'border border-secondary-500 hover:bg-secondary-50 disabled:border-[#99C1E6]',
  textColor: 'text-secondary-500 text-center text-base font-semibold disabled:text-[#99C1E6]',
  padding: 'py-[10px] px-5',
  iconFill: '#0185E4',
  iconFillDisabled: '#99C1E6',
};

const text = {
  base: 'flex items-center justify-center gap-2 rounded-[6px] min-w-[64px] h-[38px] disabled:hover:bg-transparent disabled:shadow-none',
  backgroundColor: 'hover:bg-[#E5F3FC] hover:bg-[#E5F3FC]',
  textColor: 'text-[#0185E4] text-center text-base font-semibold tracking-[0.4px] disabled:text-[#99C1E6] ',
  padding: 'py-[2px] px-2',
  iconClassName: 'p-2 rounded-[52px] bg-[#E0F0FB] disabled:bg-[#E0F0FB]',
  iconFill: '#0185E4',
  iconFillDisabled: '#99C1E6',
};

const errorPrimary = {
  ...primary,
  backgroundColor: 'bg-error hover:shadow-error-hover disabled:bg-disable-error',
  iconFill: 'white',
};

const errorOutline = {
  ...outline,
  backgroundColor: 'border border-[#EA5455] hover:bg-[#FEEDEE] disabled:border-[#F6C2C2]',
  textColor: 'text-[#EA5455] disabled:text-[#F7BBBB]',
  iconFill: '#EA5455',
  iconFillDisabled: '#F7BBBB',
};

const errorText = {
  ...text,
  textColor: 'text-[#EA5455] disabled:[#F7BBBB]',
  backgroundColor: 'hover:bg-[#FEEDEE] ',
  iconFill: '#EA5455',
  iconFillDisabled: '#F7BBBB',
};

export const buttonThemes: Record<string, ButtonTheme> = {
  primary: {
    className: `${primary.base} ${primary.backgroundColor} ${primary.textColor} ${primary.padding}`,
    iconFill: primary.iconFill,
  },
  outline: {
    className: `${outline.base} ${outline.backgroundColor} ${outline.textColor} ${outline.padding}`,
    iconFill: outline.iconFill,
    iconFillDisabled: outline.iconFillDisabled,
  },
  text: {
    className: `${text.base} ${text.backgroundColor} ${text.textColor} ${text.padding}`,
    iconFill: text.iconFill,
    iconFillDisabled: text.iconFillDisabled,
    iconClassName: text.iconClassName,
  },
  errorPrimary: {
    className: `${errorPrimary.base} ${errorPrimary.backgroundColor} ${primary.textColor} ${primary.padding}`,
    iconFill: errorPrimary.iconFill,
  },
  errorOutline: {
    className: `${errorOutline.base} ${errorOutline.backgroundColor} ${errorOutline.textColor} ${outline.padding}`,
    iconFill: errorOutline.iconFill,
    iconFillDisabled: errorOutline.iconFillDisabled,
  },
  errorText: {
    className: `${errorText.base} ${errorText.backgroundColor} ${errorText.textColor} ${text.padding}`,
    iconFill: errorText.iconFill,
    iconFillDisabled: errorText.iconFillDisabled,
  },
};
