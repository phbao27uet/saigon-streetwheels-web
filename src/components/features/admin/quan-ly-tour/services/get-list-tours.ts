import { request } from '@/libs/requests'

interface getListToursArgs {
  page?: number
  perPage?: number
}

export const getListTours = async ({
  page = 1,
  perPage = 20,
}: getListToursArgs) => {
  const res = await request('tours', {
    params: {
      page,
      perPage,
    },
  })

  return res.data
}
