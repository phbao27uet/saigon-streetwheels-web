import { textSchema } from '@/libs/schemas'
import { z } from 'zod'

export const createAlbumSchema = z.object({
  image: textSchema,
})

export type CreateAlbumSchema = z.infer<typeof createAlbumSchema>

export const albumDefaultValues: CreateAlbumSchema = {
  image: '',
}
