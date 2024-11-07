import { dateSchema } from '@/libs/schemas'
import { z } from 'zod'

export const tourSchema = z.object({
  date: dateSchema,
  adult: z.number().min(0),
  children: z.number().min(0),
  family: z.number().min(0),
  time: z.string(),
})

export type TourSchema = z.infer<typeof tourSchema>
