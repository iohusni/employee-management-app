import ListAllEmployees from './components/list-all-employees'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

const App = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-24 px-10 space-y-4 cursor-pointer">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">List All Employees</h1>
          <Button>
            <PlusIcon className="w-4 h-4" />
            Add Employee
          </Button>
        </div>
        <ListAllEmployees />
      </div>
    </>
  )
}

export default App
