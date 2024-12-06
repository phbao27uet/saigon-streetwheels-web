import { request } from '@/libs/requests'
import type { DataPagination, IBlog } from '@/libs/types'
import { useSuspenseQuery } from '@tanstack/react-query'
import { BlogAPIQueryKey } from '../../admin'

export const useGetBlog = () => {
  const queryResult = useSuspenseQuery<DataPagination<IBlog[]>>({
    queryKey: [BlogAPIQueryKey.GET_BLOGS],
    queryFn: async () => {
      const res = await request('blog', {
        params: {
          page: 1,
          perPage: 20,
        },
      })

      return res.data
    },
  })

  return queryResult
}
