import { request } from '@/libs/requests'
import type { CreateBlogSchema } from '../configs'

export const createOrUpdateBlog = async (
  body: CreateBlogSchema,
  id: string,
) => {
  const endpointAPI = id === 'create' ? 'articles' : `articles/${id}`
  const method = id === 'create' ? 'post' : 'patch'
  const res = await request[method](endpointAPI, body)
  return res.data
}
