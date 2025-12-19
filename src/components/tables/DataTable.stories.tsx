import { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { DataTable } from './DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../../components/checkbox/Checkbox';

// Define a sample data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  joinDate: string;
  salary: string;
  location: string;
  projects: number;
}

// Sample data
const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Developer',
    department: 'Engineering',
    status: 'Active',
    joinDate: '2022-01-15',
    salary: '$120,000',
    location: 'San Francisco',
    projects: 5,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Product Manager',
    department: 'Product',
    status: 'Active',
    joinDate: '2021-08-22',
    salary: '$135,000',
    location: 'New York',
    projects: 3,
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    role: 'UX Designer',
    department: 'Design',
    status: 'Inactive',
    joinDate: '2023-03-10',
    salary: '$95,000',
    location: 'Remote',
    projects: 2,
  },
  {
    id: '4',
    name: 'Emily Wilson',
    email: 'emily.wilson@example.com',
    role: 'Data Analyst',
    department: 'Data Science',
    status: 'Active',
    joinDate: '2022-11-05',
    salary: '$110,000',
    location: 'Boston',
    projects: 4,
  },
  {
    id: '5',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    status: 'Active',
    joinDate: '2021-05-18',
    salary: '$125,000',
    location: 'Seattle',
    projects: 6,
  },
];

// Sample columns
const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(checked: boolean) => table.toggleAllPageRowsSelected(!!checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(checked: boolean) => row.toggleSelected(!!checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 40,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    size: 200,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 250,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    size: 200,
  },
  {
    accessorKey: 'department',
    header: 'Department',
    size: 150,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 100,
    cell: ({ row }) => (
      <div
        className={`px-2 py-1 rounded-full text-xs text-center w-16 ${
          row.getValue('status') === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
];

// Extended columns for the 8+ columns example
const extendedColumns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(checked: boolean) => table.toggleAllPageRowsSelected(!!checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(checked: boolean) => row.toggleSelected(!!checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 40,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    size: 150,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 200,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    size: 150,
  },
  {
    accessorKey: 'department',
    header: 'Department',
    size: 120,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 100,
    cell: ({ row }) => (
      <div
        className={`px-2 py-1 rounded-full text-xs text-center w-16 ${
          row.getValue('status') === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
  {
    accessorKey: 'joinDate',
    header: 'Join Date',
    size: 120,
    cell: ({ row }) => new Date(row.getValue('joinDate')).toLocaleDateString(),
  },
  {
    accessorKey: 'salary',
    header: 'Salary',
    size: 100,
  },
  {
    accessorKey: 'location',
    header: 'Location',
    size: 120,
  },
  {
    accessorKey: 'projects',
    header: 'Projects',
    size: 100,
    cell: ({ row }) => <div className="text-center">{row.getValue('projects')}</div>,
  },
];

const dataTableMeta: Meta<typeof DataTable> = {
  title: 'Components/Tables/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dynamic data table component with sorting, filtering, and pagination capabilities.',
      },
    },
  },
  tags: ['autodocs'],
};

export default dataTableMeta;
type DataTableStory = StoryObj<typeof DataTable<User>>;

export const Default: DataTableStory = {
  args: {
    data: users,
    columns: columns,
    allowPagination: true,
    allowColumnFilters: true,
    allowSelection: true,
    className: 'w-full max-w-4xl',
    scrollHeightClassName: 'max-h-[360px]',
  },
};

export const WithoutPagination: DataTableStory = {
  args: {
    data: users,
    columns: columns,
    allowPagination: false,
    allowColumnFilters: true,
    allowSelection: true,
    className: 'w-full max-w-4xl',
  },
};

export const WithoutFilters: DataTableStory = {
  args: {
    data: users,
    columns: columns,
    allowPagination: true,
    allowColumnFilters: false,
    allowSelection: true,
    className: 'w-full max-w-4xl',
  },
};

export const WithHighlightedRows: DataTableStory = {
  args: {
    data: users,
    columns: columns,
    allowPagination: true,
    allowColumnFilters: true,
    allowSelection: true,
    className: 'w-full max-w-4xl',
    highlightByKey: 'id',
    highlightedValues: ['2', '4'],
    highlightText: 'Highlighted',
  },
};

export const WithExtendedColumns: DataTableStory = {
  args: {
    data: users,
    columns: extendedColumns,
    allowPagination: true,
    allowColumnFilters: true,
    allowSelection: true,
    className: 'w-full max-w-6xl',
    scrollHeightClassName: 'max-h-[360px]',
  },
};

// Columns demonstrating explicit width wrappers in header & cell
const columnsWithCustomWidths: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(checked: boolean) => table.toggleAllPageRowsSelected(!!checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(checked: boolean) => row.toggleSelected(!!checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 40,
  },
  {
    accessorKey: 'name',
    size: 200,
    header: () => (
      <div className="w-[200px]">
        <span className="text-sm font-semibold text-[#394042]">NAME</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-[200px]">
        <span className="text-sm font-medium text-[#394042]">{row.getValue('name')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 250,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    size: 200,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 100,
    cell: ({ row }) => (
      <div className="w-[100px]">
        <div
          className={`px-2 py-1 rounded-full text-xs text-center w-16 ${
            row.getValue('status') === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {row.getValue('status')}
        </div>
      </div>
    ),
  },
];

export const WithCustomWidths: DataTableStory = {
  args: {
    data: users,
    columns: columnsWithCustomWidths,
    allowPagination: true,
    allowColumnFilters: true,
    allowSelection: true,
    className: 'w-full max-w-4xl',
    scrollHeightClassName: 'max-h-[360px]',
  },
};

// Helper to generate more demo users for infinite scrolling
function generateUsers(count: number, startId = 1000): User[] {
  const base = users;
  const result: User[] = [];
  for (let i = 0; i < count; i++) {
    const baseUser = base[i % base.length];
    result.push({
      ...baseUser,
      id: String(startId + i),
      name: `${baseUser.name} ${i + 1}`,
      email: `user${startId + i}@example.com`,
      projects: (baseUser.projects + (i % 7)) as number,
    });
  }
  return result;
}

export const WithInfiniteScroll: DataTableStory = {
  args: {
    paginationType: 'SCROLL_PAGINATION',
  },

  render: (args) => {
    const pageSize = 10;
    const allData = useMemo(() => generateUsers(75, 2000), []);
    const [page, setPage] = useState(1);
    const [dataAcc, setDataAcc] = useState<User[]>(allData.slice(0, pageSize));
    const [loading, setLoading] = useState(false);

    const handlePageChange = (nextPage: number) => {
      setLoading(true);
      setTimeout(() => {
        const start = (nextPage - 1) * pageSize;
        const end = start + pageSize;
        const slice = allData.slice(start, end);
        setPage(nextPage);
        setDataAcc((prev) => [...prev, ...slice]);
        setLoading(false);
      }, 400);
    };

    return (
      <DataTable
        {...args}
        data={dataAcc}
        columns={extendedColumns}
        paginationType="SCROLL_PAGINATION"
        pageSize={pageSize}
        totalItems={allData.length}
        currentPage={page}
        onPageChange={handlePageChange}
        scrollHeightClassName="max-h-[360px]"
        nextPageLoading={loading}
        allowPagination
        allowColumnFilters={false}
        allowSelection={false}
        className="w-full max-w-4xl"
      />
    );
  },
};
