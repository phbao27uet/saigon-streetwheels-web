import { BlogAPIQueryKey, getListBlogs } from '@/components/features/admin'
import { BlogDetailPage } from '@/components/features/blog'
import { getQueryClient } from '@/libs/query'

const BlogDetail = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOG, params.id],
    queryFn: getListBlogs,
  })

  return <BlogDetailPage params={params} />
}

export default BlogDetail
