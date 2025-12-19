import { Tooltip } from '@/components/tooltip/Tooltip';
import { CustomInfo } from '@/assets/icons/CustomInfo';
import { GrowthBadge } from '@/components/growthBadge/GrowthBadge';

interface CustomFiltersProps {
  chartData: Array<{
    [key: string]: string | number | Record<string, string | number | unknown>;
  }>;
  onFilterChange: (selectedFilter: string) => void;
  selectedFilter: string;
  maxYAxis?: number;
  teScore?: number;
  learnability?: number;
  toolTipLabels?: {
    learnabilityScore?: string;
    technicalEffectiveness?: string;
  };
  learnability_score_improvement?: string;
  te_score_improvement?: string;
  isShowGrowthBadge?: boolean;
  isShowLearnability?: boolean;
  isShowTechnicalEffectiveness?: boolean;
  disableFilterClickActions?: boolean;
}

export const CustomFilters = ({
  onFilterChange,
  selectedFilter,
  maxYAxis = 100,
  teScore,
  learnability,
  toolTipLabels,
  learnability_score_improvement,
  te_score_improvement,
  isShowGrowthBadge,
  isShowLearnability = true,
  isShowTechnicalEffectiveness = true,
  disableFilterClickActions = false,
}: CustomFiltersProps) => {
  const showLearnability = Boolean(isShowLearnability);
  const showTechnicalEffectiveness = Boolean(isShowTechnicalEffectiveness);

  const isLearnabilityActive = showLearnability && (selectedFilter === 'learnability' || !showTechnicalEffectiveness);
  const isTechnicalActive = showTechnicalEffectiveness && (selectedFilter === 'technical' || !showLearnability);

  const handleToggle = (filterType: 'learnability' | 'technical') => {
    if (disableFilterClickActions) {
      return;
    }

    if (filterType === 'learnability' && showLearnability) {
      onFilterChange('learnability');
    }

    if (filterType === 'technical' && showTechnicalEffectiveness) {
      onFilterChange('technical');
    }
  };
  const learnabilityLabel = toolTipLabels?.learnabilityScore || '';
  const technicalLabel = toolTipLabels?.technicalEffectiveness || '';

  return (
    <div className="flex justify-between items-center gap-4 w-full">
      {showLearnability && (
        <div
          className={`flex items-center justify-center gap-1 flex-col rounded-[8px] px-6 py-3 border ${isLearnabilityActive ? ' border-secondary-500 bg-[#E6F3FC]' : 'border-Grey-50 bg-white'}   shadow-emptyState ${showTechnicalEffectiveness ? 'w-1/2' : 'w-full'} cursor-pointer transition-shadow`}
          onClick={() => handleToggle('learnability')}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-1">
              <p
                className={`${isLearnabilityActive ? 'text-secondary-500' : 'text-Grey-900'} text-[26px] font-semibold`}
              >
                {learnability}
              </p>
              <span
                className={`${isLearnabilityActive ? 'text-secondary-500' : 'text-Grey-400'} text-base font-normal`}
              >
                /{maxYAxis}{' '}
              </span>
            </div>
            {learnability_score_improvement && (
              <GrowthBadge percentage={learnability_score_improvement} isShowBadge={isShowGrowthBadge} />
            )}
          </div>
          <div
            className={`${isLearnabilityActive ? 'text-secondary-500' : 'text-Grey-400'} text-sm font-medium flex items-center gap-1`}
          >
            Learnability Score
            <Tooltip message={learnabilityLabel} position="right" className="flex items-center gap-2">
              <CustomInfo
                width={16}
                height={16}
                color={isLearnabilityActive ? 'var(--color-secondary-500)' : 'var(--color-Grey-300)'}
              />
            </Tooltip>
          </div>
        </div>
      )}
      {showTechnicalEffectiveness && (
        <div
          className={`flex items-center gap-1 flex-col rounded-[8px] px-6 py-3 border ${isTechnicalActive ? 'border-secondary-500 bg-[#E6F3FC]' : 'border-Grey-50 bg-white'}  shadow-emptyState  cursor-pointer transition-shadow ${showLearnability ? 'w-1/2' : 'w-full'}`}
          onClick={() => handleToggle('technical')}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-1">
              <p className={`${isTechnicalActive ? 'text-secondary-500' : 'text-Grey-900'} text-[26px] font-semibold`}>
                {teScore}
              </p>
              <span className={`${isTechnicalActive ? 'text-secondary-500' : 'text-Grey-400'} text-base font-normal`}>
                /{maxYAxis}{' '}
              </span>
            </div>
            {te_score_improvement && <GrowthBadge percentage={te_score_improvement} isShowBadge={isShowGrowthBadge} />}
          </div>
          <div
            className={`${isTechnicalActive ? 'text-secondary-500' : 'text-Grey-400'} text-sm font-medium flex items-center gap-1`}
          >
            Technical Effectiveness{' '}
            <Tooltip message={technicalLabel} position="right" className="flex items-center gap-2">
              <CustomInfo
                width={16}
                height={16}
                color={isTechnicalActive ? 'var(--color-secondary-500)' : 'var(--color-Grey-300)'}
              />
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};
