import { DataTable } from './data-table'
import { EmployeeColumns } from './columns'
import { useGetEmployeesQuery } from '@/services/queries'
import type { createEmployeeSchemaType } from '@/schema/employee-schema'

const ListAllEmployees = () => {
  const { data: employees } = useGetEmployeesQuery()

  const handleEdit = (employee: createEmployeeSchemaType) => {
    console.log(employee)
  }

  const handleDelete = (employee: createEmployeeSchemaType) => {
    console.log(employee)
  }

  const columns = EmployeeColumns(handleEdit, handleDelete)

  return <DataTable columns={columns} data={employees || []} />
}

export default ListAllEmployees
