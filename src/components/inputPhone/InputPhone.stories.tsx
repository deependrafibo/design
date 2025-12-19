import { Meta, StoryObj } from '@storybook/react';
import { InputPhone } from './InputPhone';
import { action } from '@storybook/addon-actions';
import { CountryData } from './types';
import { mockCountries } from './mock';

const fetchCountries = async (page: number, limit: number): Promise<CountryData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      resolve(mockCountries.slice(start, end));
    }, 500);
  });
};

const handleChangeAction = (value: string, countryId?: string, fullNumber?: string) => {
  action('onchange')({
    value,
    countryId,
    fullNumber,
  });
};

const meta: Meta<typeof InputPhone> = {
  title: 'Components/input/phone',
  component: InputPhone,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    defaultCountryCode: { control: 'text' },
    className: { control: 'text' },
    labelClassName: { control: 'text' },
    errorMessage: { control: 'text' },
    onchange: { action: 'changed' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    countryDisabled: { control: 'boolean' },
    fetchCountries: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

export const Default: Story = {
  args: {
    label: 'Mobile Number',
    placeholder: 'Enter your mobile number',
    value: '9876543210',
    defaultCountryCode: '+91',
    onchange: handleChangeAction,
    fetchCountries,
    className: 'max-w-md',
  },
};

export const CustomStyles: Story = {
  args: {
    label: 'Phone',
    value: '9999999999',
    className: 'bg-yellow-100 border-yellow-500',
    labelClassName: 'text-purple-700',
    errorMessage: 'Invalid phone number',
    onchange: handleChangeAction,
    fetchCountries,
  },
};

export const USNumber: Story = {
  args: {
    label: 'US Phone Number',
    placeholder: 'Enter number',
    value: '2345678901',
    defaultCountryCode: '+1',
    onchange: handleChangeAction,
    errorMessage: 'Invalid phone number',
    fetchCountries,
  },
};

export const ValueWithCountryCode: Story = {
  args: {
    label: 'Value with Country Code',
    placeholder: 'Will be parsed correctly',
    value: '+919876543210',
    defaultCountryCode: '+91',
    onchange: handleChangeAction,
    fetchCountries,
  },
};

export const InvalidPhoneNumber: Story = {
  args: {
    label: 'Invalid Phone',
    value: '12345',
    defaultCountryCode: '+91',
    onchange: handleChangeAction,
    errorMessage: 'Invalid phone number',
    fetchCountries,
  },
};

export const DisabledInput: Story = {
  args: {
    label: 'Disabled Phone',
    value: '1234567890',
    defaultCountryCode: '+91',
    disabled: true,
    onchange: handleChangeAction,
    errorMessage: 'This field is disabled',
    fetchCountries,
  },
};

export const WithLoadingState: Story = {
  args: {
    label: 'Phone with Loading Demo',
    value: '9876543210',
    defaultCountryCode: '+91',
    onchange: handleChangeAction,
    fetchCountries: async (page: number, limit: number) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return fetchCountries(page, limit);
    },
  },
};

export const DisabledCountrySelector: Story = {
  args: {
    label: 'Phone with Disabled Country Selector',
    value: '9876543210',
    defaultCountryCode: '+91',
    countryDisabled: true,
    onchange: handleChangeAction,
    fetchCountries,
  },
};
