import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useEmployeeStore } from '@/store/employee-store'
import ListAllEmployees from '@/components/list-all-employees'
import CreateEmployees from '@/components/create-employee'

const App = () => {
  const { setIsOpen } = useEmployeeStore()

  return (
    <>
      <div className="container mx-auto max-w-7xl py-24 px-10 space-y-4 cursor-pointer">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">List All Employees</h1>
          <Button onClick={() => setIsOpen(true)}>
            <PlusIcon className="w-4 h-4" />
            Add Employee
          </Button>
        </div>
        <ListAllEmployees />
      </div>

      <CreateEmployees />
    </>
  )
}

export default App
