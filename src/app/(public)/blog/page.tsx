import { BlogAPIQueryKey, getListBlogs } from '@/components/features/admin'
import { ListBlogPage } from '@/components/features/blog/ListBlogPage'
import { getQueryClient } from '@/libs/query'

const ListBlog = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOGS],
    queryFn: getListBlogs,
  })

  return <ListBlogPage />
}
export default ListBlog
