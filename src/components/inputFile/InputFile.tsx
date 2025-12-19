import { useState } from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
  type?: string;
  value?: string;
  labelClassName?: string;
  labelStyle?: string;
  onchange?: (value: string) => void;
  hasError?: boolean;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  accept?: string;
}
export const InputFile: React.FC<InputProps> = ({
  label,
  placeholder,
  className,
  labelClassName,
  value,
  labelStyle,
  onchange,
}) => {
  const [file, setfile] = useState(value || '');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setfile(val);
    if (onchange) {
      onchange(val);
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
      <label htmlFor="file-upload" className={`text-gray-700 font-medium ${labelClassName}`}>
        {label}
      </label>
      <div className="relative w-full">
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          value={file}
          className={`w-full border border-gray-300 rounded-md py-2 pl-24 pr-3 text-gray-600 placeholder-gray-400 placeholder:pl-36 ${className}`}
        />
        <label
          htmlFor="file-upload"
          className={`absolute left-3 top-1 bottom-1 bg-[#4294D1] text-white px-4 flex items-center rounded-md cursor-pointer hover:bg-blue-600 ${labelStyle} `}
        >
          Choose File
        </label>
        <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
      </div>
    </div>
  );
};
