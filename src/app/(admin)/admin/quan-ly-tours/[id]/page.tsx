import {
  TourAPIQueryKey,
  TourForm,
  getDetailTour,
} from '@/components/features/admin'
import { PageWithPrefetchQuery } from '@/components/shared/layouts'

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <PageWithPrefetchQuery
      queryFn={getDetailTour(params.id)}
      queryKey={[TourAPIQueryKey.GET_TOUR, params.id]}
    >
      <TourForm />
    </PageWithPrefetchQuery>
  )
}

export default Page
