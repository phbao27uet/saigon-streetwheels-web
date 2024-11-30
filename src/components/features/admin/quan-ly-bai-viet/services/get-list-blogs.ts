import { request } from '@/libs/requests'

export const getListBlogs = async () => {
  const res = await request('blog', {
    params: {
      page: 1,
      perPage: 20,
    },
  })

  return res.data
}
