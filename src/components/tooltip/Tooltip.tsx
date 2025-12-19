import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { TooltipProps } from './types';

export const Tooltip: React.FC<TooltipProps> = ({
  message,
  position = 'top',
  className = '',
  triangleStyle,
  zIndex,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (visible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      let top = 0,
        left = 0;
      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + 8;
          break;
        default:
          break;
      }
      setCoords({ top: Math.max(top, 0), left: Math.max(left, 0) });
    }
  }, [visible, position]);

  const triangleClasses = {
    top: 'left-1/2 -translate-x-1/2 bottom-1 translate-y-full rotate-45',
    bottom: 'left-1/2 -translate-x-1/2 top-1 -translate-y-full rotate-45',
    left: 'top-1/2 -translate-y-1/2 right-1 translate-x-full rotate-45',
    right: 'top-1/2 -translate-y-1/2 left-1 -translate-x-full rotate-45',
  };

  const tooltipContent = visible ? (
    <div
      ref={tooltipRef}
      className={`fixed ${className} bg-black-400 text-white text-sm px-3 py-2 rounded-md shadow-md break-words min-w-[120px] max-w-sm`}
      style={{ top: coords.top, left: coords.left, zIndex: zIndex ?? 1000 }}
    >
      {message}
      <div
        className={`absolute w-3 h-3 bg-black-400 ${triangleClasses[position]} ${triangleStyle} m-1`}
        style={{ zIndex: (zIndex ?? 1000) + 1 }}
      />
    </div>
  ) : null;

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {typeof window !== 'undefined' && ReactDOM.createPortal(tooltipContent, document.body)}
    </div>
  );
};
