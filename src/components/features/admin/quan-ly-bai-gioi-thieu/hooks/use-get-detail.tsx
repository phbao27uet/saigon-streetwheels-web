import { useQuery } from '@tanstack/react-query'
import { NewsAPIQueryKey } from '../configs'
import { getDetailNews } from '../services'

export const useGetDetailNews = (id: string) => {
  return useQuery({
    queryKey: [NewsAPIQueryKey.GET_NEWS, id],
    queryFn: getDetailNews(id),
    enabled: !!id && id !== 'create',
  })
}
