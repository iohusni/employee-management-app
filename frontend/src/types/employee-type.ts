export type employees = {
  name: string
  email: string
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  id: number
}

export type employeesResponseType = {
  employees: employees[]
  total: number
  page: number
  page_size: number
  total_pages: number
}

export type paginationInitial = {
  pageIndex: number
  pageSize: number
}

type paginationState = {
  pagination: paginationInitial
}

type paginationAction = {
  updatePagination: (pagination: paginationState['pagination']) => void
}

export type pagination = paginationState & paginationAction
