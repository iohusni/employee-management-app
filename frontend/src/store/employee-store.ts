import { create } from 'zustand'

type employeeStoreType = {
  isOpen: boolean
  employeeId: number | null
}

type employeeStoreActionType = {
  setIsOpen: (isOpen: employeeStoreType['isOpen']) => void
  setEmployeeId: (employeeId: employeeStoreType['employeeId']) => void
}

type employeeStoreReturnType = employeeStoreType & employeeStoreActionType

export const useEmployeeStore = create<employeeStoreReturnType>((set) => ({
  isOpen: false,
  employeeId: null,

  setIsOpen: (isOpen) => set({ isOpen }),
  setEmployeeId: (employeeId) => set({ employeeId }),
}))
