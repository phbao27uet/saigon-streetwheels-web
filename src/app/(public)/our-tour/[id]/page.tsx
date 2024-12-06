import { TourAPIQueryKey, getDetailTour } from '@/components/features/admin'
import { TourDetailPage } from '@/components/features/tour'
import { PageWithPrefetchQuery } from '@/components/shared'

const TourDetail = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  return (
    <PageWithPrefetchQuery
      queryFn={getDetailTour(params.id)}
      queryKey={[TourAPIQueryKey.GET_TOUR, params.id]}
    >
      <TourDetailPage id={params.id} />
    </PageWithPrefetchQuery>
  )
}

export default TourDetail
