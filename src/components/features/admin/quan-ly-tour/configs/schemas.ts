import {
  positiveDecimalNumberSchema,
  textSchema,
  timeSchema,
} from '@/libs/schemas'
import { z } from 'zod'

export const tourTimeSchema = z.object({
  id: z.number().optional(),
  startTime: timeSchema,
  endTime: timeSchema,
})

export const ticketTypeSchema = z.object({
  id: z.number().optional(),
  name: textSchema,
  price: positiveDecimalNumberSchema,
})

export const createTourSchema = z.object({
  title: textSchema,
  featureImage: textSchema,
  images: z.array(textSchema),
  description: textSchema,
  departureLocation: textSchema,
  times: z.array(tourTimeSchema).min(1, 'Phải có ít nhất một khung giờ'),
  ticketTypes: z.array(ticketTypeSchema).min(1, 'Phải có ít nhất một loại vé'),
})

export type CreateTourSchema = z.infer<typeof createTourSchema>

// 8-12, 13-17h,17:30-21:30,

export const defaultValuesTour: CreateTourSchema = {
  title: '',
  description: '',
  featureImage: '',
  departureLocation: '',
  images: [],
  times: [
    {
      startTime: '08:00',
      endTime: '09:00',
    },
    {
      startTime: '09:00',
      endTime: '10:00',
    },
    {
      startTime: '10:00',
      endTime: '11:00',
    },
    {
      startTime: '11:00',
      endTime: '12:00',
    },
    {
      startTime: '13:00',
      endTime: '14:00',
    },
    {
      startTime: '14:00',
      endTime: '15:00',
    },
    {
      startTime: '15:00',
      endTime: '16:00',
    },
    {
      startTime: '16:00',
      endTime: '17:00',
    },
    {
      startTime: '17:30',
      endTime: '18:30',
    },
    {
      startTime: '18:30',
      endTime: '19:30',
    },
    {
      startTime: '19:30',
      endTime: '20:30',
    },
    {
      startTime: '20:30',
      endTime: '21:30',
    },
  ],
  ticketTypes: [
    {
      name: '',
      price: 0,
    },
  ],
}
