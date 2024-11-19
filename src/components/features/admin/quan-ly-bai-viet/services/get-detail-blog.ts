import { request } from '@/libs/requests'
import type { IBlog } from '@/libs/types'

export const getDetailBlog = (id: string) => async () => {
  const res = await request<IBlog>(`blogs/${id}`)
  return res.data
}
