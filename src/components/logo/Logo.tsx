import React from 'react';
import { TrumioLogo } from '../../assets/icons';
import { TrumioName } from '../../assets/icons';
import { Typography } from '../typographies/Typography';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({
  logoWidth,
  logoHeight,
  nameWidth,
  nameHeight,
  className,
  color,
  logoUpperColor,
  logoCenterColor,
  logoLowerColor,
}) => {
  return (
    <Typography tag="div" className={className}>
      {logoWidth && logoHeight ? (
        <TrumioLogo
          width={logoWidth}
          height={logoHeight}
          logoUpperColor={logoUpperColor}
          logoCenterColor={logoCenterColor}
          logoLowerColor={logoLowerColor}
        />
      ) : null}
      {nameWidth && nameHeight ? <TrumioName width={nameWidth} height={nameHeight} color={color} /> : null}
    </Typography>
  );
};
