export interface CommitStatusTagProps {
  status: 'Open' | 'Merged' | 'Closed' | 'OPEN' | 'MERGED' | 'CLOSED' | 'open' | 'merged' | 'closed';
  className?: string;
}
