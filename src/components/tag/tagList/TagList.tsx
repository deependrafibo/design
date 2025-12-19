import { TagListProps } from './types';

const colorMap: { [key: string]: { bg: string; text: string } } = {
  Collaboration: { bg: 'bg-[#E5FCFE]', text: 'text-[#0DA8B2]' },
  Leadership: { bg: 'bg-[#F2F1FE]', text: 'text-[#7367F0]' },
  Communication: { bg: 'bg-[#FFF4E8]', text: 'text-[#FF9F43]' },
  Innovation: { bg: 'bg-[#FFFAED]', text: 'text-[#F6C01C]' },
  Effectiveness: { bg: 'bg-[#E3F2FE]', text: 'text-[#2196F3]' },
  'Problem Solving': { bg: 'bg-[#E4F9ED]', text: 'text-[#28C76F]' },
};

export const TagList: React.FC<TagListProps> = ({ labels }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {labels.map((label, idx) => {
        const colors = colorMap[label] || {
          bg: 'bg-gray-100',
          text: 'text-gray-700',
        };

        return (
          <span
            key={idx}
            className={`px-[9px] py-[1px] rounded-full font-semibold text-xs ${colors.bg} ${colors.text}`}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
};
