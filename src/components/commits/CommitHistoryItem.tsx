/* eslint-disable @typescript-eslint/no-explicit-any */
import VerticalTimeline from './VerticalTimeline';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar } from '@/components/avatar/Avatar';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ChevronRightIcon } from 'lucide-react';

export default function CommitHistoryItem({
  commits,
  index,
  sasToken,
}: {
  commits: any;
  index?: number;
  sasToken?: string;
}) {
  const uniqueValue = `${commits.date}-${index || 0}`;

  const date = new Date(commits.commits[0]?.timestamp);
  const time = date.toTimeString().split(' ')[0];

  const getCommitDetailsComponent = (commit: any, sasToken?: string) => {
    return (
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="flex items-center gap-2">
            <Avatar
              src={`${commit.image_uri}?${sasToken ? `?${sasToken}` : ''}`}
              alt={`${commit.first_name} ${commit.last_name}`}
              size={40}
            />
            <div className="flex flex-col">
              <div className="text-sm font-medium">
                {commit.first_name} {commit.last_name}
              </div>
              <div className="text-xs text-gray-500">{commit.talent_role}</div>
            </div>
          </div>
          <div className="text-sm text-grayish-600 line-clamp-2">{commit.message}</div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex items-center gap-2">
            <a href={commit.url} target="_blank">
              <div className="text-[#0185E4] font-montserrat text-sm font-semibold leading-[18px]">{commit.sha}</div>
            </a>
            <ChevronRightIcon className="text-[#0185E4]" size={16} />
          </div>
          <div className="text-xs text-gray-500">Commit ID</div>
        </div>
      </div>
    );
  };

  const timelineItems = [
    ...(commits.commits || []).map((commit: any) => ({
      component: getCommitDetailsComponent(commit, sasToken),
      color: '#FF9F43',
    })),
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={uniqueValue} className="w-full py-2 border-0">
        <AccordionTrigger className="p-0 hover:no-underline w-fit [&>svg]:hidden group">
          <div className="flex items-center gap-2 w-fit">
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-grey-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
            <span>
              {commits.commits?.length} commit{commits.commits?.length > 1 ? 's' : ''} at {commits.date} | {time}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <div className="ml-3 mt-3">
            <VerticalTimeline timelineItems={timelineItems} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
