import { request } from '@/libs/requests'

export const getListAlbum = async () => {
  const res = await request('album', {
    params: {
      page: 1,
      perPage: 20,
    },
  })

  return res.data
}
