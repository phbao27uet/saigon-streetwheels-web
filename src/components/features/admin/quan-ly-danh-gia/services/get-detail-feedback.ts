import { request } from '@/libs/requests'
import type { IFeedback } from '@/libs/types'

export const getDetailFeedback = (id: string) => async () => {
  const res = await request<IFeedback>(`feedback/${id}`)
  return res.data
}
