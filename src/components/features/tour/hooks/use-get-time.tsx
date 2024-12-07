import { useSuspenseQuery } from '@tanstack/react-query'
import { TourAPIQueryKey, getTimeSlot } from '../../admin'

export const useGetTimeSlot = (id: string) => {
  return useSuspenseQuery({
    queryKey: [TourAPIQueryKey.GET_TIME_SLOT, id],
    queryFn: getTimeSlot(id),
  })
}
