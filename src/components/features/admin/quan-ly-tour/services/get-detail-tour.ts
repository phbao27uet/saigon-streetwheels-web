import { request } from '@/libs/requests'
import type { ITour } from '@/libs/types'

export const getDetailTour = (id: string) => async () => {
  const res = await request<ITour>(`tours/${id}`)
  return res.data
}
