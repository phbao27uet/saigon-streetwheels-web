import {
  BlogAPIQueryKey,
  BlogForm,
  getDetailBlog,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOG, params.id],
    queryFn: getDetailBlog(params.id),
  })

  return <BlogForm />
}

export default Page
