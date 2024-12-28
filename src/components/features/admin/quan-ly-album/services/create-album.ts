import { request } from '@/libs/requests'
import type { CreateAlbumSchema } from '../configs'

export const createOrUpdateAlbum = async (
  body: CreateAlbumSchema,
  id: string,
) => {
  const endpointAPI = id === 'create' ? 'album' : `album/${id}`
  const method = id === 'create' ? 'post' : 'put'
  const res = await request[method](endpointAPI, body)
  return res.data
}
