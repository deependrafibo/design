export type InputModeOptions = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

export interface OTPInputProps {
  length: number;
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  isNumberOnly?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  errorMessage?: string;
  hasError?: boolean;
  placeholder?: string;
  separator?: React.ReactNode;
  separatorClassName?: string;
  inputType?: string;
  inputMode?: InputModeOptions;
  maxLength?: number;
  autoComplete?: string;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  testId?: string;
  label?: string;
  labelClassName?: string;
}
