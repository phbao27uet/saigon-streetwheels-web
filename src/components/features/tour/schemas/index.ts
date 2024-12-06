import { z } from 'zod'

export const ticketSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
})

export const tourSchema = z.object({
  date: z.date(),
  timeId: z.number(),
  ticketTypes: z.array(ticketSchema),
})

export type TourSchema = z.infer<typeof tourSchema>

export type TicketFormData = z.infer<typeof ticketSchema>
