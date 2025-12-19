import React from 'react';
import { ModifiedProgressBarProps } from './types';

export const ModifiedProgressBar: React.FC<ModifiedProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-full p-4 bg-white flex items-center gap-4">
      <div className="text-sm font-normal text-neutral-500 mb-2">{label}</div>
      <div className="w-[174px] h-4 bg-neutral-50 rounded-full mb-2">
        <div
          role="progressbar"
          aria-valuenow={progress}
          className={`h-full rounded-full bg-primary-500 transition-all ease-in-out duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
