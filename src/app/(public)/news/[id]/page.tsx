import { NewsAPIQueryKey, getListNews } from '@/components/features/admin'
import { NewsDetailPage } from '@/components/features/news'
import { getQueryClient } from '@/libs/query'

const NewsDetail = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [NewsAPIQueryKey.GET_NEWS, params.id],
    queryFn: getListNews,
  })

  return <NewsDetailPage params={params} />
}

export default NewsDetail
