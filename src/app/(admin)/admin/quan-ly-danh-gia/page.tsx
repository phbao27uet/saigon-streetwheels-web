import {
  FeedbackAPIQueryKey,
  ListFeedbackAdmin,
  getListFeedback,
} from '@/components/features/admin/quan-ly-danh-gia'
import { getQueryClient } from '@/libs/query'

const QuanLyDanhGiaPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [FeedbackAPIQueryKey.GET_FEEDBACKS],
    queryFn: getListFeedback,
  })

  return (
    <div>
      <p className="text-2xl font-bold my-4">Quản lý đánh giá</p>

      <ListFeedbackAdmin />
    </div>
  )
}

export default QuanLyDanhGiaPage
