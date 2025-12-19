export interface FileUploadProps {
  className?: string;
  onChange?: (files: File[]) => void;
  multiple?: boolean;
  progress: number;
  label: string;
  status?: 'idle' | 'loading' | 'success' | 'error';
  table?: React.ReactNode;
  error?: boolean;
  resetKey?: string;
  allowedExtensions?: string[];
  onWrongFileTypeUpload?: () => void;
}
export interface UploadedFile {
  file: File;
  status: 'uploading' | 'uploaded';
}
