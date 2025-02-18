import { textSchema, textSchemaInfinite } from '@/libs/schemas'
import { z } from 'zod'

export const createQASchema = z.object({
  title: textSchema,
  content: textSchemaInfinite,
})

export type CreateQASchema = z.infer<typeof createQASchema>

export const defaultValues: CreateQASchema = {
  title: '',
  content: '',
}
