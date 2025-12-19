import React, { useState } from 'react';
import { AvatarProps } from './type';
import { iconComponents } from '@/utils/getIcons';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'avatar',
  size = 80,
  customPlaceholder,
  useTransparentBackground = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const ImageIcon = iconComponents['image'];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Generate consistent color based on initials
  const getBackgroundColor = (initials: string) => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-orange-500',
      'bg-teal-500',
      'bg-cyan-500',
      'bg-lime-500',
      'bg-emerald-500',
      'bg-violet-500',
      'bg-fuchsia-500',
      'bg-rose-500',
      'bg-sky-500',
      'bg-amber-500',
      'bg-slate-500',
    ];

    // Create a simple hash from the initials
    let hash = 0;
    for (let i = 0; i < initials.length; i++) {
      const char = initials.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }

    // Use absolute value and modulo to get consistent index
    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
  };

  const fontSize = Math.floor(size / 2.5);
  const showInitials = !src || imageError;
  const initials = showInitials ? getInitials(alt) : '';
  const backgroundColorClass = showInitials && initials ? getBackgroundColor(initials) : 'bg-gray-100';

  return (
    <div
      className={`relative flex items-center justify-center rounded-full overflow-hidden cursor-pointer ${useTransparentBackground ? 'bg-gray-100' : backgroundColorClass}`}
      style={{ width: size, height: size }}
    >
      {!showInitials ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" onError={() => setImageError(true)} />
      ) : customPlaceholder ? (
        <div className="text-gray-400 rounded-full">{customPlaceholder}</div>
      ) : initials ? (
        <span className="font-medium text-white" style={{ fontSize: `${fontSize}px` }}>
          {initials}
        </span>
      ) : (
        <div className="text-gray-400">
          <ImageIcon />
        </div>
      )}
    </div>
  );
};
