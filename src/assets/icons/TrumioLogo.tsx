import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  logoCenterColor?: string;
  logoUpperColor?: string;
  logoLowerColor?: string;
}

export const TrumioLogo: React.FC<LogoProps> = ({
  width = 731.491,
  height = 612.19,
  logoUpperColor,
  logoCenterColor,
  logoLowerColor,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 775 895"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="logo"
      >
        <path
          d="M62.5072 259.999L148.651 210.262L147.867 526.943L222.136 484.039V352.752L386.021 258.094L508.683 328.891L731.491 198.724L387.366 0L0 223.704V612.19L62.5072 576.12V259.999ZM236.811 160.525L391.174 71.4689L607.821 196.596L523.022 246.108L391.174 169.935L236.811 258.991V160.525Z"
          fill={logoUpperColor}
        />
        <path
          d="M713.429 319.984V636.216L627.285 685.953L628.069 369.273L549.207 414.864V542.343L385.322 637.001L265.684 567.884L42.988 696.483L386.778 894.983L774.031 671.279V285.033L713.429 319.984ZM544.726 734.794L390.363 823.85L170.915 697.155L256.274 647.867L390.363 725.273L544.726 636.216V734.794Z"
          fill={logoCenterColor}
        />
        <path
          d="M297 396.158V499.217L386.168 550.746L475.448 499.217V396.158L386.168 344.629L297 396.158Z"
          fill={logoLowerColor}
        />
      </svg>
    </>
  );
};
