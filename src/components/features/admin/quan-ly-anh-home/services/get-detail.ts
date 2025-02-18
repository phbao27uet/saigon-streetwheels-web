import { request } from '@/libs/requests'
import type { IImageHome } from '@/libs/types'

export const getDetailByType = (type: string) => async () => {
  const res = await request<IImageHome>(`image/type/${type}`)
  return res.data
}
