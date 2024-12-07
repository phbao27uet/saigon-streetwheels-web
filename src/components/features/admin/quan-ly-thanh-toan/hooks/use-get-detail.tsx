import { useQuery } from '@tanstack/react-query'
import { BookingAPIQueryKey } from '../configs'
import { getDetailBooking } from '../services'

export const useGetDetailBooking = (id: string) => {
  return useQuery({
    queryKey: [BookingAPIQueryKey.GET_BOOKING, id],
    queryFn: getDetailBooking(id),
    enabled: !!id && id !== 'create',
  })
}
