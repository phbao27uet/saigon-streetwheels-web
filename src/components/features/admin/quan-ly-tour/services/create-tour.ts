import { request } from '@/libs/requests'
import type { CreateTourSchema } from '../configs'

export const createOrUpdateTour = async (
  body: CreateTourSchema,
  id: string,
) => {
  const endpointAPI = id === 'create' ? 'tours' : `tours/${id}`
  const method = id === 'create' ? 'post' : 'put'
  console.log('method', method)
  const res = await request[method](endpointAPI, body)
  return res.data
}
