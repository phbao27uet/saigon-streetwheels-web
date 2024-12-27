import {
  FeedbackAPIQueryKey,
  FeedbackForm,
  getDetailFeedback,
} from '@/components/features/admin/quan-ly-danh-gia'
import { getQueryClient } from '@/libs/query'

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [FeedbackAPIQueryKey.GET_FEEDBACK, params.id],
    queryFn: getDetailFeedback(params.id),
  })

  return <FeedbackForm />
}

export default Page
