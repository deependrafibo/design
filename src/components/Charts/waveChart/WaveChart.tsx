/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react';
import { CartesianGrid, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, ComposedChart } from 'recharts';
import { WaveChartProps } from './types';
import { Star } from 'react-feather';
import { Tooltip as LabelTooltip } from '../../tooltip/Tooltip';
import { cn } from '@/lib/utils';

export default function WaveChart({
  chartData,
  chartConfig,
  maxYAxis = 10,
  XAxisDataKey,
  YAxisDataKey = 'talent',
  showFilters = true,
  containerClassWidth,
  highlightByKey,
  customXAxisLabel: CustomXAxisLabel,
}: WaveChartProps) {
  const firstKey = Object.keys(chartConfig)[0];
  const [selectedMetric, setSelectedMetric] = useState(firstKey);
  const getAverage = (metric: string) => {
    const values = chartData
      ?.map((d: any) => d[metric]?.[YAxisDataKey])
      ?.filter((v: number | null | undefined) => v != null);

    if (values?.length === 0) return 0;
    return (values?.reduce((a: any, b: any) => a + b, 0) / values?.length)?.toFixed(1);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="bg-white py-2 px-3 rounded-[6px] shadow-[0_2px_8px_0_rgba(0,0,0,0.16)] flex flex-col gap-1">
        <div className="text-[10px] font-semibold text-Grey-400 uppercase">{label} PERFORMANCE</div>
        {payload?.map((entry: any) => {
          const labelText = entry.dataKey.includes('talent') ? "Talent's Score" : 'Cohort Average';
          const dotColor = entry.dataKey.includes('talent') ? 'bg-[#0185E4]' : 'bg-[#FF9F43]';
          return (
            <div key={entry.dataKey} className="flex items-center justify-start gap-1 ">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
                <div className="text-xs  text-Grey-700">{labelText}:</div>
              </div>
              <span className="text-xs font-semibold text-Grey-700">
                {entry?.value != null ? `${entry?.value}/${maxYAxis}` : 'No Result'}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // const isAllTalentZero = React.useMemo(() => {
  //   if (!selectedMetric || !chartData || !chartData.length) return false;

  //   // Check every point and collect all values
  //   const allValues = [];
  //   for (const item of chartData) {
  //     const value = item?.[selectedMetric]?.talent;
  //     allValues?.push({ milestone: item?.milestone, value });
  //   }

  //   const allZero = allValues?.map(({ value }) => value === 0 || value === null || value === undefined);

  //   return allZero;
  // }, [chartData, selectedMetric]);

  const CompetencyLabel = ({ label }: { label: string }) => {
    const labelRef = useRef<HTMLSpanElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    // Handle null/undefined/empty labels for backward compatibility
    const safeLabel = label || '';

    useEffect(() => {
      const checkTruncation = () => {
        if (labelRef.current && safeLabel) {
          setIsTruncated(labelRef.current.scrollWidth > labelRef.current.clientWidth);
        } else {
          setIsTruncated(false);
        }
      };

      // Use a small delay to ensure DOM is fully rendered
      const timeoutId = setTimeout(checkTruncation, 0);
      checkTruncation();
      window.addEventListener('resize', checkTruncation);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', checkTruncation);
      };
    }, [safeLabel]);

    const labelElement = (
      <span ref={labelRef} className="truncate block w-full">
        {safeLabel}
      </span>
    );

    // Only show tooltip if text is actually truncated and label exists
    if (isTruncated && safeLabel) {
      return (
        <LabelTooltip message={safeLabel} position="top">
          {labelElement}
        </LabelTooltip>
      );
    }

    return labelElement;
  };

  return (
    <div className="w-full">
      {showFilters && (
        <div className="w-full grid grid-cols-3 gap-[10px] justify-between bg-white">
          {Object?.entries(chartConfig)?.map(([key, config]) => {
            const isTopCompetency = config?.[highlightByKey ?? 'topCompetency'];
            const label = config?.label || ''; // Safe label access for backward compatibility
            return (
              <div
                key={key}
                onClick={() => setSelectedMetric(key)}
                className={cn(
                  'py-3 px-4 rounded-[8px] flex items-start flex-col cursor-pointer',
                  selectedMetric === key
                    ? 'border-2 border-[#0185E4] bg-[#E5F3FC] shadow-[0_4px_24px_0_rgba(0,0,0,0.06)]'
                    : 'border border-[#ccc]',
                )}
              >
                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    <strong>{getAverage(key)}</strong>/<span>{maxYAxis}</span>
                  </div>
                  {isTopCompetency && (
                    <span className="text-[#EA5455] text-xs font-medium">
                      <Star className="w-4 h-4 text-[#FF9F43] fill-current" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-grey-700 w-full min-w-0">
                  <div className="flex-1 min-w-0">
                    <CompetencyLabel label={label} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="w-full overflow-x-auto">
        <div style={{ minWidth: '100%', height: 300, width: `${containerClassWidth}` }}>
          <ResponsiveContainer>
            <ComposedChart data={chartData} margin={{ top: 24, right: 60, bottom: CustomXAxisLabel ? 40 : 20 }}>
              <CartesianGrid strokeDasharray="4 12" vertical={false} />
              <XAxis
                dataKey={XAxisDataKey}
                axisLine={false}
                tickLine={false}
                tickMargin={16}
                fontSize={12}
                fontWeight={400}
                color={'#394042'}
                scale="point"
                padding={{ left: 50, right: 0 }}
                tick={(props: any) => {
                  // With scale="point", bars are centered at props.x
                  // We need to ensure labels are also centered at props.x
                  if (CustomXAxisLabel) {
                    return (
                      <CustomXAxisLabel
                        props={props}
                        chartData={chartData}
                        XAxisDataKey={XAxisDataKey}
                      />
                    );
                  }
                  // Default label: center at props.x (width 100, so x - 50 centers it)
                  return (
                    <foreignObject x={props.x - 50} y={props.y} width={100} height={120}>
                      <div className="flex flex-col items-center text-gray-600">
                        <span className="text-sm">{props.payload.value}</span>
                      </div>
                    </foreignObject>
                  );
                }}
              />
              <YAxis
                domain={[0, maxYAxis]}
                tickFormatter={(v) => v.toString().padStart(2, '0')}
                tickCount={6}
                tickMargin={8}
                axisLine={false}
                tickLine={false}
                fontSize={12}
                fontWeight={400}
                color={'#394042'}
              />
              <Tooltip content={<CustomTooltip />} />

              <Bar dataKey={`${selectedMetric}.talent`} fill={'#0185E4'} radius={[4, 4, 0, 0]} maxBarSize={60} />

              <Line
                dataKey={`${selectedMetric}.cohort`}
                stroke={'#FF9F43'}
                strokeWidth={3}
                activeDot={{ r: 6 }}
                connectNulls={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
