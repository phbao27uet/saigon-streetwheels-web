import { request } from '@/libs/requests'

export const getListNews = async () => {
  const res = await request('news', {
    params: {
      page: 1,
      perPage: 20,
    },
  })

  return res.data
}
