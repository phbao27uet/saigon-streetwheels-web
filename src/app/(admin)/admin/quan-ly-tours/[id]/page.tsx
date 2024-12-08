import {
  TourAPIQueryKey,
  TourForm,
  getDetailTour,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [TourAPIQueryKey.GET_TOUR, params.id],
    queryFn: getDetailTour(params.id),
  })

  return <TourForm />
}

export default Page
