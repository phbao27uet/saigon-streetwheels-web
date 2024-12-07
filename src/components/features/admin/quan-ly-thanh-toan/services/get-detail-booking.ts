import { request } from '@/libs/requests'
import type { IBooking } from '@/libs/types'

export const getDetailBooking = (id: string) => async () => {
  const res = await request<IBooking>(`booking/${id}`)
  return res.data
}
