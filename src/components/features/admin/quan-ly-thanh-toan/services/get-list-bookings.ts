import { request } from '@/libs/requests'

export const getListBookings = async () => {
  const res = await request('bookings', {
    params: {
      page: 1,
      perPage: 20,
    },
  })

  return res.data
}
