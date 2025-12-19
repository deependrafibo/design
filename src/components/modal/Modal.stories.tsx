import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../button/Button';
import { ModalProps } from './types';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    title: { control: 'text' },
    className: { control: 'text' },
    headerClassName: { control: 'text' },
    contentClassName: { control: 'text' },
  },
};
export default meta;

const ModalTemplate: React.FC<ModalProps> = (args) => {
  const [open, setOpen] = useState(args.isOpen ?? true);

  return (
    <>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">This is a Custom Modal</h2>
          <p>You can control all modal styles and behavior through Storybook controls. Add custom content here.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

const Template: StoryObj<typeof Modal> = {
  render: (args: ModalProps) => <ModalTemplate {...args} />,
};

export const Default = {
  ...Template,
  args: {
    isOpen: true,
    showCloseButton: true,
    title: 'Modal Title',
  },
};
