import { request } from '@/libs/requests'
import type { CreateQASchema } from '../configs'

export const createOrUpdateQA = async (body: CreateQASchema, id: string) => {
  const endpointAPI = id === 'create' ? 'qa' : `qa/${id}`
  const method = id === 'create' ? 'post' : 'put'
  const res = await request[method](endpointAPI, body)
  return res.data
}
