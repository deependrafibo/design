export interface GradeProps {
  value: 'A' | 'B' | 'C' | 'D' | 'E';
  onClick?: () => void;
  size?: number;
  textSize?: number;
  className?: string;
}
