import { useEmployeeStore } from '@/store/employee-store'
import { getEmployees, getEmployeeById } from './api'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { employeesResponseType } from '@/types/employee-type'
import { usePagination } from '@/store/Pagination'

export const useGetEmployeesQuery = () => {
  const { pagination } = usePagination()
  return useQuery<employeesResponseType>({
    queryKey: ['employees', pagination],
    queryFn: () => getEmployees(pagination),
    enabled: !!pagination,
    placeholderData: keepPreviousData,
    refetchOnMount: false,
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
