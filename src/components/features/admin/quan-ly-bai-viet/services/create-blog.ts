import { request } from '@/libs/requests'
import type { CreateBlogSchema } from '../configs'

export const createOrUpdateBlog = async (
  body: CreateBlogSchema,
  id: string,
) => {
  const endpointAPI = id === 'create' ? 'blog' : `blog/${id}`
  const method = id === 'create' ? 'post' : 'put'
  const res = await request[method](endpointAPI, body)
  return res.data
}
