import { request } from '@/libs/requests'

export const getListFeedback = async () => {
  const res = await request('feedback', {
    params: {
      page: 1,
      perPage: 20,
    },
  })

  return res.data
}
