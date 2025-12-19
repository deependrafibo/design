import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import type { Option } from './types';
import { sampleOptions, largeSampleOptions } from './mock';
import { CustomCheck, CustomX, CustomSearch } from '../../assets/icons';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable dropdown component with support for single and multiple selection, variants, icons, and more. The dropdown includes a chevron icon that rotates to indicate the open/closed state of the dropdown menu.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the dropdown',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when nothing is selected',
    },
    className: {
      control: 'text',
      description:
        'Additional Tailwind CSS classes for styling the dropdown container. Note: The chevron icon is positioned absolutely within this container.',
    },
    labelClassName: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for styling the label',
    },
    optionStyle: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for styling the options container',
    },
    multi: {
      control: 'boolean',
      description: 'Enable multi-select mode',
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search functionality',
    },
    paginated: {
      control: 'boolean',
      description: 'Enable pagination with infinite scroll',
    },
    loading: {
      control: 'boolean',
      description: 'Indicates if more options are being loaded',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required (shows red asterisk)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the dropdown interaction',
    },
    hasError: {
      control: 'boolean',
      description: 'Shows error state styling',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the dropdown',
    },
    showTick: {
      control: 'boolean',
      description: 'Show checkmark icon for selected options',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when selection changes',
    },
    onLoadMore: {
      action: 'loadMore',
      description: 'Triggered when user scrolls to bottom in paginated mode',
    },
    onSearch: {
      action: 'search',
      description: 'Triggered when user types in the search input',
    },
    width: {
      control: 'text',
      description: 'Width of the dropdown',
      defaultValue: 'min-w-[200px]',
    },
    rank: {
      control: 'object',
      description: 'Rank display object with label and value',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const SingleSelect: Story = {
  args: {
    label: 'Job Role',
    placeholder: 'Select job role',
    options: sampleOptions,
    multi: false,
    deselectable: false,
    rank: {
      label: '1',
      value: '1',
    },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const MultiSelect: Story = {
  args: {
    label: 'Team Members',
    placeholder: 'Select team',
    options: sampleOptions,
    multi: true,
    rank: {
      label: '1',
      value: '1',
    },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option[]>([]);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option[])} />;
  },
};

export const RequiredField: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    options: sampleOptions,
    required: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const WithError: Story = {
  args: {
    label: 'Field with Error',
    placeholder: 'Select an option',
    options: sampleOptions,
    hasError: true,
    errorMessage: 'This field is required. Please select an option.',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dropdown',
    placeholder: 'This dropdown is disabled',
    options: sampleOptions,
    disabled: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const WithoutTick: Story = {
  args: {
    label: 'Dropdown without Tick',
    placeholder: 'Select an option (no checkmark)',
    options: sampleOptions,
    showTick: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const SearchableDropdown: Story = {
  args: {
    label: 'Searchable Dropdown',
    placeholder: 'Search and select',
    options: sampleOptions,
    searchable: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const LargeOptionsSet: Story = {
  args: {
    label: 'Job Roles (Large Dataset)',
    placeholder: 'Select job role',
    options: largeSampleOptions,
    multi: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const LargeOptionsSetWithSearch: Story = {
  args: {
    label: 'Job Roles (Large Dataset with Search)',
    placeholder: 'Search and select a role',
    options: largeSampleOptions,
    searchable: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const PaginatedDropdown: Story = {
  args: {
    label: 'Paginated Dropdown',
    placeholder: 'Scroll to load more',
    options: sampleOptions,
    paginated: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [allOptions, setAllOptions] = useState<Option[]>(sampleOptions);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleLoadMore = useCallback(() => {
      if (loading) return;

      setLoading(true);

      // Simulate API call with a delay
      setTimeout(() => {
        // Generate new options with incremented values
        const nextBatch = Array.from({ length: 5 }, (_, i) => {
          const index = allOptions.length + i;
          return {
            label: `Dynamic Option ${index + 1}`,
            value: `dynamic-${index + 1}`,
          };
        });

        setAllOptions((prev) => [...prev, ...nextBatch]);
        setLoading(false);
      }, 1000);
    }, [allOptions, loading]);

    return (
      <Dropdown
        {...args}
        options={allOptions}
        loading={loading}
        selected={selected}
        onChange={(value) => setSelected(value as Option | null)}
        onLoadMore={handleLoadMore}
      />
    );
  },
};

export const SearchableAndPaginatedMultiSelect: Story = {
  args: {
    label: 'Advanced Dropdown',
    placeholder: 'Search and select multiple',
    options: sampleOptions,
    multi: true,
    searchable: true,
    paginated: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [allOptions, setAllOptions] = useState<Option[]>(sampleOptions);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleLoadMore = useCallback(() => {
      if (loading) return;

      setLoading(true);

      // Simulate API call with a delay
      setTimeout(() => {
        // Generate new options with incremented values
        const nextBatch = Array.from({ length: 5 }, (_, i) => {
          const index = allOptions.length + i;
          return {
            label: `Dynamic Option ${index + 1}`,
            value: `dynamic-${index + 1}`,
          };
        });

        setAllOptions((prev) => [...prev, ...nextBatch]);
        setLoading(false);
      }, 1000);
    }, [allOptions, loading]);

    return (
      <Dropdown
        {...args}
        options={allOptions}
        loading={loading}
        selected={selected}
        onChange={(value) => setSelected(value as Option[])}
        onLoadMore={handleLoadMore}
      />
    );
  },
};

export const ExternalSearchHandling: Story = {
  args: {
    label: 'External Search Dropdown',
    placeholder: 'Search with external handling',
    options: sampleOptions,
    searchable: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(sampleOptions);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchQuery, setSearchQuery] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleSearch = useCallback((query: string) => {
      setSearchQuery(query);
      // Simulate external search/filtering
      const filtered = sampleOptions.filter((option) => {
        const labelString = typeof option.label === 'string' ? option.label : String(option.label);
        return (
          labelString.toLowerCase().includes(query.toLowerCase()) ||
          option.value.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilteredOptions(filtered);
    }, []);

    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-500">Current search query: {searchQuery || '(empty)'}</div>
        <Dropdown
          {...args}
          options={filteredOptions}
          selected={selected}
          onChange={(value) => setSelected(value as Option | null)}
          onSearch={handleSearch}
        />
      </div>
    );
  },
};

export const WithReactNodeLabels: Story = {
  args: {
    label: 'Dropdown with React Node Labels',
    placeholder: 'Select an option with icons',
    options: [
      {
        label: (
          <div className="flex items-center justify-between w-full">
            <div>FronT</div>
            <div className="flex w-9 px-[9px] py-[1px] justify-center items-center gap-[3px] rounded-[17px] border border-[#6E6B7B] text-[#6E6B7B] text-center font-montserrat text-xs font-semibold leading-[18px]">
              17
            </div>
          </div>
        ),
        value: 'frontend',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <CustomSearch width={16} height={16} color="#6E6B7B" />
            <span>Backend Developer</span>
          </div>
        ),
        value: 'backend',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <CustomX width={16} height={16} color="#FF6B6B" />
            <span>UI/UX Designer</span>
          </div>
        ),
        value: 'designer',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            <span>QA Engineer</span>
          </div>
        ),
        value: 'qa',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
            <span>Project Manager</span>
          </div>
        ),
        value: 'pm',
      },
    ],
    searchable: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const MixedLabelTypes: Story = {
  args: {
    label: 'Dropdown with Mixed Label Types',
    placeholder: 'Select an option',
    options: [
      { label: 'Simple String Label', value: 'simple' },
      { label: 42, value: 'number' },
      { label: true, value: 'boolean' },
      {
        label: (
          <div className="flex items-center gap-2">
            <CustomCheck width={16} height={16} color="#0185E4" />
            <span>React Node Label</span>
          </div>
        ),
        value: 'react_node',
      },
      { label: 'Another String', value: 'another_string' },
    ],
    searchable: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);

    return <Dropdown {...args} selected={selected} onChange={(value) => setSelected(value as Option | null)} />;
  },
};

export const FormValidationExample: Story = {
  args: {
    label: 'Form Field with Validation',
    placeholder: 'Select your department',
    options: sampleOptions,
    required: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Option | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hasError, setHasError] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (value: Option | Option[] | null) => {
      setSelected(value as Option | null);
      // Clear error when user makes a selection
      if (value) {
        setHasError(false);
        setErrorMessage('');
      }
    };

    const handleSubmit = () => {
      if (!selected) {
        setHasError(true);
        setErrorMessage('Please select a department. This field is required.');
      } else {
        setHasError(false);
        setErrorMessage('');
        // Simulate form submission
        console.log('Form submitted with:', selected);
      }
    };

    return (
      <div className="space-y-4 w-80">
        <Dropdown
          {...args}
          selected={selected}
          onChange={handleChange}
          hasError={hasError}
          errorMessage={errorMessage}
        />
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit Form
        </button>
        {selected && (
          <div className="text-sm text-green-600">
            Selected: {typeof selected.label === 'string' ? selected.label : 'Custom Label'}
          </div>
        )}
      </div>
    );
  },
};
