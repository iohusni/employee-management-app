import { DataTable } from './data-table'
import { EmployeeColumns, type Employee } from './columns'

const employees = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
    city: 'Anytown',
    state: 'CA',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '0987654321',
    address: '456 Oak Ave, Anytown, USA',
    city: 'Anytown',
    state: 'CA',
  },
  {
    id: 3,
    name: 'Jim Doe',
    email: 'jim.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
    city: 'Anytown',
    state: 'CA',
  },
]

const handleEdit = (employee: Employee) => {
  console.log(employee)
}

const handleDelete = (employee: Employee) => {
  console.log(employee)
}

const columns = EmployeeColumns(handleEdit, handleDelete)

const ListAllEmployees = () => {
  return <DataTable columns={columns} data={employees} />
}

export default ListAllEmployees
