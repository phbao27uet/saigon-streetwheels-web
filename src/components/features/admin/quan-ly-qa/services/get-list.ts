import { request } from '@/libs/requests'

export const getListQA = async (perPage = 20) => {
  const res = await request('qa', {
    params: {
      page: 1,
      perPage: perPage,
    },
  })

  return res.data
}
