import {
  positiveDecimalNumberSchema,
  textSchema,
  timeSchema,
} from '@/libs/schemas'
import { z } from 'zod'

export const tourTimeSchema = z.object({
  startTime: timeSchema,
  endTime: timeSchema,
  availableTickets: z.number().min(1, 'Số lượng vé phải lớn hơn 0'),
})

export const tourDateSchema = z.object({
  date: z.date(),
  times: z.array(tourTimeSchema).min(1, 'Phải có ít nhất một khung giờ'),
})

export const ticketTypeSchema = z.object({
  name: textSchema,
  price: positiveDecimalNumberSchema,
})

export const createTourSchema = z.object({
  title: textSchema,
  featureImage: textSchema,
  description: textSchema,
  availableDates: z.array(tourDateSchema).min(1, 'Phải có ít nhất một ngày'),
  ticketTypes: z.array(ticketTypeSchema).min(1, 'Phải có ít nhất một loại vé'),
})

export type CreateTourSchema = z.infer<typeof createTourSchema>

export const defaultValuesTour: CreateTourSchema = {
  title: '',
  description: '',
  featureImage: '',
  availableDates: [
    {
      date: new Date(),
      times: [
        {
          startTime: '',
          endTime: '',
          availableTickets: 1,
        },
      ],
    },
  ],
  ticketTypes: [
    {
      name: '',
      price: 0,
    },
  ],
}

// {
//   "title": "TEST",
//   "featureImage": "TEST",
//   "description": "TEST",
//   "availableDates": [
//       {
//           "date": "2024-12-03T09:49:16.023Z",
//           "times": [
//               {
//                   "startTime": "09:30",
//                   "endTime": "10:00",
//                   "availableTickets": 10
//               },
//               {
//                   "startTime": "10:00",
//                   "endTime": "11:00",
//                   "availableTickets": 10
//               }
//           ]
//       },
//       {
//           "date": "2024-12-04T00:00:00.000Z",
//           "times": [
//               {
//                   "startTime": "09:30",
//                   "endTime": "10:00",
//                   "availableTickets": 20
//               },
//               {
//                   "startTime": "10:00",
//                   "endTime": "11:11",
//                   "availableTickets": 30
//               }
//           ]
//       }
//   ]
// }
