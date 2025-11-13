import { IconUserOff } from '@tabler/icons-react'
import { PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { useEmployeeStore } from '@/store/employee-store'

const EmptyEmployee = () => {
  const { setIsOpen } = useEmployeeStore()

  return (
    <>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconUserOff />
          </EmptyMedia>
          <EmptyTitle>No Employees Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any employees yet. Get started by creating
            your first employee.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button onClick={() => setIsOpen(true)}>
              <PlusIcon className="w-4 h-4" />
              Create Employee
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </>
  )
}

export default EmptyEmployee
