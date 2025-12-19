import { Meta, StoryObj } from '@storybook/react';
import { DataTableErrorTable } from './DataTableErrorTable';
import { DataTableErrorColumn, DataTableErrorRow } from './types';

const columns: DataTableErrorColumn[] = [
  { key: 'row', label: 'Row' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'errors', label: 'Errors' },
];

const rows: DataTableErrorRow[] = [
  {
    first_name: 'John',
    last_name: 'Doe 1',
    email: 'johndoe1@.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'Invalid email address' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 2',
    email: 'johndoe2@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'Invalid email address' }],
  },
  {
    first_name: '-',
    last_name: '-',
    email: 'johndoe4@gmail.com',
    role: 'Project Advisor',
    errors: [
      { field: 'first_name', reason: 'Incomplete entries' },
      { field: 'last_name', reason: 'Incomplete entries' },
    ],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
  {
    first_name: 'John',
    last_name: 'Doe 8',
    email: 'johndoe@gmail.com',
    role: 'Department Admin',
    errors: [{ field: 'email', reason: 'User with same email address already exists' }],
  },
] as DataTableErrorRow[];

const noErrorRows: DataTableErrorRow[] = [
  { first_name: 'Alice', last_name: 'Brown', email: 'alice.brown@example.com', role: 'Manager' },
  { first_name: 'Bob', last_name: 'Green', email: 'bob.green@example.com', role: 'Staff' },
  { first_name: 'Charlie', last_name: 'White', email: 'charlie.white@example.com', role: 'Staff' },
] as DataTableErrorRow[];

const multiErrorRows: DataTableErrorRow[] = [
  {
    first_name: '',
    last_name: '',
    email: 'bademail',
    role: '',
    errors: [
      { field: 'first_name', reason: 'Required' },
      { field: 'last_name', reason: 'Required' },
      { field: 'email', reason: 'Invalid email' },
      { field: 'role', reason: 'Required' },
    ],
  },
  {
    first_name: 'Eve',
    last_name: '',
    email: 'eve@example.com',
    role: '',
    errors: [
      { field: 'last_name', reason: 'Required' },
      { field: 'role', reason: 'Required' },
    ],
  },
] as DataTableErrorRow[];

const singleRow: DataTableErrorRow[] = [
  {
    first_name: 'Only',
    last_name: 'One',
    email: 'only.one@example.com',
    role: 'Solo',
    errors: [{ field: 'role', reason: 'Role not allowed' }],
  },
] as DataTableErrorRow[];

const realWorldColumns: DataTableErrorColumn[] = [
  { key: 'row', label: 'Row' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'errors', label: 'Errors' },
];

const realWorldRows: DataTableErrorRow[] = [
  {
    first_name: '1234',
    last_name: '567',
    email: 'test2215@yopmail.com',
    errors: [
      { field: 'first_name', reason: 'first_name contains invalid characters.' },
      { field: 'last_name', reason: 'last_name contains invalid characters.' },
    ],
  },
  {
    first_name: '',
    last_name: '',
    email: 'abcdfefg',
    errors: [{ field: 'email', reason: 'Invalid email format.' }],
  },
  {
    first_name: 'Soumen',
    last_name: '56777',
    email: 'soh_brr_muk1@yopmail.com',
    errors: [
      { field: 'last_name', reason: 'last_name contains invalid characters.' },
      { field: 'last_name', reason: 'Incomplete entries' },
    ],
  },
  {
    first_name: 'Soumen',
    last_name: 'Goel',
    email: 'nan',
    errors: [{ field: 'email', reason: 'Invalid email format.' }],
  },
];

const meta: Meta<typeof DataTableErrorTable> = {
  title: 'Components/DataTableError',
  component: DataTableErrorTable,
  parameters: {
    docs: {
      description: {
        component:
          'A component to display error states in data tables with cell-level error highlighting and a summary of error reasons in the Errors column.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTableErrorTable>;

export const GenericErrorTable: Story = {
  args: {
    columns,
    rows,
  },
};

export const NoErrors: Story = {
  args: {
    columns,
    rows: noErrorRows,
  },
};

export const MultipleErrors: Story = {
  args: {
    columns,
    rows: multiErrorRows,
  },
};

export const SingleRow: Story = {
  args: {
    columns,
    rows: singleRow,
  },
};

export const PaginationDemo: Story = {
  args: {
    columns,
    rows,
    pageSize: 5,
  },
};

export const RealWorldErrors: Story = {
  args: {
    columns: realWorldColumns,
    rows: realWorldRows,
  },
};
