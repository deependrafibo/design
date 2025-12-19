import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../input/Input';
import { PasswordInput } from '../password/Password';
import { InputPhone } from '../inputPhone/InputPhone';
import { InputFile } from '../inputFile/InputFile';
import { Checkbox } from '../checkbox/Checkbox';
import { Radio } from '../radio/Radio';
import { Toggle } from '../toggle/Toggle';
import { Rating } from '../rating/Rating';
import { Dropdown } from '../dropdown/Dropdown';
import { Button } from '../button/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Examples/Form Components Overview',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A comprehensive example showcasing all form components working together in a single form.

This example demonstrates:
- Input fields (text, email, password)
- Phone input with country selection
- File upload
- Checkboxes and radio buttons
- Toggle switches
- Rating component
- Dropdown selection
- Form validation and submission
- Responsive design

## Features Demonstrated
- Form state management
- Validation handling
- Error states
- Loading states
- Responsive layout
- Accessibility features
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const CompleteFormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      department: null,
      profileImage: null,
      notifications: false,
      marketing: false,
      userType: '',
      experience: 0,
      darkMode: false,
      autoSave: true,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (field: string, value: any) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }

      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      if (!formData.department) {
        newErrors.department = 'Please select a department';
      }

      if (!formData.userType) {
        newErrors.userType = 'Please select a user type';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      action('form submitted')(formData);
      setIsLoading(false);
    };

    const departmentOptions = [
      { label: 'Engineering', value: 'engineering' },
      { label: 'Design', value: 'design' },
      { label: 'Marketing', value: 'marketing' },
      { label: 'Sales', value: 'sales' },
      { label: 'HR', value: 'hr' },
    ];

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Complete Registration Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onchange={(value) => handleInputChange('firstName', value)}
                hasError={!!errors.firstName}
                errorMessage={errors.firstName}
                required
              />

              <Input
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onchange={(value) => handleInputChange('lastName', value)}
                hasError={!!errors.lastName}
                errorMessage={errors.lastName}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onchange={(value) => handleInputChange('email', value)}
                hasError={!!errors.email}
                errorMessage={errors.email}
                required
              />

              <InputPhone
                label="Phone Number"
                placeholder="Enter your phone number"
                value={formData.phone}
                onchange={(value) => handleInputChange('phone', value)}
                fetchCountries={async (_page: number, _limit: number) => {
                  // Mock implementation for story
                  return [
                    { _id: '1', latitude: '0', code: 'US', dial_code: '+1', name: 'United States', longitude: '0' },
                    { _id: '2', latitude: '0', code: 'CA', dial_code: '+1', name: 'Canada', longitude: '0' },
                  ];
                }}
              />
            </div>
          </div>

          {/* Account Information Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onchange={(value) => handleInputChange('password', value)}
                hasError={!!errors.password}
                errorMessage={errors.password}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <Dropdown
                  options={departmentOptions}
                  placeholder="Select your department"
                  selected={formData.department}
                  onChange={(selected) => handleInputChange('department', selected)}
                  hasError={!!errors.department}
                  errorMessage={errors.department}
                  required
                />
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputFile
                label="Profile Picture"
                placeholder="Choose a profile image"
                onchange={(file) => handleInputChange('profileImage', file)}
                accept="image/*"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">User Type</label>
                <div className="space-y-2">
                  <Radio
                    checked={formData.userType === 'employee'}
                    label="Employee"
                    onChange={() => handleInputChange('userType', 'employee')}
                  />
                  <Radio
                    checked={formData.userType === 'contractor'}
                    label="Contractor"
                    onChange={() => handleInputChange('userType', 'contractor')}
                  />
                  <Radio
                    checked={formData.userType === 'intern'}
                    label="Intern"
                    onChange={() => handleInputChange('userType', 'intern')}
                  />
                </div>
                {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Checkbox
                  checked={formData.notifications}
                  label="Receive email notifications"
                  onChange={(checked) => handleInputChange('notifications', checked)}
                />

                <Checkbox
                  checked={formData.marketing}
                  label="Receive marketing communications"
                  onChange={(checked) => handleInputChange('marketing', checked)}
                />
              </div>

              <div className="space-y-4">
                <Toggle
                  checked={formData.darkMode}
                  label="Dark mode"
                  onChange={(checked: boolean) => handleInputChange('darkMode', checked)}
                />

                <Toggle
                  checked={formData.autoSave}
                  label="Auto-save changes"
                  onChange={(checked: boolean) => handleInputChange('autoSave', checked)}
                />
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Experience Level</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Rate your experience:</span>
              <Rating
                rating={formData.experience}
                maxValue={5}
                onChange={(rating: number) => handleInputChange('experience', rating)}
              />
            </div>
          </div>

          {/* Submit Section */}
          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              onClick={() => {
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  phone: '',
                  department: null,
                  profileImage: null,
                  notifications: false,
                  marketing: false,
                  userType: '',
                  experience: 0,
                  darkMode: false,
                  autoSave: true,
                });
                setErrors({});
              }}
            >
              Reset Form
            </Button>

            <Button variant="primary" type="submit" loading={isLoading} disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>

        {/* Form Data Display (for demo purposes) */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">Form Data (Debug)</h3>
          <pre className="text-xs text-blue-700 overflow-auto">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
This comprehensive form example demonstrates how all form components work together:

## Key Features
- **Form State Management**: Uses React useState to manage form data
- **Validation**: Client-side validation with error display
- **Loading States**: Shows loading state during form submission
- **Responsive Design**: Grid layout that adapts to screen size
- **Accessibility**: Proper labels, error messages, and keyboard navigation
- **Component Integration**: All form components working together seamlessly

## Form Sections
1. **Personal Information**: Basic input fields for name, email, and phone
2. **Account Information**: Password and department selection
3. **Profile**: File upload and user type selection
4. **Preferences**: Checkboxes and toggles for user preferences
5. **Experience**: Rating component for experience level
6. **Actions**: Form submission and reset functionality

This example serves as a reference for implementing complete forms using the Trumio Design System components.
        `,
      },
    },
  },
};
