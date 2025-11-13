import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import {
  createEmployeeSchema,
  defaultEmployeeSchema,
  type createEmployeeSchemaType,
} from '@/schema/employee-schema'
import { useEmployeeStore } from '@/store/employee-store'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from './form-field'
import { useGetEmployeeByIdQuery } from '@/services/queries'
import { useEffect } from 'react'
import {
  createEmployeeMutation,
  updateEmployeeMutation,
} from '@/services/mutation'

const CreateEmployees = () => {
  const { isOpen, setIsOpen, employeeId, setEmployeeId } = useEmployeeStore()

  const employeeData = useGetEmployeeByIdQuery()
  const createEmployee = createEmployeeMutation()
  const updateEmployee = updateEmployeeMutation()

  const isPending = createEmployee.isPending || updateEmployee.isPending

  const form = useForm<createEmployeeSchemaType>({
    resolver: zodResolver(createEmployeeSchema),
    defaultValues: defaultEmployeeSchema,
  })

  useEffect(() => {
    if (!!employeeId && employeeData.data) {
      form.reset(employeeData?.data as createEmployeeSchemaType)
    }
  }, [employeeData.data, form, employeeId])

  const handleDialogOpenChange = (open: boolean) => {
    setIsOpen(open)

    if (!open) {
      setEmployeeId(null)
      form.reset(defaultEmployeeSchema)
    }
  }

  const handleSuccess = () => {
    handleDialogOpenChange(false)
  }

  const onSubmit: SubmitHandler<createEmployeeSchemaType> = (data) => {
    if (data.action === 'create') {
      createEmployee.mutate(data, {
        onSuccess: () => {
          handleSuccess()
        },
      })
    } else if (data.action === 'update') {
      updateEmployee.mutate(data, {
        onSuccess: () => {
          handleSuccess()
        },
      })
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {employeeId ? 'Edit Employee' : 'Create Employee'}
            </DialogTitle>
            <DialogDescription>
              {employeeId
                ? 'Edit an employee by filling out the form below.'
                : 'Create a new employee by filling out the form below.'}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormProvider {...form}>
              <div className=" space-y-4">
                <FormField name="name" label="Name" />
                <FormField name="email" label="Email" />
                <FormField name="phone" label="Phone" />
                <FormField name="address" label="Address" />
                <FormField name="city" label="City" />
                <FormField name="state" label="State" />

                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                    isLoading={isPending}
                  >
                    {employeeId ? 'Edit Employee' : 'Create Employee'}
                  </Button>
                </DialogFooter>
              </div>
            </FormProvider>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateEmployees
