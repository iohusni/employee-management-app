import type { ColumnDef } from '@tanstack/react-table'
import { Button } from './ui/button'
import { PencilIcon, TrashIcon, ArrowUpDown } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { useSorting } from '@/store/sorting-store'

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
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'id'

        if (!isCurrentColumn) {
          // Different column or not sorted: sort ascending
          table.setSorting([{ id: 'id', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          // Currently descending: sort ascending
          table.setSorting([{ id: 'id', desc: false }])
        } else {
          // Currently ascending: clear sorting
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'name',
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'name'

        if (!isCurrentColumn) {
          table.setSorting([{ id: 'name', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          table.setSorting([{ id: 'name', desc: false }])
        } else {
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'email',
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'email'

        if (!isCurrentColumn) {
          table.setSorting([{ id: 'email', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          table.setSorting([{ id: 'email', desc: false }])
        } else {
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'phone',
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'phone'

        if (!isCurrentColumn) {
          table.setSorting([{ id: 'phone', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          table.setSorting([{ id: 'phone', desc: false }])
        } else {
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          Phone
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'address',
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'address'

        if (!isCurrentColumn) {
          table.setSorting([{ id: 'address', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          table.setSorting([{ id: 'address', desc: false }])
        } else {
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'city',
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'city'

        if (!isCurrentColumn) {
          table.setSorting([{ id: 'city', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          table.setSorting([{ id: 'city', desc: false }])
        } else {
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          City
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'state',
    header: ({ table }) => {
      const handleSort = () => {
        const { sorting } = useSorting.getState()
        const isCurrentColumn = sorting.sortBy === 'state'

        if (!isCurrentColumn) {
          table.setSorting([{ id: 'state', desc: false }])
        } else if (sorting.sortOrder === 'desc') {
          table.setSorting([{ id: 'state', desc: false }])
        } else {
          table.setSorting([])
        }
      }

      return (
        <Button variant="ghost" onClick={handleSort}>
          State
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
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
