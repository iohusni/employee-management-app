import type { employeeType } from '@/types/employee-types'
import axios from 'axios'

const URL = 'http://localhost:8000'
const api = axios.create({
  baseURL: URL,
})

export const getEmployees = async () => {
  const response = await api.get<employeeType[]>('/employees')
  return response.data
}

export const getEmployee = async (id: number) => {
  const response = await api.get<employeeType>(`/employees/${id}`)
  return response.data
}
