import { request } from '@/libs/requests'
import type { CreateFeedbackSchema } from '../configs'

export const createOrUpdateFeedback = async (
  body: CreateFeedbackSchema,
  id: string,
) => {
  const endpointAPI = id === 'create' ? 'feedback' : `feedback/${id}`
  const method = id === 'create' ? 'post' : 'put'
  const res = await request[method](endpointAPI, body)
  return res.data
}
