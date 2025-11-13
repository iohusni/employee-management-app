import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createEmployee, deleteEmployee, updateEmployee } from './api'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'
import type { createEmployeeSchemaType } from '@/schema/employee-schema'

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

export const createEmployeeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['createEmployee'],
    mutationFn: (employee: createEmployeeSchemaType) =>
      createEmployee(employee),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: (error: AxiosError<{ detail: string }>) => {
      toast.error(error.response?.data?.detail)
    },
  })
}

export const updateEmployeeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['updateEmployee'],
    mutationFn: (employee: createEmployeeSchemaType) =>
      updateEmployee(employee),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: (error: AxiosError<{ detail: string }>) => {
      toast.error(error.response?.data?.detail)
    },
  })
}
