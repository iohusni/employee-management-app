import { useEmployeeStore } from '@/store/employee-store'
import { getEmployees, getEmployeeById } from './api'
import { useQuery } from '@tanstack/react-query'

export const useGetEmployeesQuery = () => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
  })
}

export const useGetEmployeeByIdQuery = () => {
  const { employeeId } = useEmployeeStore()

  return useQuery({
    queryKey: ['employee', employeeId],
    queryFn: () => getEmployeeById(employeeId!),
    enabled: !!employeeId,
  })
}
