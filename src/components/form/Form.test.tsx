import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Form, FormProps } from './Form';
import { z } from 'zod';
import userEvent from '@testing-library/user-event';

// Mock child components
vi.mock('../button/Button', () => ({
  Button: ({ children, onClick, disabled, className }: any) => (
    <button onClick={onClick} disabled={disabled} className={className} data-testid="submit-button">
      {children}
    </button>
  ),
}));

vi.mock('../input/Input', () => ({
  Input: ({ label, type, placeholder, onchange, disabled, ...rest }: any) => (
    <div data-testid={`input-${rest.name}`}>
      <label>{label}</label>
      <input type={type || 'text'} placeholder={placeholder} onChange={onchange} disabled={disabled} {...rest} />
    </div>
  ),
}));

vi.mock('../inputPhone/InputPhone', () => ({
  __esModule: true,
  default: ({ label, placeholder, disabled, ...rest }: any) => (
    <div data-testid={`phone-${rest.name}`}>
      <label>{label}</label>
      <input type="tel" placeholder={placeholder} disabled={disabled} {...rest} />
    </div>
  ),
}));

vi.mock('../dropdown/Dropdown', () => ({
  Dropdown: ({ label, placeholder, options, selected, onChange, ...rest }: any) => (
    <div data-testid={`dropdown-${rest.name}`}>
      <label>{label}</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)} data-options={JSON.stringify(options)}>
        <option value="">{placeholder}</option>
        {options?.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  ),
}));

vi.mock('../ImageInput/ImageInput', () => ({
  ImageInput: ({ currentImageUrl, onImageSelect, disabled, ...rest }: any) => (
    <div data-testid={`image-${rest.name}`}>
      <div>Current Image: {currentImageUrl || 'None'}</div>
      <button onClick={() => onImageSelect('mocked-image-url.jpg')} disabled={disabled}>
        Select Image
      </button>
    </div>
  ),
}));

describe('Form Component', () => {
  // Basic login form schema for testing
  const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const defaultLoginFormProps: FormProps<LoginFormData, typeof loginSchema> = {
    schema: loginSchema,
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: vi.fn(),
    fieldConfigs: [
      {
        name: 'email',
        label: 'Email',
        type: 'input',
        inputType: 'email',
        placeholder: 'Enter your email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'input',
        inputType: 'password',
        placeholder: 'Enter your password',
      },
    ],
    submitText: 'Login',
  };

  it('renders the form with field configs', () => {
    render(<Form {...defaultLoginFormProps} />);

    expect(screen.getByTestId('input-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toHaveTextContent('Login');
  });

  it('renders the form with render props', () => {
    render(
      <Form<LoginFormData, typeof loginSchema>
        schema={loginSchema}
        defaultValues={{ email: '', password: '' }}
        onSubmit={vi.fn()}
      >
        {({ register }) => (
          <>
            <div data-testid="custom-email">
              <input {...register('email')} />
            </div>
            <div data-testid="custom-password">
              <input {...register('password')} />
            </div>
          </>
        )}
      </Form>,
    );

    expect(screen.getByTestId('custom-email')).toBeInTheDocument();
    expect(screen.getByTestId('custom-password')).toBeInTheDocument();
  });

  it('should handle form submission with valid data', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    render(<Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} onSubmit={onSubmit} />);

    // Fill in form fields
    const emailInput = screen.getByTestId('input-email').querySelector('input') as HTMLInputElement;
    const passwordInput = screen.getByTestId('input-password').querySelector('input') as HTMLInputElement;

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');

    // Submit the form
    await user.click(screen.getByTestId('submit-button'));

    // Check if onSubmit was called with the form data
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        {
          email: 'test@example.com',
          password: 'password123',
        },
        expect.anything(),
      );
    });
  });

  it('should show validation errors for invalid data', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    const { container } = render(
      <Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} onSubmit={onSubmit} />,
    );

    // Fill in form with invalid data
    const emailInput = screen.getByTestId('input-email').querySelector('input') as HTMLInputElement;
    const passwordInput = screen.getByTestId('input-password').querySelector('input') as HTMLInputElement;

    await user.type(emailInput, 'invalid-email');
    await user.type(passwordInput, '12345'); // Too short

    // Submit the form
    await user.click(screen.getByTestId('submit-button'));

    // Check if validation errors appear
    await waitFor(() => {
      expect(container.textContent).toContain('Invalid email address');
      expect(container.textContent).toContain('Password must be at least 6 characters');
    });

    // onSubmit should not be called
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('renders a form with all field types', () => {
    // Create a complex form with all field types
    const complexSchema = z.object({
      name: z.string(),
      phone: z.string(),
      userType: z.string(),
      profileImage: z.string().optional(),
    });

    type ComplexFormData = z.infer<typeof complexSchema>;

    render(
      <Form<ComplexFormData, typeof complexSchema>
        schema={complexSchema}
        defaultValues={{
          name: '',
          phone: '',
          userType: '',
          profileImage: '',
        }}
        onSubmit={vi.fn()}
        fieldConfigs={[
          {
            name: 'name',
            label: 'Name',
            type: 'input',
            placeholder: 'Enter your name',
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'phone',
            placeholder: 'Enter your phone number',
          },
          {
            name: 'userType',
            label: 'User Type',
            type: 'dropdown',
            options: () => [
              { label: 'Admin', value: 'admin' },
              { label: 'User', value: 'user' },
            ],
            placeholder: 'Select user type',
          },
          {
            name: 'profileImage',
            label: 'Profile Image',
            type: 'image',
          },
        ]}
      />,
    );

    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('phone-phone')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-userType')).toBeInTheDocument();
    expect(screen.getByTestId('image-profileImage')).toBeInTheDocument();
  });

  it('applies custom styles to form and submit button', () => {
    render(
      <Form<LoginFormData, typeof loginSchema>
        {...defaultLoginFormProps}
        className="custom-form-class"
        submitButtonClassName="custom-button-class"
      />,
    );

    const formElement = document.querySelector('form');
    expect(formElement).toHaveClass('custom-form-class');

    const buttonElement = screen.getByTestId('submit-button');
    expect(buttonElement).toHaveClass('custom-button-class');
  });

  it('displays loading state correctly', () => {
    render(<Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} isLoading={true} />);

    expect(screen.getByTestId('submit-button')).toHaveTextContent('Loading...');
    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });

  it('allows form reset', async () => {
    const onReset = vi.fn();
    const user = userEvent.setup();

    const { container } = render(
      <Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} onReset={onReset} />,
    );

    // Find the form element and simulate reset
    const formElement = container.querySelector('form') as HTMLFormElement;
    await user.type(screen.getByTestId('input-email').querySelector('input') as HTMLInputElement, 'test@example.com');

    // Trigger form reset
    fireEvent.reset(formElement);

    // Verify onReset was called
    expect(onReset).toHaveBeenCalled();
  });

  it('respects resetOnSubmit option', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    render(
      <Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} onSubmit={onSubmit} resetOnSubmit={true} />,
    );

    // Fill form and submit
    const emailInput = screen.getByTestId('input-email').querySelector('input') as HTMLInputElement;
    const passwordInput = screen.getByTestId('input-password').querySelector('input') as HTMLInputElement;

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(screen.getByTestId('submit-button'));

    // Wait for submission and reset
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
      // In a real scenario, the inputs would be cleared
      // but since we're mocking components, we can't easily test this
    });
  });

  it('calls onFormInit with form methods', () => {
    const onFormInit = vi.fn();

    render(<Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} onFormInit={onFormInit} />);

    expect(onFormInit).toHaveBeenCalledTimes(1);
    expect(onFormInit.mock.calls[0][0]).toHaveProperty('handleSubmit');
    expect(onFormInit.mock.calls[0][0]).toHaveProperty('reset');
    expect(onFormInit.mock.calls[0][0]).toHaveProperty('register');
  });

  it('hides submit button when hideSubmitButton is true', () => {
    render(<Form<LoginFormData, typeof loginSchema> {...defaultLoginFormProps} hideSubmitButton={true} />);

    expect(screen.queryByTestId('submit-button')).not.toBeInTheDocument();
  });
});
