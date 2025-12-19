export type RawStatus = 'ACTIVE' | 'COMPLETED' | 'ON_GOING' | 'INACTIVE' | 'ARCHIVED' | 'OPEN' | 'ONGOING';

export interface StatusTagProps {
  status: RawStatus;
}
