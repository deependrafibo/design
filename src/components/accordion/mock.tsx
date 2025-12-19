import { User } from '@/assets/icons';
import { Button } from '../button/Button';
import { Toggle } from '../toggle/Toggle';

export const sections = [
  {
    value: 'faq1',
    trigger: (
      <div className="flex items-center justify-between w-full gap-40">
        <div className=" flex items-center gap-2">
          <User backgroundColor="#0D6EFD" color="#0D6EFD" height={40} width={40} />
          <div className="flex flex-col items-start gap-1">
            <h1>Hello</h1>
            <p>something@trumio.ai</p>
          </div>
        </div>

        <div className=" flex items-center gap-2">
          <User backgroundColor="#0D6EFD" color="#0D6EFD" height={40} width={40} />
          <div className="flex flex-col items-start gap-1">
            <h1>Hello</h1>
            <p>something@trumio.ai</p>
          </div>
        </div>

        <Button onClick={() => {}} variant="errorText">
          Cancel
        </Button>
      </div>
    ),
    content: (
      <div className="flex flex-col items-start border border-secondary-500 gap-5 rounded-md p-4">
        <h1 className="text-lg font-semibold text-secondary-500">Department Admin</h1>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center gap-2">
            <Toggle label="Manage Cohorts" checked onClick={() => {}} />
            <h1>Manage Cohorts</h1>
          </div>
        </div>
      </div>
    ),
  },
  {
    value: 'faq2',
    trigger: (
      <div className="flex items-center justify-between w-full gap-40">
        <div className=" flex items-center gap-2">
          <User backgroundColor="#0D6EFD" color="#0D6EFD" height={40} width={40} />
          <div className="flex flex-col items-start gap-1">
            <h1>Hello</h1>
            <p>something@trumio.ai</p>
          </div>
        </div>

        <div className=" flex items-center gap-2">
          <User backgroundColor="#0D6EFD" color="#0D6EFD" height={40} width={40} />
          <div className="flex flex-col items-start gap-1">
            <h1>Hello</h1>
            <p>something@trumio.ai</p>
          </div>
        </div>

        <Button onClick={() => {}} variant="errorText">
          Cancel
        </Button>
      </div>
    ),
    content: (
      <div className="flex flex-col items-start border border-secondary-500 gap-5 rounded-md p-4">
        <h1 className="text-lg font-semibold text-secondary-500">Department Admin</h1>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center gap-2">
            <Toggle label="Manage Cohorts" checked onClick={() => {}} />
            <h1>Manage Cohorts</h1>
          </div>
        </div>
      </div>
    ),
  },
  {
    value: 'faq3',
    trigger: <span>Do you offer customer support?</span>,
    content: <p>Yes, 24/7 support is available via chat and email.</p>,
  },
];
