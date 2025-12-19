import { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { z } from 'zod';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A general-purpose form component that integrates with Zod and React Hook Form.

## Example Usage

### Using fieldConfigs (Recommended)
\`\`\`tsx
import { Form } from './Form';
import { z } from 'zod';

// Define schema for form validation
const schema = z.object({
  fullName: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  userType: z.string().min(1, "Please select a user type"),
  profileImage: z.string().optional(),
});

// Infer TypeScript type from schema
type UserFormData = z.infer<typeof schema>;

// Render the form with field configurations
const UserForm = () => (
  <Form<UserFormData, typeof schema>
    schema={schema}
    onSubmit={(data) => console.log('Form submitted:', data)}
    defaultValues={{
      fullName: "",
      email: "",
      phone: "",
      userType: "",
      profileImage: "",
    }}
    fieldConfigs={[
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'input',
        placeholder: 'Enter your full name',
        colSpan: 2
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'input',
        inputType: 'email',
        placeholder: 'Enter your email',
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
          { label: 'Customer', value: 'customer' },
          { label: 'Admin', value: 'admin' },
          { label: 'Partner', value: 'partner' }
        ],
        placeholder: 'Select user type',
      },
      {
        name: 'profileImage',
        label: 'Profile Picture',
        type: 'image',
        colSpan: 2,
      }
    ]}
    fieldStyles={{
      label: "text-gray-700 font-medium",
      input: "border border-gray-300 rounded-md p-2",
      grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }}
    submitText="Create User"
    submitButtonClassName="bg-blue-600 text-white font-bold py-2 px-4 rounded"
    resetOnSubmit={false}
    onFormInit={(methods) => console.log('Form initialized', methods)}
  />
);
\`\`\`

### Using Render Props (Alternative)
\`\`\`tsx
import { Form } from './Form';
import { Input } from '../input/Input';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => (
  <Form<FormData, typeof schema>
    schema={schema}
    onSubmit={(data) => console.log(data)}
    defaultValues={{ name: "", email: "" }}
    className="p-4 border rounded shadow-sm"
    submitText="Log In"
  >
    {({ register, formState }) => (
      <>
        <Input 
          label="Name" 
          {...register("name")} 
          error={formState.errors.name?.message}
        />
        <Input 
          label="Email"
          {...register("email")} 
          error={formState.errors.email?.message}
        />
      </>
    )}
  </Form>
);
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

// Basic login form with email and password
export const BasicLoginForm: Story = {
  args: {
    schema: z.object({
      email: z.string().email('Invalid email address'),
      password: z.string().min(6, 'Password must be at least 6 characters'),
    }),
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: action('onSubmit'),
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
  },
};

// Registration form with multiple fields
export const RegistrationForm: Story = {
  args: {
    schema: z.object({
      firstName: z.string().min(2, 'First name is required'),
      lastName: z.string().min(2, 'Last name is required'),
      email: z.string().email('Invalid email address'),
      phone: z.string().min(10, 'Valid phone number is required'),
      userType: z.string().min(1, 'User type is required'),
      profileImage: z.string().optional(),
    }),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      userType: '',
      profileImage: '',
    },
    onSubmit: action('onSubmit'),
    fieldConfigs: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'input',
        placeholder: 'Enter your first name',
        colSpan: 1,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'input',
        placeholder: 'Enter your last name',
        colSpan: 1,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'input',
        inputType: 'email',
        placeholder: 'Enter your email',
        colSpan: 2,
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'phone',
        placeholder: 'Enter your phone number',
        colSpan: 1,
      },
      {
        name: 'userType',
        label: 'User Type',
        type: 'dropdown',
        options: () => [
          { label: 'Customer', value: 'customer' },
          { label: 'Admin', value: 'admin' },
          { label: 'Vendor', value: 'vendor' },
        ],
        placeholder: 'Select user type',
        colSpan: 1,
      },
      {
        name: 'profileImage',
        label: 'Profile Picture',
        type: 'image',
        colSpan: 2,
      },
    ],
    submitText: 'Register',
  },
};

// Loading state form
export const LoadingForm: Story = {
  args: {
    ...BasicLoginForm.args,
    isLoading: true,
  },
};

// Custom styled form
export const CustomStyledForm: Story = {
  args: {
    ...BasicLoginForm.args,
    className: 'bg-gray-100 p-6 rounded-lg shadow-md',
    submitButtonClassName: 'w-full bg-purple-600 hover:bg-purple-700 text-white',
    fieldStyles: {
      label: 'text-gray-700 font-semibold',
      input: 'rounded-lg border-2 border-gray-300 focus:border-purple-500 bg-white',
      grid: 'grid grid-cols-1 gap-4',
    },
  },
};

// Form with hidden submit button (for custom submission handling)
export const HiddenSubmitButton: Story = {
  args: {
    ...BasicLoginForm.args,
    hideSubmitButton: true,
  },
};
