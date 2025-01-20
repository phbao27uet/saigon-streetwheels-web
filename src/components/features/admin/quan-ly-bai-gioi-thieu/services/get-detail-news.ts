import { request } from '@/libs/requests'
import type { INews } from '@/libs/types'

export const getDetailNews = (id: string) => async () => {
  const res = await request<INews>(`news/${id}`)
  return res.data
}
