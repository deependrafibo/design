import { Toggle } from '../toggle/Toggle';
import { TalentProfileHeaderProps } from './types';
import { CustomChevronRight } from '../../assets/icons/CustomChevronRight';
import { Avatar } from '../avatar/Avatar';
import { StatusBadge } from '../StatusBadge/StatusBadge';

const styles = {
  title: 'text-gray-700 font-Montserrat text-base font-semibold leading-5',
  subtitle: 'text-gray-400 font-Montserrat text-xs font-semibold leading-4',
  name: 'text-gray-600 font-Montserrat font-medium leading-5',
  email: 'text-gray-300 font-Montserrat text-xs font-semibold leading-4',
};

export const TalentProfileHeader: React.FC<TalentProfileHeaderProps> = ({
  name,
  email,
  imageUri,
  department,
  role,
  dateAdded,
  toggleOn = false,
  onToggle,
  onNameClick,
  className,
  label,
  type,
  alt,
  isToggleDisabled = false,
}) => {
  return (
    <div
      className={`${className} rounded-lg bg-amber-300 bg-gradient-to-t from-white/90 to-white/90 shadow-md py-4 px-5 flex items-center  gap-5  font-montserrat`}
    >
      <div className="w-full flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Avatar src={imageUri} size={40} alt={alt} />
            <div className="flex flex-col gap-1">
              {onNameClick ? (
                <div className="flex items-center gap-1 cursor-pointer" onClick={onNameClick}>
                  <div className={styles.name}>{name}</div>
                  <CustomChevronRight color="#0185E4" width={18} height={18} />
                </div>
              ) : (
                <div className={styles.name}>{name}</div>
              )}
              <div className={styles.subtitle}>{email}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          {department && (
            <>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col gap-2">
                <div className={styles.title}>{department}</div>
                <div className={styles.subtitle}>Department</div>
              </div>
            </>
          )}

          <div className="w-px h-12 bg-gray-200"></div>

          <div className="flex flex-col gap-2">
            <div className={styles.title}>{role}</div>
            <div className={styles.subtitle}>Role</div>
          </div>

          <div className="w-px h-12 bg-gray-200"></div>

          <div className="flex flex-col gap-2">
            <div className={styles.title}>{dateAdded}</div>
            <div className={styles.subtitle}>Date Added</div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {label && type && <StatusBadge label={label} type={type} />}
          {onToggle && (
            <div className="flex flex-col gap-2">
              <Toggle checked={toggleOn} onClick={onToggle} disabled={!!isToggleDisabled} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentProfileHeader;
