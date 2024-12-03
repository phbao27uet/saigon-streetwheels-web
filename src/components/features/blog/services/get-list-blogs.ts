import { request } from '@/libs/requests'
import type { DataPagination, IBlog, PaginationState } from '@/libs/types'

export const getListBlogs = async (params: PaginationState) => {
  const res = await request<DataPagination<IBlog[]>>('blog', {
    params: {
      ...params,
    },
  })

  return res.data
}
