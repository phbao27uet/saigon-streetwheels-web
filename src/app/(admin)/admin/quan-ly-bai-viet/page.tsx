import { BlogAPIQueryKey, getListBlogs, ListBlogAdmin } from "@/components/features/admin";
import { getQueryClient } from "@/libs/query";

const QuanLyBaiVietPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOGS],
    queryFn: getListBlogs
  });


  return (
    <div>
      <ListBlogAdmin />
    </div>
  )
}

export default QuanLyBaiVietPage
