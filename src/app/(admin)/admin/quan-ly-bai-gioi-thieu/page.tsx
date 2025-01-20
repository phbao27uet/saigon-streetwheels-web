import {
  ListNewsAdmin,
  NewsAPIQueryKey,
  getListNews,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const QuanLyBaiGioiThieuPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [NewsAPIQueryKey.GET_NEWS],
    queryFn: getListNews,
  })

  return (
    <div>
      <p className="text-2xl font-bold my-4">Quản lý bài viết giới thiệu</p>

      <ListNewsAdmin />
    </div>
  )
}

export default QuanLyBaiGioiThieuPage
