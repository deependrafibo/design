import { StatusBadge } from '../StatusBadge/StatusBadge';
import { Toggle } from '../toggle/Toggle';
import { CohortHeaderProps } from './types';

export const CohortHeader: React.FC<CohortHeaderProps> = ({
  cohortName,
  departmentName,
  keySkills,
  endDate,
  onToggle,
  toggleOn,
  label,
  type,
  className = '',
  epuAvailable,
  avgLearnibiltyScore,
  showToggle,
  medianLearnibiltyScore,
  medianTsScore,
}) => {
  return (
    <div
      className={`${className} rounded-[10px] w-full bg-teal-500 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] py-4 px-5 flex items-center text-white font-montserrat`}
    >
      <div className="flex items-center flex-grow gap-2">
        <div className="flex flex-col min-w-[20%]">
          <div className="text-base font-semibold text-gray-0">{cohortName}</div>
          <div className="text-xs font-normal text-gray-0 mt-1">Cohort Name</div>
        </div>

        <div className="w-[1px] h-[48px] bg-[#E6E7E7] mr-2"></div>

        <div className="flex flex-col min-w-[25%]">
          <div className="text-base font-semibold text-gray-0 truncate">{departmentName}</div>
          <div className="text-xs font-normal text-gray-0 mt-1">Department Name</div>
        </div>

        {keySkills && (
          <>
            <div className="w-[1px] h-[48px] bg-[#E6E7E7] mr-2"></div>
            <div className="flex flex-col w-[20%]">
              <div className="flex flex-wrap gap-2">
                {keySkills?.slice(0, 3).map((skill, index) => (
                  <div key={index} className="text-xs px-2 py-1 rounded-sm bg-gray-200 font-medium text-teal-500">
                    {skill}
                  </div>
                ))}
                {keySkills?.length && keySkills?.length > 3 && (
                  <div className="text-xs px-2 py-1 rounded-sm bg-gray-200 font-medium text-teal-500">
                    +{keySkills?.length - 3}
                  </div>
                )}
              </div>
              <div className="text-xs font-normal text-gray-0 mt-1">Key Skills</div>
            </div>
          </>
        )}

        {(avgLearnibiltyScore || medianLearnibiltyScore) && (
          <>
            <div className="w-[1px] h-[48px] bg-[#E6E7E7] mr-2"></div>
            <div className="flex flex-col min-w-[10%]">
              <div className="text-base font-semibold text-gray-0">
                {avgLearnibiltyScore || medianLearnibiltyScore}
                <span className="text-xs font-normal text-gray-0 ml-1">/100</span>
              </div>
              <div className="text-xs font-normal text-gray-0 mt-1">
                {avgLearnibiltyScore ? 'Avg Learnability Score' : 'Median Learnability Score'}
              </div>
            </div>
          </>
        )}

        {medianTsScore && (
          <>
            <div className="w-[1px] h-[48px] bg-[#E6E7E7] mr-2"></div>
            <div className="flex flex-col min-w-[10%]">
              <div className="text-base font-semibold text-gray-0">
                {medianTsScore}
                <span className="text-xs font-normal text-gray-0 ml-1">/100</span>
              </div>
              <div className="text-xs font-normal text-gray-0 mt-1">Median Technical Effectiveness</div>
            </div>
          </>
        )}
        {epuAvailable && (
          <>
            <div className="w-[1px] h-[48px] bg-[#E6E7E7] mr-2"></div>
            <div className="flex flex-col min-w-[10%]">
              <div className="text-base font-semibold text-gray-0">{epuAvailable}</div>
              <div className="text-xs font-normal text-gray-0 mt-1">EPU Available</div>
            </div>
          </>
        )}

        {endDate && (
          <>
            <div className="w-[1px] h-[48px] bg-[#E6E7E7] mr-2"></div>
            <div className="flex flex-col min-w-[10%]">
              <div className="text-base font-semibold text-gray-0">{endDate}</div>
              <div className="text-xs font-normal text-gray-0 mt-1">End Date</div>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-end gap-4 ml-5 min-w-[10%]">
        {label && type && <StatusBadge label={label} type={type} />}
        {showToggle && <Toggle checked={toggleOn} onClick={onToggle} toggleClassName={'#28C76F'} />}
      </div>
    </div>
  );
};
