import { Meta, StoryObj } from '@storybook/react';
import PullRequestCard from './Commits';
import { GitHubPullRequest } from './types';
import '../../tailwindcss/theme.css';

const meta: Meta<typeof PullRequestCard> = {
  title: 'Components/Commits',
  component: PullRequestCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive pull request card component that displays commit history, metrics, and code quality ratings with expandable commit details.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'GitHub pull request data including commits, metrics, and ratings',
    },
    sasToken: {
      control: 'text',
      description: 'Optional SAS token for secure image access',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PullRequestCard>;

// Mock data for different scenarios
const mockPullRequestWithCommits: GitHubPullRequest = {
  _id: 'pr-123',
  prTitle: 'Add user authentication and authorization features',
  prNumber: 123,
  prCreatedAt: '2024-01-15T10:30:00Z',
  prMergedAt: '2024-01-16T14:20:00Z',
  prStatus: 'merged',
  prUserId: 'user-456',
  pr_title: 'Add user authentication and authorization features',
  pr_number: 123,
  pr_created_at: '2024-01-15T10:30:00Z',
  pr_merged_at: '2024-01-16T14:20:00Z',
  pr_status: 'merged',
  pr_user_id: 'user-456',
  pr_user_name: 'John Doe',
  pr_user_image_uri: 'https://via.placeholder.com/40',
  pr_user_role: 'Senior Developer',
  pr_user_email: 'john.doe@example.com',
  pr_user_phone: '+1234567890',
  pr_user_address: '123 Main St',
  pr_user_city: 'New York',
  commits_count: 8,
  bugs: '2',
  code_smells: '15',
  vulnerabilities: '1',
  reliability_rating_grade: 'A',
  security_rating_grade: 'B',
  maintainability_rating_grade: 'A',
  commits: [
    {
      date: '2024-01-15',
      commits: [
        {
          _id: 'commit-1',
          sha: 'a1b2c3d4e5f6',
          github_user: 'johndoe',
          message: 'Initial commit: Add basic authentication structure',
          pull_request_number: 123,
          timestamp: '2024-01-15T10:30:00Z',
          url: 'https://github.com/example/repo/commit/a1b2c3d4e5f6',
          full_date: '2024-01-15',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
        {
          _id: 'commit-2',
          sha: 'b2c3d4e5f6g7',
          github_user: 'johndoe',
          message: 'Implement JWT token validation and refresh mechanism',
          pull_request_number: 123,
          timestamp: '2024-01-15T11:45:00Z',
          url: 'https://github.com/example/repo/commit/b2c3d4e5f6g7',
          full_date: '2024-01-15',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
      ],
    },
    {
      date: '2024-01-16',
      commits: [
        {
          _id: 'commit-3',
          sha: 'c3d4e5f6g7h8',
          github_user: 'johndoe',
          message: 'Add role-based access control middleware',
          pull_request_number: 123,
          timestamp: '2024-01-16T09:15:00Z',
          url: 'https://github.com/example/repo/commit/c3d4e5f6g7h8',
          full_date: '2024-01-16',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
        {
          _id: 'commit-4',
          sha: 'd4e5f6g7h8i9',
          github_user: 'johndoe',
          message: 'Implement password reset functionality with email verification',
          pull_request_number: 123,
          timestamp: '2024-01-16T11:30:00Z',
          url: 'https://github.com/example/repo/commit/d4e5f6g7h8i9',
          full_date: '2024-01-16',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
        {
          _id: 'commit-5',
          sha: 'e5f6g7h8i9j0',
          github_user: 'johndoe',
          message: 'Add comprehensive unit tests for authentication module',
          pull_request_number: 123,
          timestamp: '2024-01-16T13:45:00Z',
          url: 'https://github.com/example/repo/commit/e5f6g7h8i9j0',
          full_date: '2024-01-16',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
      ],
    },
    {
      date: '2024-01-16',
      commits: [
        {
          _id: 'commit-3',
          sha: 'c3d4e5f6g7h8',
          github_user: 'johndoe',
          message: 'Add role-based access control middleware',
          pull_request_number: 123,
          timestamp: '2024-01-16T09:15:00Z',
          url: 'https://github.com/example/repo/commit/c3d4e5f6g7h8',
          full_date: '2024-01-16',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
        {
          _id: 'commit-4',
          sha: 'd4e5f6g7h8i9',
          github_user: 'johndoe',
          message: 'Implement password reset functionality with email verification',
          pull_request_number: 123,
          timestamp: '2024-01-16T11:30:00Z',
          url: 'https://github.com/example/repo/commit/d4e5f6g7h8i9',
          full_date: '2024-01-16',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
        {
          _id: 'commit-5',
          sha: 'e5f6g7h8i9j0',
          github_user: 'johndoe',
          message: 'Add comprehensive unit tests for authentication module',
          pull_request_number: 123,
          timestamp: '2024-01-16T13:45:00Z',
          url: 'https://github.com/example/repo/commit/e5f6g7h8i9j0',
          full_date: '2024-01-16',
          first_name: 'John',
          last_name: 'Doe',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Senior Developer',
        },
      ],
    },
  ],
};

const mockPullRequestWithoutCommits: GitHubPullRequest = {
  _id: 'pr-124',
  prTitle: 'Update documentation and README files',
  prNumber: 124,
  prCreatedAt: '2024-01-17T08:00:00Z',
  prMergedAt: null,
  prStatus: 'open',
  prUserId: 'user-789',
  pr_title: 'Update documentation and README files',
  pr_number: 124,
  pr_created_at: '2024-01-17T08:00:00Z',
  pr_merged_at: null,
  pr_status: 'open',
  pr_user_id: 'user-789',
  pr_user_name: 'Jane Smith',
  pr_user_image_uri: 'https://via.placeholder.com/40',
  pr_user_role: 'Technical Writer',
  pr_user_email: 'jane.smith@example.com',
  pr_user_phone: '+1234567891',
  pr_user_address: '456 Oak Ave',
  pr_user_city: 'San Francisco',
  commits_count: 0,
  bugs: '0',
  code_smells: '3',
  vulnerabilities: '0',
  reliability_rating_grade: 'A',
  security_rating_grade: 'A',
  maintainability_rating_grade: 'A',
  commits: [],
};

const mockPullRequestWithIssues: GitHubPullRequest = {
  _id: 'pr-125',
  prTitle: 'Refactor legacy codebase and fix critical security vulnerabilities',
  prNumber: 125,
  prCreatedAt: '2024-01-18T14:00:00Z',
  prMergedAt: null,
  prStatus: 'open',
  prUserId: 'user-101',
  pr_title: 'Refactor legacy codebase and fix critical security vulnerabilities',
  pr_number: 125,
  pr_created_at: '2024-01-18T14:00:00Z',
  pr_merged_at: null,
  pr_status: 'open',
  pr_user_id: 'user-101',
  pr_user_name: 'Mike Johnson',
  pr_user_image_uri: 'https://via.placeholder.com/40',
  pr_user_role: 'Lead Developer',
  pr_user_email: 'mike.johnson@example.com',
  pr_user_phone: '+1234567892',
  pr_user_address: '789 Pine St',
  pr_user_city: 'Chicago',
  commits_count: 12,
  bugs: '8',
  code_smells: '45',
  vulnerabilities: '5',
  reliability_rating_grade: 'C',
  security_rating_grade: 'D',
  maintainability_rating_grade: 'C',
  commits: [
    {
      date: '2024-01-18',
      commits: [
        {
          _id: 'commit-6',
          sha: 'f6g7h8i9j0k1',
          github_user: 'mikejohnson',
          message: 'Fix SQL injection vulnerability in user authentication',
          pull_request_number: 125,
          timestamp: '2024-01-18T14:00:00Z',
          url: 'https://github.com/example/repo/commit/f6g7h8i9j0k1',
          full_date: '2024-01-18',
          first_name: 'Mike',
          last_name: 'Johnson',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Lead Developer',
        },
        {
          _id: 'commit-7',
          sha: 'g7h8i9j0k1l2',
          github_user: 'mikejohnson',
          message: 'Refactor database connection handling to prevent memory leaks',
          pull_request_number: 125,
          timestamp: '2024-01-18T15:30:00Z',
          url: 'https://github.com/example/repo/commit/g7h8i9j0k1l2',
          full_date: '2024-01-18',
          first_name: 'Mike',
          last_name: 'Johnson',
          image_uri: 'https://via.placeholder.com/40',
          talent_role: 'Lead Developer',
        },
      ],
    },
  ],
};

export const WithCommits: Story = {
  args: {
    data: mockPullRequestWithCommits,
    sasToken: 'sample-sas-token',
  },
};

export const WithoutCommits: Story = {
  args: {
    data: mockPullRequestWithoutCommits,
  },
};

export const WithIssues: Story = {
  args: {
    data: mockPullRequestWithIssues,
  },
};

export const WithSasToken: Story = {
  args: {
    data: mockPullRequestWithCommits,
    sasToken: 'your-sas-token-here',
  },
};

export const SingleCommit: Story = {
  args: {
    data: {
      ...mockPullRequestWithCommits,
      commits: [
        {
          date: '2024-01-15',
          commits: [
            {
              _id: 'commit-single',
              sha: 'single123456',
              github_user: 'johndoe',
              message: 'Add new feature implementation',
              pull_request_number: 123,
              timestamp: '2024-01-15T10:30:00Z',
              url: 'https://github.com/example/repo/commit/single123456',
              full_date: '2024-01-15',
              first_name: 'John',
              last_name: 'Doe',
              image_uri: 'https://via.placeholder.com/40',
              talent_role: 'Senior Developer',
            },
          ],
        },
      ],
      commits_count: 1,
    },
  },
};

export const HighQualityCode: Story = {
  args: {
    data: {
      ...mockPullRequestWithCommits,
      bugs: '0',
      code_smells: '2',
      vulnerabilities: '0',
      reliability_rating_grade: 'A',
      security_rating_grade: 'A',
      maintainability_rating_grade: 'A',
    },
  },
};

export const LowQualityCode: Story = {
  args: {
    data: {
      ...mockPullRequestWithCommits,
      bugs: '15',
      code_smells: '78',
      vulnerabilities: '8',
      reliability_rating_grade: 'D',
      security_rating_grade: 'F',
      maintainability_rating_grade: 'D',
    },
  },
};
