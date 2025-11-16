import type { ColumnDef } from '@tanstack/react-table'
import { Button } from './ui/button'
import { PencilIcon, TrashIcon } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

export type employeeType = {
  name: string
  email: string
  phone: string
  address: string | null
  city: string | null
  state: string | null
  id: number
}

export const EmployeeColumns = (
  handleEdit: (employee: employeeType) => void,
  handleDelete: (employee: employeeType) => void,
): ColumnDef<employeeType>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const employee = row.original
      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleEdit(employee)}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => handleDelete(employee)}
          >
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      )
    },
  },
]
