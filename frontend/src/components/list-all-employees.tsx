import { DataTable } from './data-table'
import { EmployeeColumns, type employeeType } from './columns'
import { useGetEmployeesQuery } from '@/services/queries'
import { useEmployeeStore } from '@/store/employee-store'
import { deleteEmployeeMutation } from '@/services/mutation'
import { useAlert } from '@/store/alert-dialog-store'
import { AlertDialogComponent } from './alert-dialog'

const ListAllEmployees = () => {
  const { data: employees } = useGetEmployeesQuery()
  const { setEmployeeId, setIsOpen } = useEmployeeStore()
  const deleteEmployee = deleteEmployeeMutation()

  const handleEdit = (employee: employeeType) => {
    setEmployeeId(employee.id)
    setIsOpen(true)
  }

  const handleDelete = (employee: employeeType) => {
    useAlert({
      title: 'Delete Employee',
      description: `Are you sure you want to delete ${employee.name}?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      onConfirm: () => deleteEmployee.mutate(employee.id),
      onCancel: () => {},
    })
  }

  const columns = EmployeeColumns(handleEdit, handleDelete)

  return (
    <>
      <DataTable columns={columns} data={(employees as employeeType[]) || []} />
      <AlertDialogComponent />
    </>
  )
}

export default ListAllEmployees
