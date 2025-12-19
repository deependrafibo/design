/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef, useState } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import { Star } from 'react-feather';

import { CardContent } from '@/components/ui/card';
import { RadarChartProps } from './types';
import { truncateTextToFit, createSvgTextMeasurer } from '@/lib/utils';

export const customTooltip = ({ payload }: TooltipProps<any, any>, config: any[]) => {
  if (!payload || payload?.length === 0) return null;
  const data = payload[0]?.payload as any;
  const talentConfig = config?.find((c) => c?.name === 'talent');
  const cohortConfig = config?.find((c) => c?.name === 'cohort');

  return (
    <div className="rounded-[6px] px-3 py-2 flex flex-col gap-1 shadow-custom-shadow bg-white">
      <div className="font-semibold text-[10px] text-Grey-400">{data.skill.toUpperCase()}</div>
      <div className="text-xs flex items-center gap-[6px]">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: talentConfig?.color }}></div>
        <span className="text-Grey-700 text-xs">
          Talent's Score:{' '}
          <span className="font-semibold">
            {data.talentScore}/{data.totalScore}
          </span>
        </span>
      </div>
      <div className="text-xs flex items-center gap-[6px]">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cohortConfig?.color }}></div>
        <span className="text-Grey-700 text-xs">
          Cohort Average:{' '}
          <span className="font-semibold">
            {data.cohortAverage}/{data.totalScore}
          </span>
        </span>
      </div>
    </div>
  );
};

// Draws truncated label with star icon for PolarAngleAxis
const PolarTickLabel = ({ textProps, value, showStar, angle }: any) => {
  const textRef = useRef<SVGTextElement | null>(null);
  const measureRef = useRef<SVGTextElement | null>(null);
  const [bbox, setBbox] = useState<DOMRect | SVGRect | null>(null);
  // Handle null/undefined/empty values for backward compatibility
  const safeValue = value || '';
  const [truncatedText, setTruncatedText] = useState<string>(safeValue);
  const [isTruncated, setIsTruncated] = useState(false);

  // Calculate dynamic maxWidth based on angle
  // Top and bottom labels (90° and 270°) have more horizontal space, so allow more text
  // Left and right labels (0° and 180°) have less horizontal space
  const normalizedAngle = angle != null ? ((angle % 360) + 360) % 360 : 0;
  const isTop = Math.abs(normalizedAngle - 90) < 20; // Top labels (within 20° of 90°)
  const isBottom = Math.abs(normalizedAngle - 270) < 20; // Bottom labels (within 20° of 270°)
  const isLeft = Math.abs(normalizedAngle - 180) < 20; // Left labels (within 20° of 180°)
  const isRight = Math.abs(normalizedAngle - 0) < 20 || Math.abs(normalizedAngle - 360) < 20; // Right labels (near 0° or 360°)

  // Dynamic maxWidth based on position
  // Top/Bottom: More horizontal space available, allow much longer text (no truncation for most cases)
  // Left/Right: Less horizontal space, use standard width
  // Diagonal: Use medium width
  let maxWidth = 100; // Default width for diagonal positions
  if (isTop || isBottom) {
    maxWidth = 200; // Top and bottom labels get much more space - allows full text for words like "Collaboration"
  } else if (isLeft || isRight) {
    maxWidth = 80; // Left and right labels get less space
  }

  useLayoutEffect(() => {
    const measure = () => {
      if (measureRef?.current && textRef?.current && safeValue) {
        try {
          // Calculate available width (subtract space for star if needed)
          // Increased star space allocation to ensure star is always visible
          const starSpace = showStar ? 24 : 0; // 16px star + 6px spacing + 2px buffer
          const availableWidth = maxWidth - starSpace;

          // Create measurer for SVG element
          const measurer = createSvgTextMeasurer(measureRef.current);
          if (!measurer) {
            // Fallback: if measurer creation fails, use original value
            setIsTruncated(false);
            setTruncatedText(safeValue);
            try {
              const box = textRef.current.getBBox();
              setBbox(box);
            } catch {
              setBbox(null);
            }
            return;
          }

          // Use general utility function to truncate text
          const { truncatedText: finalText, isTruncated: truncated } = truncateTextToFit(
            safeValue,
            measurer,
            availableWidth,
          );

          setIsTruncated(truncated);
          setTruncatedText(finalText);

          // Set the actual text content and get bounding box
          textRef.current.textContent = finalText;
          const box = textRef.current.getBBox();
          setBbox(box);
        } catch {
          // Fallback: if measurement fails, use original value
          setIsTruncated(false);
          setTruncatedText(safeValue);
          if (textRef.current) {
            try {
              const box = textRef.current.getBBox();
              setBbox(box);
            } catch {
              setBbox(null);
            }
          }
        }
      } else {
        // Handle empty/null values
        setIsTruncated(false);
        setTruncatedText(safeValue);
        setBbox(null);
      }
    };
    measure();
    const raf = requestAnimationFrame(measure);
    if (typeof document !== 'undefined' && (document as any).fonts?.ready) {
      (document as any).fonts.ready.then(() => {
        measure();
      });
    }
    return () => cancelAnimationFrame(raf);
  }, [safeValue, showStar, textProps?.x, textProps?.y, textProps?.transform, maxWidth]);

  const fontSize = 12;
  const textDx = 2;
  const textDy = 2;

  // Extract known props (cx/cy are injected by Recharts for polar ticks)
  const { x, y, transform, cx, cy, ...rest } = textProps || {};

  // Resolve the actual tick coordinates (tx, ty) from x/y or transform
  let tx = typeof x === 'number' ? x : 0;
  let ty = typeof y === 'number' ? y : 0;
  if (!x && transform && typeof transform === 'string') {
    const m = /translate\(\s*([-\d.]+)[ ,]+([-\d.]+)\s*\)/.exec(transform);
    if (m) {
      tx = parseFloat(m[1]);
      ty = parseFloat(m[2]);
    }
  }

  // Compute outward radial offset (only if cx/cy are available)
  let groupTransform = transform ? transform : `translate(${tx},${ty})`;
  if (typeof cx === 'number' && typeof cy === 'number') {
    const dx = tx - cx;
    const dy = ty - cy;
    const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
    // padding to push label + star outside the grid; increased to give more space
    const padding = 20 + (showStar ? 12 : 0); // Increased padding for better spacing
    const ux = dx / dist;
    const uy = dy / dist;
    groupTransform = `translate(${tx + ux * padding},${ty + uy * padding})`;
  }

  // Calculate star position - ensure it's always visible
  // Use the actual rendered text width (not the full text width) to position star correctly
  const textWidth = bbox ? bbox.width : 0;
  const starWidth = 16; // Width of the star icon
  const starSpacing = 6; // Spacing between text and star
  // Position star after the truncated text with proper spacing
  // bbox.x is the start of the text, bbox.width is the width of the rendered (possibly truncated) text
  const starX = bbox ? bbox.x + textWidth + starSpacing : 0;

  return (
    <g transform={groupTransform} style={{ overflow: 'visible' }}>
      {/* Hidden text for measurement */}
      <text
        ref={measureRef}
        style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }}
        fontSize={fontSize}
        fill="#6A7071"
      >
        {safeValue}
      </text>
      {/* Visible text */}
      <text
        ref={textRef}
        {...rest}
        dy={textDy}
        dx={textDx}
        fontSize={fontSize}
        alignmentBaseline="text-before-edge"
        fill="#6A7071"
        style={{ overflow: 'visible' }}
      >
        {truncatedText}
      </text>
      {/* Star icon - always visible if showStar is true and bbox is available */}
      {/* Positioned after text with proper spacing, even when text is truncated */}
      {showStar && bbox && (
        <foreignObject x={starX} y={bbox.y} width={starWidth} height={16} style={{ overflow: 'visible' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Star size={12} color="#FF9F43" fill="#FF9F43" />
          </div>
        </foreignObject>
      )}
      {/* Tooltip for truncated text - using SVG title element */}
      {isTruncated && safeValue && <title>{safeValue}</title>}
    </g>
  );
};

export function RadarChart({ chartData, chartConfig, isVisible }: RadarChartProps) {
  if (isVisible === false) {
    return null;
  }

  return (
    <div>
      <CardContent className="pb-0">
        <div className="mx-auto aspect-square max-h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsRadarChart
              data={chartData}
              className="w-full h-full"
              margin={{ top: 30, right: 40, bottom: 40, left: 40 }} // Increased margins for better label and star visibility
            >
              <PolarGrid strokeWidth={1} />
              <PolarAngleAxis
                dataKey="skill"
                tick={(props: any) => {
                  const { payload, ...textProps } = props;
                  const value = payload?.value as string;
                  const angle = (payload as any)?.coordinate as number;
                  const normalizedAngle = (((angle ?? 0) % 360) + 360) % 360;
                  const isTop = Math.abs(normalizedAngle - 90) < 10;
                  const isBottom = Math.abs(normalizedAngle - 270) < 10;
                  const radialOffset = isTop || isBottom ? 4 : 0;
                  const offsetX = 0;
                  const offsetY = isTop ? -radialOffset : isBottom ? radialOffset : 0;
                  const dataItem = chartData?.find((item) => item.skill === value);
                  return (
                    <g transform={`translate(${offsetX},${offsetY})`}>
                      <PolarTickLabel
                        textProps={textProps}
                        value={value}
                        showStar={Boolean(dataItem?.topCompetencies)}
                        angle={normalizedAngle}
                      />
                    </g>
                  );
                }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 10]}
                tickCount={chartData?.length}
                tickLine={false}
                axisLine={false}
                tick={(props) => {
                  const { x, y, payload } = props;
                  return (
                    <g transform={`translate(${x},${y})`}>
                      <rect
                        x={-8}
                        y={-4}
                        width={16}
                        height={10}
                        rx={16}
                        ry={4}
                        fill={'#FFFFFF'}
                        stroke={'#E5E7EB'}
                        strokeWidth={1}
                      />
                      <text x={0} y={0} dy={4} textAnchor="middle" fontSize={8} fontWeight={400} fill={'#6B7280'}>
                        {payload.value.toString().padStart(2, '0')}
                      </text>
                    </g>
                  );
                }}
              />
              <Tooltip content={(props) => customTooltip(props, chartConfig || [])} />
              <Radar
                name="Talent"
                dataKey="talentScore"
                stroke={chartConfig?.[0]?.color}
                strokeWidth={2}
                fillOpacity={0}
              />
              <Radar
                name="Cohort"
                dataKey="cohortAverage"
                stroke={chartConfig?.[1]?.color}
                strokeDasharray="5 5"
                strokeWidth={2}
                fillOpacity={0}
              />
            </RechartsRadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </div>
  );
}
