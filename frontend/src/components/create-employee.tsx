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

const CreateEmployees = () => {
  const { isOpen, setIsOpen } = useEmployeeStore()

  const form = useForm<createEmployeeSchemaType>({
    resolver: zodResolver(createEmployeeSchema),
    defaultValues: defaultEmployeeSchema,
  })

  const onSubmit: SubmitHandler<createEmployeeSchemaType> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create Employee</DialogTitle>
            <DialogDescription>
              Create a new employee by filling out the form below.
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
                  <Button type="submit" className="w-full">
                    Create Employee
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
