import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { SearchBarProps } from './types';

const meta: Meta<SearchBarProps> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    onSearch: { action: 'search' },
    onChange: { action: 'change' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the search bar',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show search icon',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button when text is present',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the search input',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

// Default SearchBar
export const Default: Story = {
  args: {
    placeholder: 'Search...',
    showIcon: true,
    showClearButton: true,
    size: 'md',
  },
};

// Small Size
export const Small: Story = {
  args: {
    placeholder: 'Search...',
    showIcon: true,
    showClearButton: true,
    size: 'sm',
  },
};

// Medium Size
export const Medium: Story = {
  args: {
    placeholder: 'Search...',
    showIcon: true,
    showClearButton: true,
    size: 'md',
  },
};

// Large Size
export const Large: Story = {
  args: {
    placeholder: 'Search interviews by name...',
    showIcon: true,
    showClearButton: true,
    size: 'lg',
  },
};

// Without Icon
export const WithoutIcon: Story = {
  args: {
    placeholder: 'Search...',
    showIcon: false,
    showClearButton: true,
    size: 'md',
  },
};

// Without Clear Button
export const WithoutClearButton: Story = {
  args: {
    placeholder: 'Search...',
    showIcon: true,
    showClearButton: false,
    size: 'md',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    placeholder: 'Search...',
    showIcon: true,
    showClearButton: true,
    size: 'md',
    disabled: true,
    value: 'Disabled search',
  },
};

// Interactive Example
const InteractiveSearchComponent = (args: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const mockData = [
    'John Doe',
    'Jane Smith',
    'Bob Johnson',
    'Alice Williams',
    'Charlie Brown',
    'Diana Prince',
    'Eve Adams',
    'Frank Miller',
    'Grace Lee',
    'Henry Wilson',
  ];

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value);
    if (value.trim()) {
      const filtered = mockData.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearch = (value: string) => {
    console.log('Search submitted:', value);
  };

  return (
    <div className="max-w-2xl space-y-4">
      <SearchBar {...args} value={searchInput} onChange={handleSearchInputChange} onSearch={handleSearch} />
      {searchInput && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
          </p>
          {searchResults.length > 0 ? (
            <ul className="border border-gray-200 rounded-lg divide-y">
              {searchResults.map((result, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-50 text-sm">
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <div className="border border-gray-200 rounded-lg px-4 py-8 text-center text-sm text-gray-500">
              No results found for "{searchInput}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Interactive: Story = {
  args: {
    placeholder: 'Search interviews by name...',
    showIcon: true,
    showClearButton: true,
    size: 'md',
  },
  render: (args) => <InteractiveSearchComponent {...args} />,
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    placeholder: 'Search with custom border...',
    showIcon: true,
    showClearButton: true,
    size: 'md',
    className: 'border-2 border-blue-500 focus:border-blue-700',
  },
};

// All Sizes Comparison
const AllSizesComponent = () => {
  return (
    <div className="space-y-4 max-w-2xl">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Small</label>
        <SearchBar placeholder="Small search bar..." size="sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Medium (Default)</label>
        <SearchBar placeholder="Medium search bar..." size="md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Large</label>
        <SearchBar placeholder="Large search bar..." size="lg" />
      </div>
    </div>
  );
};

export const AllSizes: Story = {
  render: () => <AllSizesComponent />,
};
