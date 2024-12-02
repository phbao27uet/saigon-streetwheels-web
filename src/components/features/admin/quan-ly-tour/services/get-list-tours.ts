import { request } from '@/libs/requests'

export const getListTours = async () => {
  const res = await request('tours', {
    params: {
      page: 1,
      perPage: 20,  
    },
  })

  return res.data
}
