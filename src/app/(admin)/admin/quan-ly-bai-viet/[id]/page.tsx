import {
  BlogAPIQueryKey,
  BlogForm,
  getDetailBlog,
} from '@/components/features/admin'
import { PageWithPrefetchQuery } from '@/components/shared/layouts'

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <PageWithPrefetchQuery
      queryFn={getDetailBlog(params.id)}
      queryKey={[BlogAPIQueryKey.GET_BLOG, params.id]}
    >
      <BlogForm />
    </PageWithPrefetchQuery>
  )
}

export default Page
