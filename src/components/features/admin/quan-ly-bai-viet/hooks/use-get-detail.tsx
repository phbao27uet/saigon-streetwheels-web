import { useQuery } from '@tanstack/react-query'
import { BlogAPIQueryKey } from '../configs'
import { getDetailBlog } from '../services'

export const useGetDetailBlog = (id: string) => {
  return useQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOG, id],
    queryFn: getDetailBlog(id),
    enabled: !!id && id !== 'create',
  })
}
