import { useEmployeeStore } from '@/store/employee-store'
import { getEmployees, getEmployeeById } from './api'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { employeesResponseType } from '@/types/employee-type'
import { usePagination } from '@/store/Pagination'
import { useSorting } from '@/store/sorting-store'

export const useGetEmployeesQuery = () => {
  const { pagination } = usePagination()
  const { sorting } = useSorting()
  return useQuery<employeesResponseType>({
    queryKey: ['employees', pagination, sorting],
    queryFn: () => getEmployees(pagination, sorting.sortBy, sorting.sortOrder),
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
