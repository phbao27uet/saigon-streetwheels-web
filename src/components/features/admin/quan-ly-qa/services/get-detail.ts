import { request } from '@/libs/requests'
import type { IQA } from '@/libs/types'

export const getDetailQA = (id: string) => async () => {
  const res = await request<IQA>(`qa/${id}`)
  return res.data
}
