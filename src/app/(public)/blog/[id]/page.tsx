import { BlogAPIQueryKey, getDetailBlog } from '@/components/features/admin'
import { BlogDetailPage } from '@/components/features/blog'
import { PageWithPrefetchQuery } from '@/components/shared'

const BlogDetail = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  return (
    <PageWithPrefetchQuery
      queryFn={getDetailBlog(params.id)}
      queryKey={[BlogAPIQueryKey.GET_BLOG, params.id]}
    >
      <BlogDetailPage params={params} />
    </PageWithPrefetchQuery>
  )
}

export default BlogDetail
