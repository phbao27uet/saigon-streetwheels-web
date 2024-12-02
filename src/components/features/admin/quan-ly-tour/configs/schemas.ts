import { dateSchema, textSchema } from '@/libs/schemas'
import { z } from 'zod'

const tourTimeSchema = z.object({
  startTime: z.date(),
  endTime: z.date(),
  availableTickets: z.number().min(1, 'Số lượng vé phải lớn hơn 0'),
})

const tourDateSchema = z.object({
  date: dateSchema,
  times: z.array(tourTimeSchema).min(1, 'Phải có ít nhất một khung giờ'),
})

export const createTourSchema = z.object({
  title: textSchema,
  featureImage: textSchema,
  description: textSchema,
  availableDates: z.array(tourDateSchema).min(1, 'Phải có ít nhất một ngày'),

})

export type CreateTourSchema = z.infer<typeof createTourSchema>

export const defaultValuesTour: CreateTourSchema = {
  title: '',
  description: '',
  featureImage: '',
  availableDates: [
    {
      date: new Date().toISOString(),
      times: [{ startTime: new Date(), endTime: new Date(), availableTickets: 1 }],
    },
  ],
}
