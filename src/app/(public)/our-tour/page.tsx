import { TourAPIQueryKey, getListTours } from '@/components/features/admin'
import { ListTourPage, TourLoading } from '@/components/features/tour'
import { getQueryClient } from '@/libs/query'
import { Suspense } from 'react'

const ListTour = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [TourAPIQueryKey.GET_TOURS],
    queryFn: getListTours,
  })

  return (
    <Suspense fallback={<TourLoading />}>
      <ListTourPage />
    </Suspense>
  )
}

export default ListTour
