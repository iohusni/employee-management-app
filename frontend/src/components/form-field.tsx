import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'
import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
} from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  name: Path<T>
  label?: string
  containerClassName?: string
} & ComponentProps<'input'>

const FormField = <T extends FieldValues>({
  className,
  type,
  name,
  label,
  containerClassName,
  ...props
}: InputProps<T>) => {
  const { control } = useFormContext<T>()

  return (
    <div className={cn('w-full', containerClassName)}>
      {!!label && (
        <Label className="mb-2" htmlFor={name}>
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              type={type}
              id={name}
              data-slot="input"
              aria-invalid={!!error}
              className={className}
              {...field}
              value={field.value ?? ''}
              {...props}
            />
            {!!error && (
              <p className="text-destructive text-sm">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  )
}

export default FormField
