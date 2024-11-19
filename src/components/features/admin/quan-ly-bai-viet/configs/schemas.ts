import { textSchema, textSchemaInfinite } from '@/libs/schemas'
import { z } from 'zod'

export const createBlogSchema = z.object({
  title: textSchema,
  featureImage: textSchema,
  content: textSchemaInfinite,
  description: textSchema,
})

export type CreateBlogSchema = z.infer<typeof createBlogSchema>

export const defaultValues: CreateBlogSchema = {
  title: '',
  content: '',
  description: '',
  featureImage: '',
}
