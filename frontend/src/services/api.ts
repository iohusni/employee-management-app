import type { createEmployeeSchemaType } from '@/schema/employee-schema'
import type {
  employeesResponseType,
  paginationInitial,
} from '@/types/employee-type'
import axios from 'axios'

const URL = 'http://localhost:8000'
const api = axios.create({
  baseURL: URL,
})

export const getEmployees = async (params: paginationInitial) => {
  const page = params.pageIndex + 1
  const pageSize = params.pageSize

  const response = await api.get<employeesResponseType>(
    `/employees/?page=${page}&page_size=${pageSize}`,
  )
  return response.data
}

export const getEmployeeById = async (id: number) => {
  const response = await api.get<createEmployeeSchemaType>(`/employees/${id}`)
  return {
    ...response.data,
    action: 'update',
  }
}

export const deleteEmployee = async (id: number) => {
  const response = await api.delete(`/employees/${id}`)
  return response.data
}

export const createEmployee = async (employee: employeesResponseType) => {
  const response = await api.post(`/employees`, employee)
  return response.data
}

export const updateEmployee = async (employee: createEmployeeSchemaType) => {
  if (employee.action === 'update') {
    const response = await api.put(`/employees/${employee.id}`, employee)
    return response.data
  }
}
