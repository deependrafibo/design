import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import classNames from 'classnames';
import { CustomChevronLeft } from '@/assets/icons/CustomChevronLeft';
import { CustomChevronRight } from '@/assets/icons/CustomChevronRight';
import { DataTableErrorColumn, DataTableErrorRow, DataTableErrorTableProps } from './types';

export const DataTableErrorTable: React.FC<DataTableErrorTableProps> = ({
  columns,
  rows,
  currentPage: controlledCurrentPage,
  pageSize: controlledPageSize,
  totalItems,
  onPageChange,
}) => {
  const [internalPage, setInternalPage] = useState(1);
  const pageSize = controlledPageSize || 10;
  const currentPage = controlledCurrentPage || internalPage;
  const totalRows = totalItems ?? rows.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));

  const isRowNumberColumn = (columnKey: string): boolean => {
    return columnKey.toLowerCase() === 'row';
  };

  const getCellValue = (row: DataTableErrorRow, column: DataTableErrorColumn, rowIndex: number): string => {
    if (isRowNumberColumn(column.key)) {
      return String((currentPage - 1) * pageSize + rowIndex + 1);
    }
    const value = row[column.key as keyof DataTableErrorRow];
    return value ? String(value) : '';
  };

  const hasErrorInColumn = (row: DataTableErrorRow, columnKey: string): boolean => {
    if (!row.errors) return false;
    return row.errors.some((error) => error.field === columnKey);
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedRows = rows.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    } else {
      setInternalPage(page);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-lg bg-white shadow-sm">
        <div className="overflow-x-auto">
          <Table className="rounded-lg w-full">
            <TableHeader
              style={{ position: 'sticky', top: 0, zIndex: 2, background: '#F3F2F7' }}
              className="border-b border-gray-200"
            >
              <TableRow className="border-b border-gray-200">
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className="text-[#5E5873] font-montserrat text-[12px] font-semibold leading-none tracking-[1px] uppercase px-[12px] whitespace-nowrap"
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedRows.length ? (
                paginatedRows.map((row, idx) => (
                  <TableRow
                    key={startIdx + idx}
                    className={classNames('h-full border-b border-gray-200', {
                      'bg-[#FAFAFA]': (startIdx + idx) % 2 === 1,
                      'bg-white': (startIdx + idx) % 2 === 0,
                    })}
                  >
                    {columns.map((col) => {
                      const hasError = hasErrorInColumn(row, col.key);
                      const cellValue = getCellValue(row, col, idx);

                      return (
                        <TableCell
                          key={col.key}
                          className={classNames(
                            'text-gray-700 font-montserrat text-[14px] font-medium leading-[22px] p-[12px]',
                            {
                              'bg-error-50': hasError,
                            },
                          )}
                        >
                          {col.key === 'errors' && Array.isArray(row.errors) ? (
                            <div className="m-0 flex flex-col gap-1">
                              {row.errors.map((err, i) => (
                                <p key={i} className="text-sm text-gray-700">
                                  {err.reason}
                                </p>
                              ))}
                            </div>
                          ) : (
                            cellValue
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between space-x-2 p-4">
            <span className="text-sm text-gray-400 font-medium">
              Showing {rows.length === 0 ? 0 : startIdx + 1} to{' '}
              {rows.length === 0 ? 0 : startIdx + paginatedRows.length} of {rows.length} entries
            </span>
            <div className="space-x-2 flex items-center">
              <Button
                className="rounded-full border border-gray-100 bg-secondary-500 bg-opacity-10 text-secondary-500 hover:bg-opacity-20 focus:bg-opacity-20"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                <CustomChevronLeft color="#0185E4" />
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handlePageChange(i + 1)}
                  className={
                    currentPage === i + 1
                      ? 'bg-[#0185E4] text-white rounded-full hover:bg-opacity-20'
                      : 'rounded-full border border-gray-100 bg-secondary-500 bg-opacity-10 text-secondary-500'
                  }
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                className="rounded-full border border-gray-100 bg-secondary-500 bg-opacity-10 text-secondary-500 hover:bg-opacity-20 focus:bg-opacity-20"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                <CustomChevronRight color="#0185E4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
