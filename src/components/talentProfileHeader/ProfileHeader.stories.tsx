import type { Meta, StoryObj } from '@storybook/react';
import { ProfileHeader } from './ProfileHeader';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ProfileHeader> = {
  title: 'Components/ProfileHeader',
  component: ProfileHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A profile header component that displays user information including avatar, name, role, education details, and internship dates.',
      },
    },
  },
  argTypes: {
    imageUri: {
      control: 'text',
      description: 'URL of the user profile image',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the profile image',
    },
    onNameClick: {
      action: 'name-clicked',
      description: 'Callback function when the name is clicked',
    },
    name: {
      control: 'text',
      description: "User's full name",
    },
    role: {
      control: 'text',
      description: "User's job role or position",
    },
    education: {
      control: 'text',
      description: "User's education level or degree",
    },
    instuteName: {
      control: 'text',
      description: 'Name of the educational institution',
    },
    instuteStartDate: {
      control: 'text',
      description: 'Start date of education at the institution',
    },
    instuteEndDate: {
      control: 'text',
      description: 'End date of education at the institution',
    },
    startDate: {
      control: 'text',
      description: 'Start date of the flexternship',
    },
    endDate: {
      control: 'text',
      description: 'End date of the flexternship',
    },
    expectedEndDate: {
      control: 'text',
      description: 'Expected end date of the flexternship (optional)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockImageUri = 'https://i.pravatar.cc/150?img=3';

export const Default: Story = {
  args: {
    imageUri: mockImageUri,
    alt: 'John Doe Profile Picture',
    name: 'John Doe',
    role: 'Software Engineer',
    education: 'Bachelor of Computer Science',
    instuteName: 'Stanford University',
    instuteStartDate: '2018',
    instuteEndDate: '2022',
    startDate: 'Jan 15, 2024',
    endDate: 'Jul 15, 2024',
  },
};

export const WithClickableName: Story = {
  args: {
    ...Default.args,
    onNameClick: action('Name clicked'),
  },
};

export const WithExpectedEndDate: Story = {
  args: {
    ...Default.args,
    expectedEndDate: 'Jul 15, 2024',
    endDate: 'Ongoing',
  },
};

export const LongNames: Story = {
  args: {
    ...Default.args,
    name: 'Dr. Elizabeth Alexandra Montgomery-Williams',
    role: 'Senior Principal Software Engineer & Technical Lead',
    education: 'Master of Science in Computer Engineering',
    instuteName: 'Massachusetts Institute of Technology',
    instuteStartDate: '2019',
    instuteEndDate: '2021',
  },
};

export const ShortInternship: Story = {
  args: {
    ...Default.args,
    name: 'Alice Johnson',
    role: 'UX Design Intern',
    education: 'Bachelor of Design',
    instuteName: 'Parsons School of Design',
    instuteStartDate: '2020',
    instuteEndDate: '2024',
    startDate: 'Jun 1, 2024',
    endDate: 'Aug 31, 2024',
    expectedEndDate: 'Aug 31, 2024',
  },
};

export const OngoingInternship: Story = {
  args: {
    ...Default.args,
    name: 'Michael Chen',
    role: 'Data Science Intern',
    education: 'Master of Data Science',
    instuteName: 'University of California, Berkeley',
    instuteStartDate: '2022',
    instuteEndDate: '2024',
    startDate: 'Mar 1, 2024',
    endDate: 'Ongoing',
    expectedEndDate: 'Dec 31, 2024',
  },
};

export const DifferentEducation: Story = {
  args: {
    ...Default.args,
    name: 'Sarah Wilson',
    role: 'Marketing Intern',
    education: 'Bachelor of Business Administration',
    instuteName: 'New York University',
    instuteStartDate: '2019',
    instuteEndDate: '2023',
    startDate: 'May 1, 2024',
    endDate: 'Aug 31, 2024',
  },
};

export const WithCustomImage: Story = {
  args: {
    ...Default.args,
    imageUri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    alt: 'Sarah Wilson Profile Picture',
    name: 'Sarah Wilson',
  },
};

export const MinimalInfo: Story = {
  args: {
    imageUri: mockImageUri,
    alt: 'Profile Picture',
    name: 'Alex Smith',
    role: 'Intern',
    education: 'Student',
    instuteName: 'Local University',
    instuteStartDate: '2023',
    instuteEndDate: '2024',
    startDate: 'Today',
    endDate: 'TBD',
  },
};
