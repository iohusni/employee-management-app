import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useAlertDialogStore } from '@/store/alert-dialog-store'

export function AlertDialogComponent() {
  const { alertOpen, updateAlertOpen, alertConfig } = useAlertDialogStore()

  if (!alertOpen) return null

  return (
    <AlertDialog open={alertOpen} onOpenChange={updateAlertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertConfig?.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {alertConfig?.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {alertConfig?.onConfirm && (
            <AlertDialogAction onClick={alertConfig.onConfirm}>
              {alertConfig.confirmLabel}
            </AlertDialogAction>
          )}

          <AlertDialogCancel>{alertConfig?.cancelLabel}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
