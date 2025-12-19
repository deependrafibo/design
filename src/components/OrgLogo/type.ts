export interface OrgLogoProps {
  showText?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showPoweredBy?: boolean;
  orgName?: string;
  poweredByText?: string;
  logoSvg?: React.ReactNode;
  className?: string;
  imageUri?: string;
  imageWidth?: string;
  imageClassName?: string;
}
