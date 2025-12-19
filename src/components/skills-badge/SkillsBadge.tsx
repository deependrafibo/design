import { SkillsBadgeProps } from './types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const SkillsBadge: React.FC<SkillsBadgeProps> = ({ skills, showCount, className, skillClassName }) => {
  const displayCount = showCount && showCount < skills.length ? showCount : skills.length;
  const remainingCount = skills.length - displayCount;

  return (
    <div className={cn('flex flex-wrap gap-2 items-center', className)}>
      {skills.slice(0, displayCount).map((skill) => (
        <Badge
          key={skill.value}
          variant="secondary"
          className={cn('bg-secondary/10 text-secondary-foreground hover:bg-secondary/20', skillClassName)}
        >
          {skill.label}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant="muted" className={cn('bg-muted/50 text-muted-foreground hover:bg-muted/60', skillClassName)}>
          +{remainingCount}
        </Badge>
      )}
    </div>
  );
};
