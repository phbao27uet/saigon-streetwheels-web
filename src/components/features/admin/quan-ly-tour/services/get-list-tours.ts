import { request } from '@/libs/requests'

interface getListToursArgs {
  page?: number
  perPage?: number
  isOutstanding?: boolean
}

export const getListTours = async ({
  page = 1,
  perPage = 20,
  isOutstanding,
}: getListToursArgs) => {
  let params: {
    page: number
    perPage: number
    filters?: string
  } = {
    page,
    perPage,
  }

  if (isOutstanding !== undefined) {
    params = {
      ...params,
      filters: JSON.stringify([
        {
          field: 'isOutstanding',
          value: isOutstanding,
          operator: 'equals',
        },
      ]),
    }
  }

  const res = await request('tours', {
    params,
  })

  return res.data
}
