import { textSchema } from '@/libs/schemas'
import { z } from 'zod'

export const createImageSchema = z.object({
  imageUrl: textSchema,
})

export type CreateImageSchema = z.infer<typeof createImageSchema>

export const defaultValuesQuanLyAnhHome: CreateImageSchema = {
  imageUrl: '',
}
