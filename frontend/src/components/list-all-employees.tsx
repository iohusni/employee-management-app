import { DataTable } from './data-table'
import { EmployeeColumns, type employeeType } from './columns'
import { useGetEmployeesQuery } from '@/services/queries'
import { useEmployeeStore } from '@/store/employee-store'

const ListAllEmployees = () => {
  const { data: employees } = useGetEmployeesQuery()
  const { setEmployeeId, setIsOpen } = useEmployeeStore()

  const handleEdit = (employee: employeeType) => {
    setEmployeeId(employee.id)
    setIsOpen(true)
  }

  const handleDelete = (employee: employeeType) => {
    console.log(employee)
  }

  const columns = EmployeeColumns(handleEdit, handleDelete)

  return (
    <DataTable columns={columns} data={(employees as employeeType[]) || []} />
  )
}

export default ListAllEmployees
