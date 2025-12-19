import { InputProps } from '../inputFile/InputFile';

export interface PasswordInputProps extends InputProps {
  minLength?: number;
  maxLength?: number;
  isConfirmation?: boolean;
  compareWith?: string;
  onMatchChange?: (isMatched: boolean) => void;
  matchText?: string;
  mismatchText?: string;
  showMatchIndicator?: boolean;
  showStrengthMeter?: boolean;
  strengthLabel?: string;
  matchLabel?: string;
  mismatchLabel?: string;
  showMatchText?: boolean;
  required?: boolean;
  autoComplete?: string;
}
