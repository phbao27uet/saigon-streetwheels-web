import {
  BlogAPIQueryKey,
  ListBlogAdmin,
  getListBlogs,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const QuanLyBaiVietPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOGS],
    queryFn: getListBlogs,
  })

  return (
    <div>
      <p className="text-2xl font-bold my-4">Quản lý bài viết</p>

      <ListBlogAdmin />
    </div>
  )
}

export default QuanLyBaiVietPage
