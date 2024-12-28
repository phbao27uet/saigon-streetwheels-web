import { numberSchema, textSchema, textSchemaInfinite } from '@/libs/schemas'
import { z } from 'zod'

export const createFeedbackSchema = z.object({
  image: textSchema,
  name: textSchema,
  content: textSchemaInfinite,
  star: numberSchema,
})

export type CreateFeedbackSchema = z.infer<typeof createFeedbackSchema>

export const feedbackDefaultValues: CreateFeedbackSchema = {
  image: '',
  name: '',
  content: '',
  star: 0,
}
