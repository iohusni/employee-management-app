import type { pagination } from '@/types/employee-type'
import { create } from 'zustand'
export const usePagination = create<pagination>((set) => ({
  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
  updatePagination: (pagination) => set(() => ({ pagination })),
}))
