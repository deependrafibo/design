import React from 'react';
import { OrgLogoProps } from './type';

export const OrgLogo: React.FC<OrgLogoProps> = ({
  showText = true,
  size = 'xl',
  showPoweredBy = true,
  orgName = 'Acme Corp',
  poweredByText = 'Trumio',
  logoSvg,
  className = '',
  imageUri,
  imageWidth,
  imageClassName = '',
}) => {
  const getSvgSize = () => {
    switch (size) {
      case 'xs':
        return { width: 12, height: 12 };
      case 'sm':
        return { width: 16, height: 16 };
      case 'md':
        return { width: 18, height: 18 };
      case 'lg':
        return { width: 20, height: 20 };
      case 'xl':
        return { width: 24, height: 24 };
      default:
        return { width: 22, height: 22 };
    }
  };

  const { width, height } = getSvgSize();

  const defaultLogoSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 24"
      fill="none"
      style={{ width, height }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M14.8462 2.57143L0 11.1429V6L10.3956 0L14.8462 2.57143Z" fill="#0185E4" />
      <path d="M20.7912 6V8.96703L2.57143 19.4835L0 18V15.2088L18.3626 4.6044L20.7912 6Z" fill="#0185E4" />
      <path d="M6.08791 21.5165L20.7912 13.033V18L10.3956 24L6.08791 21.5165Z" fill="#0185E4" />
    </svg>
  );

  if (imageUri) {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="w-fit">
          <img
            src={imageUri}
            alt={`${orgName} logo`}
            className={`${imageWidth || 'w-full'} h-auto object-contain ${imageClassName}`}
            data-testid="org-logo-image"
          />
        </div>
        {showText && showPoweredBy && poweredByText && (
          <p className="mt-2 text-xs text-gray-400 font-medium font-Montserrat">
            Powered by <span className="text-primary-500 font-semibold">{poweredByText}</span>
          </p>
        )}
      </div>
    );
  }

  // When showText is false, center everything vertically
  if (!showText) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="flex-shrink-0" style={{ width, height }} data-testid="org-logo">
          {logoSvg || defaultLogoSvg}
        </div>
        {showPoweredBy && poweredByText && (
          <p className="mt-2 text-xs text-gray-400 font-medium font-Montserrat">
            Powered by <span className="text-primary-500 font-semibold">{poweredByText}</span>
          </p>
        )}
      </div>
    );
  }

  // When showText is true, use horizontal layout
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <div className="flex-shrink-0" style={{ width, height }} data-testid="org-logo">
        {logoSvg || defaultLogoSvg}
      </div>

      <div>
        <p className="text-lg text-[#5F6D7E] font-bold font-Inter">{orgName}</p>
        {showPoweredBy && poweredByText && (
          <p className="text-xs text-gray-400 font-medium font-Montserrat">
            Powered by <span className="text-primary-500 font-semibold">{poweredByText}</span>
          </p>
        )}
      </div>
    </div>
  );
};
