import React, { ReactNode, useEffect } from 'react';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
  FormProvider,
  DefaultValues,
  Controller,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import InputPhone from '../inputPhone/InputPhone';
import { Dropdown } from '../dropdown/Dropdown';
import { ImageInput } from '../ImageInput/ImageInput';

// Field configuration types
export type FieldType = 'input' | 'phone' | 'dropdown' | 'image' | 'custom';

export interface FieldConfig<T extends FieldValues = any> {
  name: keyof T;
  label: string;
  placeholder?: string;
  type: FieldType;
  className?: string;
  colSpan?: number;
  inputType?: string;
  options?: () => { label: string; value: string }[];
  customProps?: Record<string, any>;
  customRender?: (field: any, config: FieldConfig<T>) => React.ReactNode;
  disabled?: boolean;
}

// Field wrapper component
export const FormField = ({
  children,
  error,
  className,
}: {
  children: React.ReactNode;
  error?: string;
  className?: string;
}) => (
  <div className={`mb-4 ${className || ''}`}>
    {children}
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export type FormProps<TFormValues extends FieldValues, Schema> = {
  /** The form schema for validation */
  schema: Schema;
  /** Default values for form fields */
  defaultValues?: DefaultValues<TFormValues>;
  /** Function called when form is submitted successfully */
  onSubmit: SubmitHandler<TFormValues>;
  /** Child components/elements to render inside the form */
  children?: ReactNode | ((methods: UseFormReturn<TFormValues>) => ReactNode);
  /** Optional ID for the form element */
  id?: string;
  /** Optional class name for the form element */
  className?: string;
  /** Button text for the submit button */
  submitText?: string;
  /** Optional class name for the submit button */
  submitButtonClassName?: string;
  /** Whether the form is in a loading state */
  isLoading?: boolean;
  /** Whether to render the submit button */
  hideSubmitButton?: boolean;
  /** Optional callback when form is reset */
  onReset?: () => void;
  /** Whether to reset the form after successful submission */
  resetOnSubmit?: boolean;
  /** Field configurations for auto-rendering form fields */
  fieldConfigs?: FieldConfig<TFormValues>[];
  /** Classes for form field elements */
  fieldStyles?: {
    label?: string;
    input?: string;
    grid?: string;
  };
  /** Callback that provides access to form methods */
  onFormInit?: (methods: UseFormReturn<TFormValues>) => void;
};

/**
 * A general-purpose form component that integrates with Zod and React Hook Form
 *
 * @example
 * ```tsx
 * const schema = z.object({
 *   name: z.string().min(2, "Name must have at least 2 characters"),
 *   email: z.string().email("Invalid email address"),
 * });
 *
 * type FormData = z.infer<typeof schema>;
 *
 * <Form<FormData, typeof schema>
 *   schema={schema}
 *   onSubmit={(data) => console.log(data)}
 *   defaultValues={{ name: "", email: "" }}
 * >
 *   {({ register, formState }) => (
 *     <>
 *       <Input
 *         label="Name"
 *         {...register("name")}
 *         error={formState.errors.name?.message}
 *       />
 *       <Input
 *         label="Email"
 *         {...register("email")}
 *         error={formState.errors.email?.message}
 *       />
 *     </>
 *   )}
 * </Form>
 * ```
 */
export const Form = <TFormValues extends FieldValues, Schema extends ZodSchema<any>>({
  schema,
  defaultValues,
  onSubmit,
  children,
  id,
  className = '',
  submitText = 'Submit',
  submitButtonClassName = 'w-full bg-[#4294D1]',
  isLoading = false,
  hideSubmitButton = false,
  onReset,
  resetOnSubmit = false,
  fieldConfigs,
  fieldStyles = {
    label: 'text-body-text text-lg font-mont font-normal',
    input:
      'rounded-md border border-[#E6E7E7] bg-white placeholder:text-[#B4B7B8] placeholder:font-montserrat placeholder:text-xs placeholder:font-normal placeholder:leading-4 w-full',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-6',
  },
  onFormInit,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  // Call onFormInit callback with form methods
  useEffect(() => {
    onFormInit?.(methods);
  }, [methods, onFormInit]);

  const handleSubmit = (data: TFormValues) => {
    onSubmit(data);
    if (resetOnSubmit) {
      methods.reset();
    }
  };

  // Render field based on its configuration
  const renderField = (config: FieldConfig<TFormValues>, control: any) => {
    const {
      name,
      label,
      placeholder = '',
      type,
      className,
      inputType,
      options,
      customProps,
      customRender,
      disabled,
    } = config;

    return (
      <Controller
        key={name.toString()}
        control={control}
        name={name as string}
        render={({ field }) => {
          // If custom render function is provided, use it
          if (customRender) {
            return customRender(field, config) as React.ReactElement;
          }

          switch (type) {
            case 'input':
              return (
                <Input
                  type={inputType || 'text'}
                  label={label}
                  placeholder={placeholder}
                  labelClassName={fieldStyles.label}
                  className={className || fieldStyles.input}
                  onchange={field.onChange}
                  disabled={disabled}
                  {...field}
                  {...customProps}
                />
              );
            case 'phone':
              return (
                <InputPhone
                  label={label}
                  placeholder={placeholder}
                  labelClassName={fieldStyles.label}
                  className={className || fieldStyles.input}
                  disabled={disabled}
                  fetchCountries={customProps?.fetchCountries}
                  {...field}
                  {...customProps}
                />
              );
            case 'dropdown':
              return (
                <Dropdown
                  options={options ? options() : []}
                  label={label}
                  placeholder={placeholder}
                  labelClassName={fieldStyles.label}
                  className={className || fieldStyles.input}
                  selected={field.value}
                  onChange={(selected) => field.onChange(selected)}
                  {...customProps}
                />
              );
            case 'image':
              return (
                <ImageInput
                  currentImageUrl={field.value}
                  onImageSelect={field.onChange}
                  disabled={disabled}
                  {...customProps}
                  {...field}
                />
              );
            default:
              return <div>Unknown field type: {type}</div>;
          }
        }}
      />
    );
  };

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        className={className}
        onSubmit={methods.handleSubmit(handleSubmit)}
        onReset={() => {
          methods.reset();
          onReset?.();
        }}
      >
        {fieldConfigs ? (
          <div className={fieldStyles.grid || 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
            {fieldConfigs.map((config) => (
              <FormField
                key={config.name.toString()}
                error={methods.formState.errors[config.name as string]?.message as string}
                className={`${config.colSpan === 2 ? 'md:col-span-2' : ''} ${config.className || ''}`}
              >
                {renderField(config, methods.control)}
              </FormField>
            ))}
          </div>
        ) : null}

        {typeof children === 'function' ? children(methods) : children}

        {!hideSubmitButton && (
          <div className="mt-6">
            <Button onClick={() => {}} variant="primary" disabled={isLoading} className={submitButtonClassName}>
              {isLoading ? 'Loading...' : submitText}
            </Button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
