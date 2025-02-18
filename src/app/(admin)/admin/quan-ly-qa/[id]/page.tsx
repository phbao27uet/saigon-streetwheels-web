import {
  QAAPIQueryKey,
  QAForm,
  getDetailQA,
} from '@/components/features/admin/quan-ly-qa'
import { getQueryClient } from '@/libs/query'

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QAAPIQueryKey.GET_QA, params.id],
    queryFn: getDetailQA(params.id),
  })

  return <QAForm />
}

export default Page
