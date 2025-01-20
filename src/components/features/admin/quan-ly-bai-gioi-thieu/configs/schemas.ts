import { textBaseSchema, textSchema } from '@/libs/schemas'
import { z } from 'zod'

export const createNewsSchema = z.object({
  title: textSchema,
  featureImage: textSchema,
  content: textBaseSchema,
  description: textBaseSchema,
  isMain: z.boolean().optional(),
})

export type CreateNewsSchema = z.infer<typeof createNewsSchema>

export const defaultValuesQuanLyBaiGioiThieu: CreateNewsSchema = {
  title: '',
  content: '',
  description: '',
  featureImage: '',
  isMain: false,
}
