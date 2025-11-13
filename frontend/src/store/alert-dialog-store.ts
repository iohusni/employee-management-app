import { create } from 'zustand'

type AlertConfig = {
  title?: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
}

type State = {
  alertOpen: boolean
  alertConfig: AlertConfig | null
}

type Actions = {
  updateAlertOpen: (is: State['alertOpen']) => void
  showAlert: (config: AlertConfig) => void
}

type Store = State & Actions

export const useAlertDialogStore = create<Store>((set) => ({
  alertOpen: false,
  alertConfig: null,

  updateAlertOpen: (is) =>
    set((state) => {
      if (!is) state.alertConfig = null
      return {
        alertOpen: is,
        alertConfig: !is ? null : state.alertConfig,
      }
    }),

  showAlert: (config) =>
    set((state) => {
      state.alertOpen = true
      state.alertConfig = config
      return {
        alertOpen: true,
        alertConfig: config,
      }
    }),
}))

export const useAlert = (config: AlertConfig) => {
  useAlertDialogStore.getState().showAlert(config)
}
