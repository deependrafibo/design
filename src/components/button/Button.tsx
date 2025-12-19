import React from 'react';
import { buttonThemes } from './button.styles';
import { ButtonProps } from './types';
import { iconComponents, IconName } from '../../utils/getIcons';
import { Spinner } from '../ui/spinner';
import '../../tailwindcss/theme.css';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  children,
  onClick,
  disabled = false,
  loading = false,
  loaderSize = 'small',
  loaderColor = 'white',
  className = '',
}) => {
  const theme = buttonThemes[variant];

  const getIcon = (iconName: IconName) => {
    const IconComponent = iconComponents[iconName];
    if (!IconComponent) return null;

    const fillColor = disabled && theme.iconFillDisabled ? theme.iconFillDisabled : theme.iconFill || 'currentColor';

    return <IconComponent color={fillColor} />;
  };

  return (
    <button onClick={onClick} disabled={disabled || loading} className={`${theme.className} ${className}`}>
      {loading ? (
        <Spinner size={loaderSize} className={`text-${loaderColor}`} />
      ) : (
        <div className="flex items-center gap-2">
          {icon && iconPosition === 'left' && getIcon(icon)}
          <span>{children}</span>
          {icon && iconPosition === 'right' && getIcon(icon)}
        </div>
      )}
    </button>
  );
};
