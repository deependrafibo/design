import React, { useState } from 'react';
import { FileUploadProps, UploadedFile } from './types';
import {
  CustomDocumentDoc,
  CustomDocumentGif,
  CustomDocumentJpg,
  CustomDocumentMP3,
  CustomDocumentPdf,
  CustomDocumentPpt,
  CustomDocumentPSD,
  CustomDocumentTxt,
  CustomDocumentXls,
  CustomDocumentZip,
  CustomTrash,
} from '../../assets/icons';
import { ModifiedProgressBar } from '../ModifiedProgressBar/ModifiedProgressBar';

export const FileUpload: React.FC<FileUploadProps & { onRemoveAll?: () => void }> = ({
  className,
  onChange,
  multiple = true,
  label,
  progress,
  status,
  table,
  error,
  onRemoveAll,
  allowedExtensions,
  onWrongFileTypeUpload = () => {},
}) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const isExtensionAllowed = (filename: string) => {
    if (!allowedExtensions || allowedExtensions.length === 0) return true;
    const ext = filename.split('.').pop()?.toLowerCase();
    const isAllowed = ext && allowedExtensions.includes(ext);
    if (!isAllowed && typeof onWrongFileTypeUpload === 'function') {
      onWrongFileTypeUpload();
    }
    return ext ? allowedExtensions.includes(ext) : false;
  };

  const simulateUpload = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => isExtensionAllowed(file.name));
    if (validFiles.length === 0) return;

    const wrappedFiles: UploadedFile[] = validFiles.map((file) => ({
      file,
      status: 'uploading',
    }));

    const finalFiles = multiple ? [...files, ...wrappedFiles] : [wrappedFiles[0]];

    setFiles(finalFiles);
    onChange?.(finalFiles.map((f) => f.file));

    setTimeout(() => {
      setFiles((prev) =>
        prev.map((item) => ({
          ...item,
          status: 'uploaded',
        })),
      );
    }, 1500);
  };

  const handleClick = (index: number) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
    onChange?.(updated.map((f) => f.file));
    if (updated.length === 0 && onRemoveAll) {
      onRemoveAll();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      simulateUpload(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      simulateUpload(Array.from(e.dataTransfer.files));
      e.dataTransfer.clearData();
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const getFileTypeIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf':
        return <CustomDocumentPdf width={30} height={30} />;
      case 'doc':
      case 'docx':
        return <CustomDocumentDoc width={30} height={30} />;
      case 'xls':
      case 'csv':
      case 'xlsx':
        return <CustomDocumentXls width={30} height={30} />;
      case 'ppt':
      case 'pptx':
        return <CustomDocumentPpt width={30} height={30} />;
      case 'png':
      case 'jpg':
      case 'jpeg':
        return <CustomDocumentJpg width={30} height={30} />;
      case 'gif':
        return <CustomDocumentGif width={30} height={30} />;
      case 'txt':
        return <CustomDocumentTxt width={30} height={30} />;
      case 'psd':
        return <CustomDocumentPSD width={30} height={30} />;
      case 'mp3':
        return <CustomDocumentMP3 width={30} height={30} />;
      case 'zip':
        return <CustomDocumentZip width={30} height={30} />;
      default:
        return <span className="text-xs font-bold text-blue-600">FILE</span>;
    }
  };

  return (
    <div className={` ${className}`}>
      {(!files.length || multiple) && (
        <div
          className="border border-dashed p-8 text-center cursor-pointer transition border-blue-600"
          onClick={() => document.getElementById('fileInput')?.click()}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
            multiple={multiple}
            aria-label="Drop files here or click to upload"
          />
          <p className="text-base font-medium font-Montserrat text-blue-600">Drop files here or click to upload</p>
          <p className="text-blue-600 text-xs font-Montserrat mt-[10px]">
            (This is just a demo dropzone. Selected files are not actually uploaded.)
          </p>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 flex items-center gap-4 justify-between w-full">
          {files.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-sm rounded-md px-4 py-3 w-full ${error ? 'border-2 border-red-500' : ''}`}
            >
              <div className="flex items-center">
                <div className="flex items-center gap-2 w-1/4">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center">
                    {getFileTypeIcon(item.file.name)}
                  </div>
                  <span className="text-blue-600 text-sm font-medium font-Montserrat">{item.file.name}</span>
                </div>

                <div className="flex-1 flex justify-center items-center">
                  <ModifiedProgressBar label={label} progress={progress} status={status} />
                </div>

                <div className="w-1/4 flex justify-end">
                  <button
                    onClick={() => handleClick(index)}
                    className="px-2 w-[42px] h-[42px] rounded-full bg-[#FCE9EB]"
                  >
                    <CustomTrash width={24} height={24} color="#EA5455" />
                  </button>
                </div>
              </div>
              {table && error && <div className="mt-4">{table}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
