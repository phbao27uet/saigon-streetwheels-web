import { request } from '@/libs/requests'
import type { CreateImageSchema } from '../configs'

export const createOrUpdateNews = async (
  body: CreateImageSchema,
  id: string,
) => {
  const res = await request.post('image', {
    ...body,
    type: 'HOME',
  })
  return res.data
}
