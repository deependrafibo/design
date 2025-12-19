export interface SearchBarProps {
  /**
   * The current value of the search input
   */
  value?: string;
  /**
   * Placeholder text for the search input
   */
  placeholder?: string;
  /**
   * Callback fired when search is triggered (form submit or Enter key)
   */
  onSearch?: (value: string) => void;
  /**
   * Callback fired when input value changes
   */
  onChange?: (value: string) => void;
  /**
   * Whether to show the search icon
   * @default true
   */
  showIcon?: boolean;
  /**
   * Whether to show the clear button when there is text
   * @default true
   */
  showClearButton?: boolean;
  /**
   * Size of the search bar
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional CSS classes to apply to the search bar
   */
  className?: string;
  /**
   * Whether the search input is disabled
   * @default false
   */
  disabled?: boolean;
}
