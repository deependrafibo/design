import { StatusBadge } from '../StatusBadge/StatusBadge';
import { Toggle } from '../toggle/Toggle';
import { DepartmentHeaderProps } from './types';

const styles = {
  title: 'text-white font-Montserrat text-base font-semibold leading-5',
  subtitle: 'text-white font-Montserrat text-xs font-semibold leading-4',
};

export const DepartmentHeader: React.FC<DepartmentHeaderProps> = ({
  name,
  identifier,
  cohortCount,
  createdAt,
  toggleOn,
  onToggle,
  className = '',
  label,
  type,
  disabled,
}) => {
  return (
    <div
      className={`${className} rounded-[10px] bg-[#272E98] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] py-[16px] px-[20px] text-white flex items-center justify-between gap-[20px] font-montserrat`}
    >
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-2">
          <div className={styles.title}>{name}</div>
          <div className={styles.subtitle}>Department Name</div>
        </div>
        <div className="w-[1px] h-[48px] bg-[#E6E7E7]"></div>
        <div className="flex flex-col gap-2">
          <div className={styles.title}>{identifier}</div>
          <div className={styles.subtitle}>Department Identifier</div>
        </div>
        <div className="w-[1px] h-[48px] bg-[#E6E7E7]"></div>
        <div className="flex flex-col gap-2">
          <div className={styles.title}>{cohortCount}</div>
          <div className={styles.subtitle}>Cohorts</div>
        </div>
        <div className="w-[1px] h-[48px] bg-[#E6E7E7]"></div>
        <div className="flex flex-col gap-2">
          <div className={styles.title}>{createdAt}</div>
          <div className={styles.subtitle}>Date Created</div>
        </div>
      </div>

      <div className="flex items-center gap-[20px]">
        {label && type && <StatusBadge label={label} type={type} />}
        <div className="flex flex-col gap-2">
          <Toggle checked={toggleOn} onClick={onToggle} disabled={disabled} />
        </div>
      </div>
    </div>
  );
};

export default DepartmentHeader;
