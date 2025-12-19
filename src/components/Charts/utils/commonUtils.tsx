import { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../../tooltip/Tooltip';
export const TruncatedTextWithTooltip = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [text]);

  const content = (
    <span ref={textRef} className="text-sm font-medium text-grey-700 truncate max-w-[200px] block">
      {text}
    </span>
  );

  return isTruncated ? (
    <Tooltip message={text} position="bottom" className="w-full">
      {content}
    </Tooltip>
  ) : (
    content
  );
};
