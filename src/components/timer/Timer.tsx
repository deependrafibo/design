import React, { useState, useEffect } from 'react';
import { TimerProps } from './types';
import { formatTime } from './utils';
import { timerStyles } from './timer.styles';

export const Timer: React.FC<TimerProps> = ({
  startTime,
  countUp = false,
  completionTime,
  onComplete,
  onZero,
  className = '',
}) => {
  const [currentTime, setCurrentTime] = useState<number>(startTime);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = countUp ? prevTime + 1 : prevTime - 1;

          // Check if timer reached zero
          if (newTime === 0 && onZero) {
            onZero();
          }

          // Check if timer should stop (countdown only)
          if (!countUp && newTime <= 0) {
            setIsRunning(false);
            if (onComplete) onComplete();
            return 0;
          }

          // Check if timer reached completionTime (count-up only)
          if (countUp && completionTime && newTime >= completionTime) {
            setIsRunning(false);
            if (onComplete) onComplete();
            return completionTime;
          }

          return newTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, countUp, completionTime, onComplete, onZero]);

  useEffect(() => {
    // Reset timer if startTime changes
    setCurrentTime(startTime);
    setIsRunning(true);
  }, [startTime]);

  return <div className={`${timerStyles.container} ${className}`}>{formatTime(currentTime)}</div>;
};
