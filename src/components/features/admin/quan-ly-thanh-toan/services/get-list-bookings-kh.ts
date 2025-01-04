import { request } from '@/libs/requests'

export const getListBookingsKH = async () => {
  const res = await request('bookings/booker-email', {
    params: {
      page: 1,
      perPage: 20,
    },
  })

  return res.data
}
