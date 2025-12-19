import { TalentProfileHeader } from './TalentProfileHeader';
import { action } from '@storybook/addon-actions';

const mockImageUri = 'https://i.pravatar.cc/150?img=3';

export default {
  title: 'Components/TalentProfileHeader',
  component: TalentProfileHeader,
  argTypes: {
    toggleOn: {
      control: 'boolean',
      description: 'Whether the toggle is on or off',
    },
    onToggle: {
      action: 'toggled',
      description: 'Triggered when toggle state changes',
    },
    onNameClick: {
      action: 'name-clicked',
      description: 'Triggered when name is clicked',
    },
    label: {
      control: 'text',
      description: 'Status badge label',
    },
    type: {
      control: 'text',
      description: 'Status badge type',
    },
  },
};

export const Default = () => (
  <TalentProfileHeader
    name="John Doe"
    email="johndoe@example.com"
    imageUri={mockImageUri}
    department="Engineering"
    role="Software Engineer"
    dateAdded="2024-04-10"
    toggleOn={true}
    onToggle={action('Toggle clicked')}
    onNameClick={action('Name clicked')}
    label="Active"
    type="active"
    className="w-full"
  />
);

export const ToggleOff = () => (
  <TalentProfileHeader
    name="Jane Smith"
    email="janesmith@example.com"
    imageUri={mockImageUri}
    department="Design"
    role="UX Designer"
    dateAdded="2024-01-15"
    toggleOn={false}
    onToggle={action('Toggle clicked')}
    onNameClick={action('Name clicked')}
    className="w-full"
  />
);

export const ClickableName = () => (
  <TalentProfileHeader
    name="Alice Johnson"
    email="alice.johnson@example.com"
    imageUri={mockImageUri}
    department="Marketing"
    role="Marketing Lead"
    dateAdded="2023-10-30"
    toggleOn={true}
    onToggle={action('Toggle clicked')}
    onNameClick={action('Name clicked')}
    label="Active"
    type="active"
    className="w-full"
  />
);

export const WithoutToggle = () => (
  <TalentProfileHeader
    name="John Doe"
    email="johndoe@example.com"
    imageUri={mockImageUri}
    department="Engineering"
    role="Software Engineer"
    dateAdded="2024-04-10"
  />
);
