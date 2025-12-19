import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from '../input/Input';
import { PasswordInput } from '../password/Password';

const meta: Meta = {
  title: 'Examples/Forms',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Complete form examples showing proper implementation of login and registration forms with browser password saving support.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

// Complete Login Form Example
export const LoginForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would handle the login here
      console.log('Login attempt with:', formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 w-[400px] p-6 bg-white rounded-lg shadow-md" autoComplete="on">
        <h2 className="text-xl font-semibold mb-4">Login to Your Account</h2>

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
          value={formData.email}
          onchange={(value: string) => setFormData((prev) => ({ ...prev, email: value }))}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          value={formData.password}
          onchange={(value: string) => setFormData((prev) => ({ ...prev, password: value }))}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" autoComplete="off" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
A complete login form implementation that supports browser password saving and autofill.
Key features:
- Uses proper \`autoComplete\` attributes for email and password fields
- Form has \`autoComplete="on"\` to enable browser password saving
- Includes "Remember me" checkbox and "Forgot password" link
- Proper form submission handling
- Responsive design with proper spacing and styling
- Password field with show/hide functionality and strength meter

To test password saving:
1. Fill in the email and password fields
2. Submit the form
3. The browser should prompt to save the credentials
4. On subsequent visits, the browser should offer to autofill the saved credentials
        `,
      },
    },
  },
};

// Registration Form Example
export const RegistrationForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would handle the registration here
      console.log('Registration attempt with:', formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 w-[400px] p-6 bg-white rounded-lg shadow-md" autoComplete="on">
        <h2 className="text-xl font-semibold mb-4">Create an Account</h2>

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
          value={formData.email}
          onchange={(value: string) => setFormData((prev) => ({ ...prev, email: value }))}
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          autoComplete="new-password"
          required
          value={formData.password}
          onchange={(value: string) => setFormData((prev) => ({ ...prev, password: value }))}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          isConfirmation
          compareWith={formData.password}
          autoComplete="new-password"
          required
          value={formData.confirmPassword}
          onchange={(value: string) => setFormData((prev) => ({ ...prev, confirmPassword: value }))}
        />

        <div className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" autoComplete="off" required />
          <label>
            I agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
A complete registration form implementation that supports browser password saving and autofill.
Key features:
- Uses proper \`autoComplete\` attributes for email and password fields
- Form has \`autoComplete="on"\` to enable browser password saving
- Password confirmation with match validation
- Password strength meter
- Terms of service agreement checkbox
- Proper form submission handling
- Responsive design with proper spacing and styling

To test password saving:
1. Fill in the email and password fields
2. Submit the form
3. The browser should prompt to save the credentials
4. On subsequent visits to the login form, the browser should offer to autofill the saved credentials
        `,
      },
    },
  },
};
