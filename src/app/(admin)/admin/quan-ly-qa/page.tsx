import {
  ListQAAdmin,
  QAAPIQueryKey,
  getListQA,
} from '@/components/features/admin/quan-ly-qa'
import { getQueryClient } from '@/libs/query'

const QuanLyQA = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QAAPIQueryKey.GET_QA],
    queryFn: () => getListQA(),
  })

  return (
    <div>
      <p className="text-2xl font-bold my-4">Quản lý Q&A</p>
      <ListQAAdmin />
    </div>
  )
}

export default QuanLyQA
