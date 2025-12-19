export interface InputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
  type?: string;
  value?: string;
  labelClassName?: string;
  onchange?: (value: string) => void;
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  hasError?: boolean;
  autoComplete?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Minimum value for date, time, datetime-local, number, or range inputs
   * For date inputs: use format "YYYY-MM-DD"
   * For datetime-local: use format "YYYY-MM-DDTHH:mm"
   * For time: use format "HH:mm"
   */
  min?: string;
  /**
   * Maximum value for date, time, datetime-local, number, or range inputs
   * For date inputs: use format "YYYY-MM-DD"
   * For datetime-local: use format "YYYY-MM-DDTHH:mm"
   * For time: use format "HH:mm"
   */
  max?: string;
  /** @deprecated Use 'min' instead */
  minDate?: string;
  /** @deprecated Use 'max' instead */
  maxDate?: string;
}
