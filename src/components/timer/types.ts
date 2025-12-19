export interface TimerProps {
  /**
   * Starting time in seconds
   */
  startTime: number;

  /**
   * If true, timer counts up from startTime, otherwise counts down to zero
   */
  countUp?: boolean;

  /**
   * Optional completion time in seconds.
   * For countUp=true: triggers onComplete when timer reaches this value
   * For countUp=false: ignored (use startTime instead)
   */
  completionTime?: number;

  /**
   * Optional callback when timer reaches zero (for countdown only)
   * or completionTime (for count-up only)
   */
  onComplete?: () => void;

  /**
   * Optional callback that triggers each time the counter reaches exactly zero
   * Useful for interval-based notifications
   */
  onZero?: () => void;

  /**
   * Optional CSS class name for styling
   */
  className?: string;
}
