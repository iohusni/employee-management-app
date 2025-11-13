import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteEmployee } from './api'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'

export const deleteEmployeeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteEmployee'],
    mutationFn: (id: number) => deleteEmployee(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: (error: AxiosError<{ detail: string }>) => {
      toast.error(error.response?.data?.detail)
    },
  })
}
