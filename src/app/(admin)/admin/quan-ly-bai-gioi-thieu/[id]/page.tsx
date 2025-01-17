import {
  NewsAPIQueryKey,
  NewsForm,
  getDetailNews,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [NewsAPIQueryKey.GET_NEWS, params.id],
    queryFn: getDetailNews(params.id),
  })

  return <NewsForm />
}

export default Page
