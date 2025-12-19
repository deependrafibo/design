export interface ImageInputProps {
  onImageSelect: (file: File) => void;
  onUpdateClick?: () => void;
  onRemoveImage?: () => void;
  currentImageUrl?: string;
  updateButtonLabel?: string;
  editButtonLabel?: string;
  tooltipText?: string;
  allowedFileTypes?: string[];
  className?: string;
  disabled?: boolean;
  customPlaceholder?: React.ReactNode | string;
  useTransparentBackground?: boolean;
}
