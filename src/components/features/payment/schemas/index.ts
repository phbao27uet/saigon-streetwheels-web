import { z } from 'zod'

export const customerInformationSchema = z.object({
  bookerName: z.string().min(1, 'Full name is required'),
  bookerPhoneNumber: z.string().min(1, 'Phone Number is required'),
  bookerPhoneNumber2: z.string().optional(),
  bookerAddress: z.string().min(1, 'Address to pick up is required'),
  bookerEmail: z.string().email('Invalid email address'),
  bookerNote: z.string().optional(),
})

export type CustomerInformationSchema = z.infer<
  typeof customerInformationSchema
>
