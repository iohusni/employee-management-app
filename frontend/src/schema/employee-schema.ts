import { z } from 'zod'

export const createEmployeeSchema = z.intersection(
  z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.email({ message: 'Invalid email address' }),
    phone: z.string().min(1, { message: 'Phone is required' }),
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    state: z.string().optional().nullable(),
  }),
  z.discriminatedUnion('action', [
    z.object({ action: z.literal('create') }),
    z.object({
      action: z.literal('update'),
      id: z.number().min(1, { message: 'ID is required' }),
    }),
  ]),
)

export type createEmployeeSchemaType = z.infer<typeof createEmployeeSchema>

export const defaultEmployeeSchema: createEmployeeSchemaType = {
  action: 'create',
  name: '',
  email: '',
  phone: '',
  address: null,
  city: null,
  state: null,
}
