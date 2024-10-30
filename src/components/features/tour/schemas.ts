import { dateSchema } from '@/libs/schemas'
import { z } from 'zod'

export const tourSchema = z.object({
  date: dateSchema,
})

export type TourSchema = z.infer<typeof tourSchema>
