export type SkillsBadgeProps = {
  skills: Array<{
    label: string;
    value: string;
  }>;
  showCount?: number;
  className?: string;
  skillClassName?: string;
};
