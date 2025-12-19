import { Controller, useFormContext, FieldValues, FieldPath } from 'react-hook-form';
import { Input } from '../input/Input';

interface BaseProps<T extends FieldValues> {
  /** Name of the field (must match a key in your form schema) */
  name: FieldPath<T>;
  /** Label for the field */
  label?: string;
  /** Additional CSS class for the field container */
  className?: string;
}

interface InputFieldProps<T extends FieldValues> extends BaseProps<T> {
  /** Type of input field */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Placeholder text */
  placeholder?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Additional CSS class for the label */
  labelClassName?: string;
  /** Default value for the field */
  defaultValue?: string | number;
}

/**
 * A form field component that integrates with React Hook Form context
 * and handles error states automatically
 */
export function FormField<T extends FieldValues>({
  name,
  label,
  type = 'text',
  placeholder,
  className = '',
  disabled = false,
  labelClassName = 'font-medium',
  defaultValue,
}: InputFieldProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={`mb-4 ${className}`}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue as any}
        render={({ field }) => (
          <Input
            type={type}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            labelClassName={labelClassName}
            className={`w-full h-10 placeholder:text-sm placeholder:text-gray-400 bg-white border-gray-300 focus:border-[#4294D1] focus:border-2 ${
              errorMessage ? 'border-red-500' : ''
            }`}
            {...field}
          />
        )}
      />
      {errorMessage && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
}

export default FormField;
