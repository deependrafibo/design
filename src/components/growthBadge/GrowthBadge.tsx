import React from 'react';
import { CustomTrendingDown } from '../../assets/icons/CustomTrendingDown';
import { CustomTrendingUP } from '../../assets/icons/CustomTrendingUP';
import { GrowthBadgeProps } from './types';

const GrowthIcon: React.FC<{ variant: 'positive' | 'negative' | 'neutral' }> = ({ variant }) => {
  if (variant === 'neutral') {
    return null;
  } else if (variant === 'positive') {
    return <CustomTrendingUP width={14} height={14} color="currentColor" />;
  } else {
    return <CustomTrendingDown width={14} height={14} color="currentColor" />;
  }
};

export const GrowthBadge: React.FC<Omit<GrowthBadgeProps, 'variant'>> = ({
  percentage,
  className = '',
  isShowBadge = true,
}) => {
  const percentageExists = percentage !== undefined && percentage !== null && percentage !== '';
  if (!percentageExists && isShowBadge) {
    return null;
  }
  const numericValue = parseFloat(String(percentage)?.replace(/[%]/g, ''));

  const autoVariant: 'positive' | 'negative' | 'neutral' =
    numericValue === 0 ? 'neutral' : numericValue > 0 ? 'positive' : 'negative';

  const formatDisplayValue = (value: string) => {
    const clean = String(value)?.replace(/[%+-]/g, '');
    const num = parseInt(clean);

    if (isNaN(num)) return value;

    const sign = String(value)?.startsWith('-') ? '' : String(value)?.startsWith('+') ? '' : num > 0 ? '' : '';
    const formatted = num >= 10 ? num.toString() : num.toString()?.padStart(2, '0');
    return numericValue === 0 ? '0%' : `${sign}${formatted}%`;
  };

  const displayValue = formatDisplayValue(String(percentage));

  const variantClasses = {
    positive: 'bg-[#E5F8EE] text-success-500 ',
    negative: 'bg-[#FDEEED] text-error',
    neutral: 'bg-[#FFF9EA] text-yellow-500 border-gray-200',
  };

  return (
    isShowBadge && (
      <div
        className={`
          flex gap-1 items-center justify-center px-2 py-[3px] text-xs font-semibold leading-4 rounded-2xl w-fit
          ${variantClasses[autoVariant]}
          ${className}
        `}
      >
        <GrowthIcon variant={autoVariant} />
        <span>{displayValue}</span>
      </div>
    )
  );
};
