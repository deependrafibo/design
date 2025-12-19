export type ParsedPaginatedData<T> = {
  metadata: {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    hasNextPage: boolean;
  };
  data: (T & { id: string; name: string })[];
};

export type GitHubBranchCommit = {
  id: string;
  githubUser: string;
  message: string;
  projectId: string;
  timestamp: number;
  url: string;
  userId: string;
  imageUri?: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type GitHubPullRequest = {
  _id: string;
  prTitle: string;
  prNumber: number;
  prCreatedAt: string;
  prMergedAt: string | null;
  prStatus: string;
  prUserId: string | null;
  commits: Array<{
    commits: Array<{
      _id: string;
      sha: string;
      github_user: string;
      message: string;
      pull_request_number: number;
      timestamp: string;
      url: string;
      full_date: string;
      first_name: string;
      last_name: string;
      image_uri: string;
      talent_role: string;
    }>;
    date: string;
  }>;
  commits_count: number;
  bugs: string;
  code_smells: string;
  vulnerabilities: string;
  reliability_rating_grade: string;
  security_rating_grade: string;
  maintainability_rating_grade: string;
  pr_title: string;
  pr_number: number;
  pr_created_at: string;
  pr_merged_at: string | null;
  pr_status: string;
  pr_user_id: string | null;
  pr_user_name: string | null;
  pr_user_image_uri: string | null;
  pr_user_role: string | null;
  pr_user_email: string | null;
  pr_user_phone: string | null;
  pr_user_address: string | null;
  pr_user_city: string | null;
};

export type GitHubPullRequestHistory = ParsedPaginatedData<GitHubPullRequest>;

export type GitHubBranchHistory = ParsedPaginatedData<GitHubBranchCommit>;

export enum AccordionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}

type AccordionBaseProps = {
  type?: AccordionType;
  collapsible?: boolean;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
};

type SingleAccordionProps = {
  type?: AccordionType.SINGLE;
  section: {
    value: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
  };
  isOpen?: boolean;
} & AccordionBaseProps;

type MultipleAccordionProps = {
  type?: AccordionType.MULTIPLE;
  sections: {
    value: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
  }[];
  isOpen?: boolean;
} & AccordionBaseProps;

type CustomAccordionProps = SingleAccordionProps | MultipleAccordionProps;

export type { AccordionBaseProps, SingleAccordionProps, MultipleAccordionProps, CustomAccordionProps };
