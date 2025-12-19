export interface GrowthBadgeProps {
  percentage: string | null | undefined;
  className?: string;
  variant?: 'positive' | 'negative' | 'neutral';
  isShowBadge?: boolean;
}
