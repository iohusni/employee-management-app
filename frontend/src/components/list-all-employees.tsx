import { DataTable } from './data-table'
import { EmployeeColumns } from './columns'
import type { employeeType } from '@/types/employee-types'
import { useGetEmployeesQuery } from '@/services/queries'

const ListAllEmployees = () => {
  const { data: employees } = useGetEmployeesQuery()

  const handleEdit = (employee: employeeType) => {
    console.log(employee)
  }

  const handleDelete = (employee: employeeType) => {
    console.log(employee)
  }

  const columns = EmployeeColumns(handleEdit, handleDelete)

  return <DataTable columns={columns} data={employees || []} />
}

export default ListAllEmployees
