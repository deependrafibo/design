/* eslint-disable @typescript-eslint/no-explicit-any */

import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { useEffect, useState, useRef } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { ChartConfig, ChartTooltip } from '@/components/ui/chart';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from '@/components/ui/tooltip';
import { isEmpty } from 'lodash';
import { RosetteType } from './types';
import { CustomFilters } from './customFilters';
import { truncateSentence } from '@/lib/utils';

interface MultipleLinesChartProps {
  maxYAxis?: number;
  chartData: Array<{
    [key: string]: string | number | Record<string, string | number | any>;
  }>;
  chartConfig: ChartConfig;
  showFilters?: boolean;
  hasGradient?: boolean;
  XAxisDataKey: string;
  YAxisDataKey?: string;
  customTooltipContent?: React.ComponentType<any>;
  filterPropertyName?: string;
  showDataOnFilters?: boolean;
  hideDeselectedMetricsFromTooltip?: boolean;
  customXAxisLabel?: React.ComponentType<any>;
  filtersLabel?: string;
  legendLabel?: boolean;
  rosetteType?: RosetteType;
  toolTipLabels?: {
    [key: string]: string;
  };
  customFilters?: boolean;
  te_score?: number;
  learnability?: number;
  learnability_score_improvement?: string;
  te_score_improvement?: string;
  isShowGrowthBadge?: boolean;
  isShowLearnability?: boolean;
  isShowTechnicalEffectiveness?: boolean;
  disableFilterClickActions?: boolean;
  tooltipLabel?: string;
}

export default function MultipleLinesChart(props: Readonly<MultipleLinesChartProps>) {
  const {
    maxYAxis,
    chartData,
    chartConfig,
    showFilters,
    hasGradient,
    XAxisDataKey,
    YAxisDataKey,
    customTooltipContent: CustomContent,
    filterPropertyName,
    showDataOnFilters = true,
    hideDeselectedMetricsFromTooltip,
    customXAxisLabel: CustomXAxisLabel,
    filtersLabel,
    legendLabel = false,
    rosetteType,
    toolTipLabels = {},
    customFilters = false,
    te_score,
    learnability,
    learnability_score_improvement,
    te_score_improvement,
    isShowGrowthBadge = true,
    isShowLearnability = true,
    isShowTechnicalEffectiveness = true,
    disableFilterClickActions = false,
    tooltipLabel,
  } = props;
  const chartId = `chart-${Math.random().toString(36).substr(2, 9)}`;

  const CustomTooltipContent = ({ active, payload, label, selectedMetrics, showAll, tooltipLabel }: any) => {
    if (!active || !payload?.length) return null;

    const formatLabel = (originalLabel: string) => {
      if (!tooltipLabel) return originalLabel;
      // Replace the first word (prefix) with tooltipLabel
      // e.g., "Milestone 1" -> "Module 1" if tooltipLabel="Module"
      const parts = originalLabel.split(' ');
      if (parts.length > 1) {
        return `${tooltipLabel} ${parts.slice(1).join(' ')}`;
      }
      return originalLabel;
    };

    return (
      <div className="bg-white w-[450px] max-w-1/2 px-3 py-2 rounded-[6px] shadow-custom-shadow flex flex-col gap-y-1">
        <p className=" text-[10px] font-semibold leading-4 text-Grey-400 uppercase">{formatLabel(label)} </p>
        {payload?.map((entry: any) => {
          if (!entry?.dataKey) return null;
          const baseKey = typeof entry?.dataKey === 'string' ? entry?.dataKey?.split('.')[0] : entry?.dataKey;
          const isSelected = showAll || selectedMetrics?.includes(baseKey as string);

          return (
            <div key={entry?.dataKey} className="flex justify-between items-center">
              <span className=" text-xs font-normal leading-5 text-Grey-700 flex items-center gap-2">
                <div
                  style={{
                    backgroundColor: chartConfig[baseKey]?.color,
                    opacity: !isSelected ? 0.12 : 1,
                  }}
                  className="w-3 h-3 rounded-[2px]"
                ></div>
                <div className="text-xs text-Grey-700">{chartConfig[baseKey]?.label}</div>
              </span>
              <span className=" text-xs font-semibold leading-5 text-Grey-700">
                {entry?.value}/{maxYAxis}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const [customFilterType, setCustomFilterType] = useState<string>('learnability');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isShowLearnability && customFilterType === 'learnability' && isShowTechnicalEffectiveness) {
      setCustomFilterType('technical');
    }

    if (!isShowTechnicalEffectiveness && customFilterType === 'technical' && isShowLearnability) {
      setCustomFilterType('learnability');
    }
  }, [customFilterType, isShowLearnability, isShowTechnicalEffectiveness]);

  const toggleMetric = (metric: string) => {
    setShowAll(false);

    if (isEmpty(selectedMetrics)) {
      setSelectedMetrics([metric]);
    } else {
      setSelectedMetrics((prev) => (prev?.includes(metric) ? prev?.filter((m) => m !== metric) : [...prev, metric]));
    }
  };

  const toggleAll = () => {
    setSelectedMetrics([]);
  };

  const getAverage = (data: any[], metric: string) => {
    if (data?.length <= 1) {
      return 0;
    }

    if (YAxisDataKey) {
      data = data?.map((item) => {
        const transformed = {
          ...item,
          [metric]: item[metric] && item[metric][YAxisDataKey] !== undefined ? item[metric][YAxisDataKey] : undefined,
        };
        return transformed;
      });
    }

    const validData = data?.filter((curr) => curr[metric] !== undefined && curr[metric] !== null);

    if (validData?.length === 0) {
      return 0;
    }

    const result = (validData?.reduce((acc, curr) => acc + (curr[metric] || 0), 0) / validData?.length).toFixed(2);
    return result;
  };

  const getFilteredChartData = () => {
    if (!customFilters) {
      return chartData;
    }

    return chartData.map((item) => {
      const filteredItem: any = {
        milestone: item.milestone,
      };
      Object.keys(item).forEach((talentKey) => {
        if (talentKey !== 'milestone' && item[talentKey] && typeof item[talentKey] === 'object') {
          const talentData = item[talentKey] as any;

          filteredItem[talentKey] = {
            ...talentData,
            score: customFilterType === 'learnability' ? talentData.score : talentData.te_score,
            te_score: talentData.te_score,
            wows: talentData.wows,
            kudos: talentData.kudos,
          };
        }
      });
      return filteredItem;
    });
  };

  const getFilteredChartData2 = () => {
    if (!customFilters) {
      return chartData;
    }

    return chartData.map((item) => {
      const filteredItem: any = { ...item };

      if (customFilterType === 'learnability') {
        if (filteredItem.te_score !== undefined) {
          delete filteredItem.te_score;
        }
      } else if (customFilterType === 'technical') {
        if (filteredItem.trumio_attractiveness_score || filteredItem.score) {
          delete filteredItem.trumio_attractiveness_score;
          delete filteredItem.score;
        }
      }

      return filteredItem;
    });
  };
  const filteredChartData = hasGradient ? getFilteredChartData2() : getFilteredChartData();

  useEffect(() => {
    if (isEmpty(selectedMetrics)) {
      setShowAll(true);
    }
  }, [selectedMetrics]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className="p-5">
      {customFilters && (
        <CustomFilters
          chartData={chartData}
          onFilterChange={setCustomFilterType}
          selectedFilter={customFilterType}
          maxYAxis={maxYAxis}
          teScore={te_score}
          learnability={learnability}
          toolTipLabels={toolTipLabels}
          learnability_score_improvement={learnability_score_improvement}
          te_score_improvement={te_score_improvement}
          isShowGrowthBadge={isShowGrowthBadge}
          isShowLearnability={isShowLearnability}
          isShowTechnicalEffectiveness={isShowTechnicalEffectiveness}
          disableFilterClickActions={disableFilterClickActions}
        />
      )}
      {showFilters && (
        <div className={`${legendLabel ? 'gap-3 px-5' : 'gap-5 p-6'} bg-white rounded-t-lg flex items-center mt-6`}>
          <div className="flex items-center gap-4 ">
            {filtersLabel && <div className="font-medium leading-4 text-grey-700">{filtersLabel}</div>}
            {legendLabel && <div className="text-Grey-700 text-xs font-medium leading-4">Legend:</div>}
          </div>
          <div className="flex gap-5 items-stretch w-full">
            <div
              onClick={toggleAll}
              className={`flex flex-col justify-center items-start gap-1 ${legendLabel ? 'py-2 px-[10px]' : 'py-4 px-4'} flex-1 min-w-0 rounded-[8px] border cursor-pointer ${showAll ? 'border-secondary-500 bg-[#E5F3FC]' : 'border-Grey-50 bg-white'
                }`}
            >
              {!legendLabel
                ? showFilters &&
                showDataOnFilters && (
                  <div>
                    <span className="font-montserrat text-lg font-semibold leading-xxl-custom text-dark-900 text-center">
                      {Object.keys(chartConfig).length}{' '}
                    </span>
                    <span className="font-montserrat text-sm font-normal leading-sm-custom text-grey-500 text-center">
                      {filterPropertyName}
                    </span>
                  </div>
                )
                : null}

              <div className="font-montserrat text-sm font-medium leading-4 text-Grey-700">
                {legendLabel ? 'All' : 'All Competencies'}
              </div>
            </div>

            {chartConfig &&
              Object.entries(chartConfig).map(([key, { label, color }]) => (
                <>
                  {showFilters && showDataOnFilters ? (
                    <TooltipProvider key={key}>
                      <Tooltip>
                        <TooltipTrigger asChild className="flex-1">
                          <div
                            onClick={() => toggleMetric(key)}
                            className={`flex ${legendLabel ? 'flex-row items-center justify-start px-2 py-[10px]' : 'flex-col items-start justify-center px-4 py-3'} gap-1 flex-1 min-w-0 rounded-[8px] border cursor-pointer ${selectedMetrics?.includes(key)
                              ? 'border-secondary-500 bg-[#E5F3FC]'
                              : 'border-Grey-50 bg-white'
                              }`}
                          >
                            {!legendLabel ? (
                              <div>
                                <span className="font-montserrat text-lg font-semibold leading-4 text-Grey-900 text-center">
                                  {getAverage(chartData, key)}
                                </span>
                                <span className="font-montserrat text-sm font-normal leading-4 text-Grey-600 text-center">
                                  /{maxYAxis}
                                </span>
                              </div>
                            ) : null}
                            {legendLabel ? (
                              <div
                                className="flex w-1 max-1 h-[16px] rounded-[20px] z-10 "
                                style={{ backgroundColor: color }}
                              ></div>
                            ) : null}
                            <div className="font-montserrat text-sm font-medium text-Grey-700 text-left leading-tight">
                              {truncateSentence({ sentence: label, maxCharacters: 25 })}
                            </div>

                            {legendLabel ? null : (
                              <div
                                className="flex w-[52px] max-w-full h-1 rounded-full z-10"
                                style={{ backgroundColor: color }}
                              ></div>
                            )}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#323232] text-white font-montserrat text-xs font-normal leading-none tracking-wider">
                          <div className="flex flex-col gap-1">
                            <div className="text-white text-xs">{label}</div>
                          </div>
                          <TooltipArrow className="fill-[#323232]" />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <TooltipProvider key={key}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            onClick={() => toggleMetric(key)}
                            className={`flex p-3 items-center gap-3 w-[150px] rounded-lg border cursor-pointer ${selectedMetrics.includes(key) ? 'border-primary bg-primary-light' : 'border-grey-50'
                              }`}
                          >
                            <div className="flex w-1 h-full rounded-full z-10" style={{ backgroundColor: color }}></div>
                            <div className="font-montserrat text-sm font-medium leading-sm-custom text-dark-700 truncate">
                              {label}
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#323232] text-white font-montserrat text-xs font-normal leading-none tracking-wider">
                          <div className="flex flex-col gap-1">
                            <div className="text-white   text-xs">{label}</div>
                          </div>
                          <TooltipArrow className="fill-[#323232]" />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </>
              ))}
          </div>
        </div>
      )}

      <Card className="flex flex-col max-h-[400px] bg-white border-none shadow-none rounded-t-none pb-4">
        <CardContent>
          <div className="overflow-x-auto chart-scrollbar pb-4" ref={containerRef}>
            <div className="min-w-max">
              <div
                data-chart={chartId}
                className="w-full mt-10 flex text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none"
              >
                {/* Chart styling for colors */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      [data-chart=${chartId}] {
                        ${Object.entries(chartConfig)
                        .map(([key, config]) => (config.color ? `--color-${key}: ${config.color};` : null))
                        .filter(Boolean)
                        .join('\n')}
                      }
                    `,
                  }}
                />
                {hasGradient ? (
                  <AreaChart
                    accessibilityLayer
                    data={filteredChartData}
                    width={Math.max(containerWidth, Math.max(600, filteredChartData.length * 150))}
                    height={270}
                    margin={{
                      left: -20,
                      right: 100,
                      bottom: CustomXAxisLabel ? 40 : 0,
                      top: 20,
                    }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="4 12" />
                    <XAxis
                      dataKey={XAxisDataKey}
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      padding={{ left: 80, right: 50 }}
                      tick={(props: any) =>
                        CustomXAxisLabel ? (
                          <CustomXAxisLabel
                            props={props}
                            rosetteType={rosetteType}
                            chartData={filteredChartData}
                            XAxisDataKey={XAxisDataKey}
                            customToolTipLabels={toolTipLabels}
                          />
                        ) : (
                          <foreignObject x={props.x - 50} y={props.y} width={100} height={120}>
                            <div className="flex flex-col items-center text-gray-600">
                              <span className="text-sm">{props.payload.value}</span>
                            </div>
                          </foreignObject>
                        )
                      }
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => (value < 10 ? `0${value}` : `${value}`)}
                      domain={[(dataMin: number) => Math.floor(dataMin), (dataMax: number) => Math.ceil(dataMax)]}
                      tickCount={10}
                      allowDecimals={false}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={({ label, payload, active }) =>
                        CustomContent ? (
                          <CustomContent
                            selectedMetrics={selectedMetrics}
                            showAll={showAll}
                            label={label}
                            payload={payload}
                            active={active}
                            data={chartData}
                          />
                        ) : (
                          <CustomTooltipContent
                            selectedMetrics={selectedMetrics}
                            showAll={showAll}
                            label={label}
                            payload={payload}
                            active={active}
                            tooltipLabel={tooltipLabel}
                          />
                        )
                      }
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0185E4" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#0185E4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    {Object.entries(chartConfig).map(([key]) => (
                      <Area
                        key={key}
                        dataKey={YAxisDataKey ? `${key}.${YAxisDataKey}` : key}
                        type="natural"
                        fill="url(#gradient)"
                        fillOpacity={0.4}
                        activeDot={{
                          r: 4,
                          className:
                            'stroke-[#FFF] stroke-[1px] drop-shadow-[0px_0px_4px_rgba(0,_0,_0,_0.34)] backdrop-blur-[8px] w-[16px] h-[16px] flex-shrink-0',
                        }}
                        style={{ transition: 'opacity 0.2s ease-in-out' }}
                      />
                    ))}
                  </AreaChart>
                ) : (
                  <LineChart
                    accessibilityLayer
                    data={filteredChartData}
                    width={Math.max(containerWidth, Math.max(600, filteredChartData.length * 150))}
                    height={270}
                    margin={{
                      left: -20,
                      right: 100,
                      bottom: CustomXAxisLabel ? 40 : 0,
                      top: 20,
                    }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="4 12" stroke="#E6E9EC" />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => (value < 10 ? `0${value}` : `${value}`)}
                      domain={[(dataMin: number) => Math.floor(dataMin), (dataMax: number) => Math.ceil(dataMax)]}
                      tickCount={10}
                      allowDecimals={false}
                    />
                    <XAxis
                      dataKey={XAxisDataKey}
                      tickLine={false}
                      axisLine={false}
                      padding={{ left: 80, right: 50 }}
                      tick={(props: any) =>
                        CustomXAxisLabel ? (
                          <CustomXAxisLabel
                            props={props}
                            rosetteType={rosetteType}
                            chartData={filteredChartData}
                            XAxisDataKey={XAxisDataKey}
                            customToolTipLabels={toolTipLabels}
                          />
                        ) : (
                          <foreignObject x={props.x - 50} y={props.y} width={100} height={120}>
                            <div className="flex flex-col items-center text-gray-600">
                              <span className="text-sm">{props.payload.value}</span>
                            </div>
                          </foreignObject>
                        )
                      }
                    />
                    <ChartTooltip
                      cursor={false}
                      content={({ label, payload, active }) =>
                        CustomContent ? (
                          <CustomContent
                            hideDeselectedMetricsFromTooltip={hideDeselectedMetricsFromTooltip}
                            selectedMetrics={selectedMetrics}
                            showAll={showAll}
                            label={label}
                            payload={payload}
                            active={active}
                            data={{
                              chartConfig,
                              maxYAxis,
                              YAxisDataKey,
                              chartData: filteredChartData,
                              XAxisDataKey,
                            }}
                          />
                        ) : (
                          <CustomTooltipContent
                            selectedMetrics={selectedMetrics}
                            showAll={showAll}
                            label={label}
                            payload={payload}
                            active={active}
                            tooltipLabel={tooltipLabel}
                          />
                        )
                      }
                    />
                    {showAll
                      ? Object.entries(chartConfig).map(([key, { color }]) => (
                        <Line
                          key={key}
                          dataKey={YAxisDataKey ? `${key}.${YAxisDataKey}` : key}
                          type="monotone"
                          stroke={color}
                          strokeWidth={2}
                          dot={false}
                          activeDot={{
                            r: 4,
                            className:
                              'stroke-[#FFF] stroke-[1px] drop-shadow-[0px_0px_4px_rgba(0,_0,_0,_0.34)] backdrop-blur-[8px] w-[16px] h-[16px] flex-shrink-0',
                          }}
                          style={{ transition: 'opacity 0.2s ease-in-out' }}
                        />
                      ))
                      : Object.entries(chartConfig).map(([key, { color }]) => (
                        <Line
                          key={key}
                          dataKey={YAxisDataKey ? `${key}.${YAxisDataKey}` : key}
                          type="monotone"
                          stroke={color}
                          strokeWidth={2}
                          dot={false}
                          activeDot={
                            selectedMetrics.includes(key)
                              ? {
                                r: 4,
                                className: 'drop-shadow-md',
                              }
                              : false
                          }
                          opacity={selectedMetrics.includes(key) ? 1 : 0.12}
                          style={{ transition: 'opacity 0.2s ease-in-out' }}
                        />
                      ))}
                  </LineChart>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
