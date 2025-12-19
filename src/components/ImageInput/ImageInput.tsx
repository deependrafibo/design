import React, { useRef, useState } from 'react';
import { ImageInputProps } from './types';
import { Avatar } from '../avatar/Avatar';
import { Tooltip } from '../tooltip/Tooltip';
import { CustomInfo } from '@/assets/icons/CustomInfo';
import { Trash2, Upload } from 'react-feather';

export const ImageInput: React.FC<ImageInputProps> = ({
  onImageSelect,
  currentImageUrl,
  updateButtonLabel = 'Update Picture',
  editButtonLabel,
  tooltipText = 'Allowed file types: png, jpg, jpeg.',
  allowedFileTypes = ['png', 'jpg', 'jpeg'],
  className = '',
  disabled = false,
  onRemoveImage,
  customPlaceholder,
  useTransparentBackground = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUpdateClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUploadClick = () => {
    setIsDropdownOpen(false);
    fileInputRef.current?.click();
  };

  const handleRemoveClick = () => {
    setIsDropdownOpen(false);
    setPreview(null);
    onRemoveImage?.();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!allowedFileTypes.includes(fileExtension)) {
      alert(`File type not allowed. Please use: ${allowedFileTypes.join(', ')}`);
      return;
    }
    setPreview(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setPreview(dataUrl);
    };
    reader.readAsDataURL(file);
    onImageSelect(file);
  };

  const hasImage = Boolean(preview || currentImageUrl);
  const buttonLabel = hasImage && editButtonLabel ? editButtonLabel : updateButtonLabel;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative">
        <Avatar
          src={preview || currentImageUrl}
          size={100}
          customPlaceholder={customPlaceholder}
          useTransparentBackground={useTransparentBackground}
        />
      </div>
      <div className="flex items-center gap-2 relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={handleUpdateClick}
          disabled={disabled}
          className={`bg-primary-500 text-white py-[10px] px-[20px] rounded-md transition-colors disabled:bg-blue-300 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {buttonLabel}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-max bg-white rounded-md shadow-lg z-10 border border-gray-200">
            <div className="">
              <button
                onClick={handleUploadClick}
                className="w-full text-left px-4 py-2 text-sm text-[#6E6B7B] hover:text-[#0185E4] hover:bg-[#0185E4]/10 flex items-center gap-2"
              >
                <Upload size={16} />
                <span className="font-feature-none font-montserrat text-sm font-normal leading-[21px]">
                  Upload from device
                </span>
              </button>
              {hasImage && (
                <button
                  onClick={handleRemoveClick}
                  className="w-full text-left px-4 py-2 text-sm text-[#6E6B7B] flex items-center gap-2 hover:text-[#0185E4] hover:bg-[#0185E4]/10"
                >
                  <Trash2 size={16} />
                  Remove current picture
                </button>
              )}
            </div>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept={allowedFileTypes.map((type) => `.${type}`).join(',')}
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
          aria-label="choose a file"
        />
        <Tooltip message={tooltipText} position="right">
          <CustomInfo color="#BDBDBD" height={18} width={18} />
        </Tooltip>
      </div>
    </div>
  );
};
