import { request } from '@/libs/requests'
import type { ITimeSlot, ITour } from '@/libs/types'

export const getDetailTour = (id: string) => async () => {
  const res = await request<ITour>(`tours/${id}`)
  return res.data
}

export const getTimeSlot = (id: string) => async () => {
  const res = await request<ITimeSlot>(`times/${id}`)
  return res.data
}
