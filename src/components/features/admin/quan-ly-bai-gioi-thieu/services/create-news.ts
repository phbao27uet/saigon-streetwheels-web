import { request } from '@/libs/requests'
import type { CreateNewsSchema } from '../configs'

export const createOrUpdateNews = async (
  body: CreateNewsSchema,
  id: string,
) => {
  const endpointAPI = id === 'create' ? 'news' : `news/${id}`
  const method = id === 'create' ? 'post' : 'put'
  const res = await request[method](endpointAPI, body)
  return res.data
}
