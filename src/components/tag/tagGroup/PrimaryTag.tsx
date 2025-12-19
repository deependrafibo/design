export default function PrimaryTag({
  content,
  className,
  onMouseEnter,
  onMouseLeave,
  backgroundColor,
  textColor,
}: Props) {
  const style: React.CSSProperties = {};

  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  if (textColor) {
    style.color = textColor;
  }

  return (
    <span
      className={`${!backgroundColor ? 'bg-blue-50' : ''} ${!textColor ? 'text-truBlue' : ''} font-semibold font-montserrat text-xs ${className ?? ''}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </span>
  );
}

type Props = {
  content: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  backgroundColor?: string;
  textColor?: string;
};
