export type CountryData = {
  _id: string;
  latitude: string;
  code: string;
  dial_code: string;
  name: string;
  longitude: string;
};

export interface InputPhoneProps {
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  value?: string;
  defaultCountryCode?: string;
  errorMessage?: string;
  onchange?: (value: string, countryId?: string, fullNumber?: string) => void;
  required?: boolean;
  disabled?: boolean;
  fetchCountries: (page: number, limit: number) => Promise<CountryData[]>;
  countryDisabled?: boolean;
}
