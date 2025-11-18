import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import EmptyEmployee from '@/components/empty-employee'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SearchIcon } from 'lucide-react'
import type { employeesResponseType } from '@/types/employee-type'
import { usePagination } from '@/store/Pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: employeesResponseType
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { updatePagination, pagination } = usePagination()

  // const table = useReactTable({
  //   data,
  //   columns,
  //   manualPagination: true,
  //   pageCount: employeeCount
  //     ? Math.ceil(employeeCount / pagination.pageSize)
  //     : -1,
  //   state: { pagination, rowSelection, columnFilters },
  //   onColumnFiltersChange: setColumnFilters,
  //   onRowSelectionChange: setRowSelection,
  //   onPaginationChange: (updaterOrValue) => {
  //     if (typeof updaterOrValue === 'function') {
  //       updatePagination(updaterOrValue(pagination))
  //     } else {
  //       updatePagination(updaterOrValue)
  //     }
  //   },
  //   getCoreRowModel: getCoreRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   getFilteredRowModel: getFilteredRowModel(),
  // })

  const table = useReactTable({
    data: (data?.employees as TData[]) || [],
    columns,
    manualPagination: true,
    pageCount: Math.ceil(data?.total / pagination.pageSize) || -1,
    state: { pagination },
    onPaginationChange: (updaterOrValue) => {
      if (typeof updaterOrValue === 'function') {
        updatePagination(updaterOrValue(pagination))
      } else {
        updatePagination(updaterOrValue)
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <>
      <div className="w-full">
        {/* <div className="flex items-center justify-between py-4">
          <div>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                const newPageSize = Number(value)
                table.setPageSize(newPageSize)
                updatePagination({
                  pageIndex: 0,
                  pageSize: newPageSize,
                })
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 25, 50, 100].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <InputGroup className="max-w-sm">
            <InputGroupInput
              placeholder="Search..."
              value={
                (table.getColumn('email')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('email')?.setFilterValue(event.target.value)
              }
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div> */}

        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    <EmptyEmployee />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end py-4 space-x-2">
          <Button
            className="cursor-pointer"
            variant="outline"
            size="sm"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Page {table.getState().pagination.pageIndex + 1} of
            {' ' + (table.getPageCount() === -1 ? '?' : table.getPageCount())}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="cursor-pointer"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  )
}
