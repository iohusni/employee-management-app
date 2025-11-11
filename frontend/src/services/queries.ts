import { getEmployees } from './api'
import { useQuery } from '@tanstack/react-query'

export const useGetEmployeesQuery = () => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
  })
}
