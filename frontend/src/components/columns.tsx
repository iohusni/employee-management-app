import type { ColumnDef } from '@tanstack/react-table'
import { Button } from './ui/button'
import { PencilIcon, TrashIcon } from 'lucide-react'

export type Employee = {
  id: number
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
}

export const EmployeeColumns = (
  handleEdit: (employee: Employee) => void,
  handleDelete: (employee: Employee) => void,
): ColumnDef<Employee>[] => [
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
