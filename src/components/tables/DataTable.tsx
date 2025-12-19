'use client';

import * as React from 'react';
import {
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronDown } from 'lucide-react';
import classNames from 'classnames';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Spinner } from '@/components/ui/spinner';
import { useEffect, useState } from 'react';
import { DataTableProps } from './types';

const styles = {
  row: {
    even: 'bg-white border-b border-[#E6E7E7]', // White background for even rows
    odd: 'bg-[#FAFAFA] border-b border-[#E6E7E7]', // Grey-10 background for odd rows
    highlighted: 'bg-[#0185E41F]',
    border: '!outline outline-1 !outline-truBlue',
  },
};

export function DataTable<T>({
  data,
  columns,
  allowPagination = false,
  paginationType = 'PAGE_PAGINATION',
  allowColumnFilters = false,
  allowSelection = false,
  className = '',
  highlightByKey,
  highlightedValues,
  scrollHighlightedRowsIntoView = false,
  highlightText,
  pageSize = 10,
  totalItems = 0,
  currentPage = 1,
  onPageChange,
  scrollHeightClassName,
  nextPageLoading = false,
  noWrapper = false,
}: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    select: allowSelection ?? false,
  });
  const [rowSelection, setRowSelection] = useState({});
  const firstHighlightedRowRef = React.useRef<HTMLTableRowElement>(null);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const bottomSentinelRef = React.useRef<HTMLDivElement>(null);

  // This state is now controlled by the parent component
  const [pagination, setPagination] = useState({
    pageIndex: currentPage - 1, // Convert from 1-indexed to 0-indexed
    pageSize: pageSize,
  });

  // Update pagination state when props change
  useEffect(() => {
    setPagination({
      pageIndex: currentPage - 1,
      pageSize: pageSize,
    });
  }, [currentPage, pageSize]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // Use manual pagination for server-side pagination
    manualPagination: true,
    pageCount: Math.ceil(totalItems / pageSize),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: (updater) => {
      const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
      setPagination(newPagination);

      // Convert from 0-indexed to 1-indexed for API calls
      if (onPageChange && paginationType === 'PAGE_PAGINATION') {
        onPageChange(newPagination.pageIndex + 1);
      }
    },
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  // Intersection observer to request next page in scroll mode (parent appends data)
  useEffect(() => {
    if (paginationType !== 'SCROLL_PAGINATION') return;
    const container = tableContainerRef.current;
    const sentinel = bottomSentinelRef.current;
    if (!container || !sentinel) return;

    const hasMore = totalItems ? data.length < totalItems : true;
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isLoadingMore && onPageChange) {
            setIsLoadingMore(true);
            onPageChange(currentPage + 1);
          }
        }
      },
      { root: container, threshold: 1.0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [paginationType, onPageChange, currentPage, isLoadingMore, data.length, totalItems]);

  // Reset loading flag when parent updates page or data length changes
  useEffect(() => {
    if (paginationType !== 'SCROLL_PAGINATION') return;
    setIsLoadingMore(false);
  }, [paginationType, currentPage, data.length]);

  const isRowHighlighted = (row: Row<T>) => {
    return highlightedValues?.includes(row.original[highlightByKey as keyof typeof row.original] as string) ?? false;
  };

  // Get the zebra stripe class for a row
  const getRowZebraClass = (index: number) => {
    return index % 2 === 0 ? styles.row.even : styles.row.odd;
  };

  useEffect(() => {
    if (
      scrollHighlightedRowsIntoView &&
      highlightedValues?.length &&
      firstHighlightedRowRef.current &&
      tableContainerRef.current
    ) {
      const rowRect = firstHighlightedRowRef.current.getBoundingClientRect();
      const containerRect = tableContainerRef.current.getBoundingClientRect();

      const scrollTop =
        rowRect.top -
        containerRect.top -
        containerRect.height / 2 +
        rowRect.height / 2 +
        tableContainerRef.current.scrollTop;

      tableContainerRef.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  }, [scrollHighlightedRowsIntoView, highlightedValues]);

  return (
    <div className={`${className} w-full`}>
      {allowColumnFilters && (
        <div className="flex items-center py-4">
          <Input
            placeholder="Search..."
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      <div className="rounded-lg border border-[#EBE9F1] bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]">
        <div
          ref={tableContainerRef}
          className={classNames('relative overflow-y-auto chart-scrollbar pb-4', scrollHeightClassName)}
        >
          <Table noWrapper={noWrapper} className="rounded-lg" style={{ tableLayout: 'fixed', minWidth: 'max-content' }}>
            <colgroup>
              {table.getVisibleLeafColumns().map((col) => (
                <col key={col.id} style={{ width: col.columnDef.size ? `${col.columnDef.size}px` : undefined }} />
              ))}
            </colgroup>
            <TableHeader className="border-b border-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-b border-gray-200">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-[#5E5873] font-montserrat text-[12px] font-semibold leading-none tracking-[1px] uppercase px-[12px] whitespace-nowrap sticky top-0 z-40 bg-[#F3F2F7]"
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className={`${className}`}>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={classNames('h-full', {
                      [getRowZebraClass(index)]: !isRowHighlighted(row), // Apply zebra stripes only to non-highlighted rows
                      [styles.row.border]: isRowHighlighted(row),
                      [styles.row.highlighted]: isRowHighlighted(row),
                    })}
                    ref={isRowHighlighted(row) && !firstHighlightedRowRef.current ? firstHighlightedRowRef : null}
                  >
                    {row.getVisibleCells().map((cell, cellIndex) => (
                      <TableCell
                        key={cell.id}
                        className={classNames(
                          'text-[#6E6B7B] font-montserrat text-[14px] font-medium leading-[22px] p-[12px]',
                          {
                            // Apply highlighted styles only if row is highlighted
                            [styles.row.highlighted]: isRowHighlighted(row),
                            '!border-l': cellIndex === 0 && isRowHighlighted(row),
                            '!border-r': cellIndex === row.getVisibleCells().length - 1 && isRowHighlighted(row),
                          },
                        )}
                        style={{
                          wordWrap: 'break-word',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word',
                        }}
                      >
                        <div className="flex flex-col">
                          {isRowHighlighted(row) && highlightText && cellIndex === 1 && (
                            <div className="text-[#6E6B7B] font-montserrat text-[10px] h-full font-medium leading-[22px] bg-[#0185E4] text-white px-2 mb-1 rounded-full text-xs w-fit">
                              {highlightText}
                            </div>
                          )}
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
              {paginationType === 'SCROLL_PAGINATION' && nextPageLoading && (
                <TableRow>
                  <TableCell colSpan={table.getVisibleLeafColumns().length} className="py-4">
                    <div className="flex justify-center mx-auto w-full items-center">
                      <Spinner size="small" />
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {paginationType === 'SCROLL_PAGINATION' && <div ref={bottomSentinelRef} className="h-px" />}
        </div>
      </div>
      {allowPagination && paginationType === 'PAGE_PAGINATION' && (
        <div className="flex items-center justify-end space-x-2 py-4">
          {allowSelection && (
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of {totalItems} row(s) selected.
            </div>
          )}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of {Math.max(1, Math.ceil(totalItems / pageSize))}
            </span>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
