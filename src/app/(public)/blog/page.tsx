import { BlogAPIQueryKey, getListBlogs } from '@/components/features/admin'
import { ListBlogPage } from '@/components/features/blog/ListBlogPage'
import { PageWithPrefetchQuery } from '@/components/shared'

const ListBlog = async () => {
  return (
    <>
      <PageWithPrefetchQuery
        queryFn={getListBlogs}
        queryKey={[BlogAPIQueryKey.GET_BLOGS]}
      >
        <ListBlogPage />
      </PageWithPrefetchQuery>
    </>
  )
}
export default ListBlog
