import { request } from '@/libs/requests'
import type { DataPagination, INews, PaginationState } from '@/libs/types'

export const getListNews = async (params: PaginationState) => {
  const res = await request<DataPagination<INews[]>>('news', {
    params: {
      ...params,
    },
  })

  return res.data
}
