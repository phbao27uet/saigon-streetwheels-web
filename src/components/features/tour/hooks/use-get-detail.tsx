import { useSuspenseQuery } from '@tanstack/react-query'
import { TourAPIQueryKey, getDetailTour } from '../../admin'

export const useGetDetailTour = (id: string) => {
  return useSuspenseQuery({
    queryKey: [TourAPIQueryKey.GET_TOUR, id],
    queryFn: getDetailTour(id),
  })
}
