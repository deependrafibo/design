export interface ModifiedProgressBarProps {
  progress: number;
  label: string;
  isLoading?: boolean;
  status?: 'idle' | 'loading' | 'success' | 'error';
}
