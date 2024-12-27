import { request } from '@/libs/requests'
import type { IAlbum } from '@/libs/types'

export const getDetailAlbum = (id: string) => async () => {
  const res = await request<IAlbum>(`album/${id}`)
  return res.data
}
