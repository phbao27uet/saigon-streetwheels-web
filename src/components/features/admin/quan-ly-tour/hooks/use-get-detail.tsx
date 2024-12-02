import { useQuery } from '@tanstack/react-query'
import { TourAPIQueryKey } from '../configs'
import { getDetailTour } from '../services'

export const useGetDetailTour = (id: string) => {
  return useQuery({
    queryKey: [TourAPIQueryKey.GET_TOUR, id],
    queryFn: getDetailTour(id),
    enabled: !!id && id !== 'create',
  })
}
