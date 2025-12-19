import { GitHubPullRequest } from './types';
import { CommitStatusTag } from '../tag/commitStatusTag/CommitStatusTag';
import { CommitStatusTagProps } from '../tag/commitStatusTag/types';
import { Grade } from '../grades/Grade';
import CommitHistoryItem from './CommitHistoryItem';
import { GradeProps } from '../grades/types';
import { Button } from '../button/Button';
import { useState } from 'react';

export default function PullRequestCard({ data, sasToken }: { data: GitHubPullRequest; sasToken?: string }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleButtonClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const Overview = () => {
    return (
      <div className="flex items-center justify-between gap-5 w-11/12">
        <div className="flex flex-col items-start gap-2 w-1/4">
          <CommitStatusTag status={data?.pr_status as CommitStatusTagProps['status']} className="mb-2" />
          <div className="flex flex-col items-start">
            <div className="text-gray-600 font-medium text-sm leading-5 text-left">{data?.pr_title}</div>
            <div className="text-gray-500 font-normal text-xs leading-4">
              Created on: {data?.pr_created_at ? formatDate(data.pr_created_at) : ''}
            </div>
          </div>
        </div>
        <div className="flex  items-start justify-between gap-4 w-[75%]">
          <div className="bg-[#EBE9F1] w-[1px] h-16"></div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">{data?.commits_count}</div>
            <div className="text-grey font-normal text-sm leading-5">Commits</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">{data?.bugs}</div>
            <div className="text-grey font-normal text-sm leading-5">Bugs</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">{data?.code_smells}</div>
            <div className="text-grey font-normal text-sm leading-5">Code Smells</div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">{data?.vulnerabilities}</div>
            <div className="text-grey font-normal text-sm leading-5">Vulnerabilities</div>
          </div>
          <div className="bg-[#EBE9F1] w-[1px] h-16"></div>

          <div className="min-w-[100px] flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">
              <Grade value={data?.security_rating_grade as GradeProps['value']} size={20} textSize={12} />
            </div>
            <div className="text-grey font-normal text-sm leading-5">Security</div>
          </div>
          <div className="min-w-[100px] flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">
              <Grade value={data?.reliability_rating_grade as GradeProps['value']} size={20} textSize={12} />
            </div>
            <div className="text-grey font-normal text-sm leading-5">Reliability</div>
          </div>
          <div className="min-w-[100px] flex flex-col items-start gap-1">
            <div className="text-gray-700 font-semibold text-base leading-5">
              <Grade value={data?.maintainability_rating_grade as GradeProps['value']} size={20} textSize={12} />
            </div>
            <div className="text-grey font-normal text-sm leading-5">Maintainability</div>
          </div>
        </div>
      </div>
    );
  };

  // Show first commit fully and second commit partially (1.5 commits)
  const PreviewCommits = () => {
    const previewCommits = data?.commits?.slice(0, 2) || [];

    return (
      <div className="flex flex-col my-3 p-0">
        {previewCommits.map((commit, index) => (
          <div key={commit.date} className={index === 1 ? 'relative overflow-hidden' : ''}>
            <CommitHistoryItem commits={commit} sasToken={sasToken} />
            {/* Add fade overlay for the second commit to show it's partially cut off */}
            {index === 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
        ))}
      </div>
    );
  };

  const Commits = () => {
    return (
      <div className="flex flex-col my-3 p-0 px-4">
        {data?.commits.map((commit) => <CommitHistoryItem commits={commit} key={commit.date} sasToken={sasToken} />)}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2 bg-white shadow-[0px_4px_24px_0px_rgba(0,_0,_0,_0.06)] pb-4 rounded-[8px]">
        <div className="p-4">
          <Overview />
        </div>

        {/* Show preview commits (1.5 commits) when accordion is closed */}
        {data?.commits && data.commits.length > 0 && !isAccordionOpen && (
          <div className="px-4">
            <PreviewCommits />
          </div>
        )}

        {/* Show all commits when accordion is open */}
        {data?.commits && data.commits.length > 0 && isAccordionOpen && <Commits />}

        {data?.commits && data.commits.length > 0 && (
          <div className="flex justify-start text-sm font-semibold">
            <Button variant="text" onClick={handleButtonClick} className="ml-4">
              {isAccordionOpen ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
