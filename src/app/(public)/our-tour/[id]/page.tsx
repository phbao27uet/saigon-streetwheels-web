import { TourAPIQueryKey, getDetailTour } from '@/components/features/admin'
import { TourDetailPage } from '@/components/features/tour'

import { getQueryClient } from '@/libs/query/get-query-client'
const TourDetail = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [TourAPIQueryKey.GET_TOUR, params.id],
    queryFn: getDetailTour(params.id),
  })

  return <TourDetailPage id={params.id} />
}

export default TourDetail
