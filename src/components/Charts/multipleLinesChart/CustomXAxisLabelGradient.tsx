/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThumbsUp } from 'react-feather';
import TooltipInfo from './TooltipInfo';
import { RosetteType } from './types';

interface CustomXAxisLabelGradientProps {
  props: {
    x: number;
    y: number;
    payload: any;
  };
  chartData: any;
  XAxisDataKey: string;
  rosetteType?: RosetteType;
  customToolTipLabels?: {
    [key: string]: string;
  };
}

export default function CustomXAxisLabelGradient({
  props,
  chartData,
  XAxisDataKey,
  rosetteType = RosetteType.INDIVIDUAL,
  customToolTipLabels = {},
}: CustomXAxisLabelGradientProps) {
  const { x, y, payload } = props;
  const dataPoint = chartData.find((item: { [x: string]: any }) => item[XAxisDataKey] === payload.value);

  // Calculate total wows and kudos from all team members for this milestone
  let totalWows = 0;
  let totalKudos = 0;

  if (dataPoint) {
    if (dataPoint.wow_count !== undefined) {
      totalWows += dataPoint.wow_count || 0;
    }
    if (dataPoint.kudos_count !== undefined) {
      totalKudos += dataPoint.kudos_count || 0;
    }
    Object.keys(dataPoint).forEach((key) => {
      if (key !== XAxisDataKey && typeof dataPoint[key] === 'object' && dataPoint[key] !== null) {
        totalWows += dataPoint[key].wow_count || 0;
        totalKudos += dataPoint[key].kudos_count || 0;
      }
    });
  }

  const { wows, kudos } = customToolTipLabels || {};

  const prefix = rosetteType === RosetteType.TEAM ? 'Team ' : '';

  const wowTooltipLabel = wows ?? `${prefix}Wows!`;
  const kudosTooltipLabel = kudos ?? `${prefix}Kudos`;

  return (
    <foreignObject x={x - 50} y={y} width={120} height={120}>
      <div className="flex flex-col gap-2 items-center text-gray-600">
        <span className="text-sm">{payload.value}</span>
        {dataPoint && (
          <div className="flex gap-2">
            {totalWows > 0 && (
              <TooltipInfo
                className="w-[200px]"
                side="bottom"
                align="center"
                trigger={
                  <div className="flex items-center gap-1 bg-[#1CADE31F] rounded-[16px] py-1 px-[10px]">
                    <img src="/achieve.svg" alt="achievement" className="w-4 h-4" />
                    <div className="font-montserrat text-[14px] font-semibold leading-[22px] text-[#1CADE3]">
                      +{totalWows || 0}
                    </div>
                  </div>
                }
              >
                {wowTooltipLabel}
              </TooltipInfo>
            )}
            {totalKudos > 0 && (
              <TooltipInfo
                className="w-[200px]"
                side="bottom"
                align="center"
                trigger={
                  <div className="flex items-center gap-1 bg-[#7367F01F] rounded-full py-1 px-2">
                    <ThumbsUp size={16} color="#7367F0" />
                    <div className="font-montserrat text-[14px] font-semibold leading-[22px] text-[#7367F0]">
                      +{totalKudos || 0}
                    </div>
                  </div>
                }
              >
                {kudosTooltipLabel}
              </TooltipInfo>
            )}
          </div>
        )}
      </div>
    </foreignObject>
  );
}
