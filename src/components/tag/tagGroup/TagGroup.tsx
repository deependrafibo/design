import { BadgeType, TagColors } from '@/components/tag/tagGroup/types';
import { useState, useRef, useEffect } from 'react';
import PrimaryTag from '@/components/tag/tagGroup/PrimaryTag';

type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';

export function TagGroup({
  tags,
  truncateAfter,
  tooltipDirection = 'bottom',
  tagColors,
}: Readonly<{
  tags: BadgeType[];
  truncateAfter?: number;
  tooltipDirection?: TooltipDirection;
  tagColors?: TagColors;
}>) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [actualTooltipDirection, setActualTooltipDirection] = useState<TooltipDirection>(tooltipDirection);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const remainingTags = truncateAfter && tags?.length > truncateAfter ? tags.slice(truncateAfter) : [];

  const calculateOptimalPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return tooltipDirection;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const spacing = 8;
    const tooltipWidth = 300;
    const tooltipHeight = 300;

    const spaceRight = viewport.width - triggerRect.right;
    const spaceLeft = triggerRect.left;
    const spaceTop = triggerRect.top;
    const spaceBottom = viewport.height - triggerRect.bottom;

    const preferences = [tooltipDirection];

    if (tooltipDirection === 'right' && spaceRight < tooltipWidth + spacing) {
      preferences.push('left', 'bottom', 'top');
    } else if (tooltipDirection === 'left' && spaceLeft < tooltipWidth + spacing) {
      preferences.push('right', 'bottom', 'top');
    } else if (tooltipDirection === 'top' && spaceTop < tooltipHeight + spacing) {
      preferences.push('bottom', 'right', 'left');
    } else if (tooltipDirection === 'bottom' && spaceBottom < tooltipHeight + spacing) {
      preferences.push('top', 'right', 'left');
    }

    for (const direction of preferences) {
      switch (direction) {
        case 'right':
          if (spaceRight >= tooltipWidth + spacing) return 'right';
          break;
        case 'left':
          if (spaceLeft >= tooltipWidth + spacing) return 'left';
          break;
        case 'top':
          if (spaceTop >= tooltipHeight + spacing) return 'top';
          break;
        case 'bottom':
          if (spaceBottom >= tooltipHeight + spacing) return 'bottom';
          break;
      }
    }

    const spaces = {
      right: spaceRight,
      left: spaceLeft,
      top: spaceTop,
      bottom: spaceBottom,
    };

    return Object.entries(spaces).reduce((a, b) =>
      spaces[a[0] as TooltipDirection] > spaces[b[0] as TooltipDirection] ? a : b,
    )[0] as TooltipDirection;
  };

  const handleScroll = (event: Event) => {
    if (tooltipRef.current && tooltipRef.current.contains(event.target as Node)) {
      return;
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    if (showTooltip && triggerRef.current && tooltipRef.current) {
      const timer = setTimeout(() => {
        const optimalDirection = calculateOptimalPosition();
        setActualTooltipDirection(optimalDirection);
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [showTooltip, tooltipDirection]);

  useEffect(() => {
    if (showTooltip) {
      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleScroll);
    };
  }, [showTooltip]);

  const getTooltipClasses = () => {
    const baseClasses =
      'absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px] max-w-[300px] max-h-[300px] overflow-y-auto overflow-x-hidden \
   [&::-webkit-scrollbar]:w-1.5 \
   [&::-webkit-scrollbar-track]:bg-transparent \
   [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full';

    switch (actualTooltipDirection) {
      case 'top':
        return `${baseClasses} bottom-full left-1/2 -translate-x-1/2`;
      case 'left':
        return `${baseClasses} right-full top-0`;
      case 'right':
        return `${baseClasses} left-full top-0`;
      case 'bottom':
      default:
        return `${baseClasses} top-full left-1/2 -translate-x-1/2`;
    }
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="flex items-center flex-row gap-[8px] flex-wrap relative">
      {!truncateAfter
        ? tags?.map((tag) => (
            <PrimaryTag
              key={tag?.id}
              content={tag?.name}
              className="flex h-[18px] px-[9px] py-[1px] items-center gap-[3px] rounded-xl"
              backgroundColor={tagColors?.background}
              textColor={tagColors?.text}
            />
          ))
        : tags
            ?.slice(0, truncateAfter)
            .map((tag) => (
              <PrimaryTag
                key={tag?.id}
                content={tag?.name}
                className="flex min-h-[18px] px-[9px] py-[1px] items-center gap-[3px] rounded-xl break-words"
                backgroundColor={tagColors?.background}
                textColor={tagColors?.text}
              />
            ))}

      {truncateAfter && tags?.length > truncateAfter && (
        <div ref={triggerRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <PrimaryTag
            key={tags?.[truncateAfter]?.id}
            content={`+${tags?.length - truncateAfter}`}
            className="flex min-h-[18px] px-[9px] py-[1px] items-center gap-[3px] rounded-xl cursor-pointer"
            backgroundColor={tagColors?.background}
            textColor={tagColors?.text}
          />

          {showTooltip && remainingTags.length > 0 && (
            <div
              ref={tooltipRef}
              className={getTooltipClasses()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-wrap gap-2">
                {remainingTags.map((tag) => (
                  <PrimaryTag
                    key={tag?.id}
                    content={tag?.name}
                    className="flex min-h-[18px] px-[9px] py-[1px] items-center gap-[3px] rounded-xl break-words text-sm"
                    backgroundColor={tagColors?.background}
                    textColor={tagColors?.text}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
TagGroup.displayName = 'TagGroup';
