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
      <ListFeedbackAdmin />
    </div>
  )
}

export default QuanLyDanhGiaPage
