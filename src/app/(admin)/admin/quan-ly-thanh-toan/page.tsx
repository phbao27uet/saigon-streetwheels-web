import {
  BookingAPIQueryKey,
  ListBookingAdmin,
  getListBookings,
} from '@/components/features/admin/quan-ly-thanh-toan'
import { getQueryClient } from '@/libs/query'

const QuanLyThanhToanPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BookingAPIQueryKey.GET_BOOKINGS],
    queryFn: getListBookings,
  })

  return (
    <div>
      <p className="text-2xl font-bold my-4">Quản lý thanh toán</p>

      <ListBookingAdmin />
    </div>
  )
}

export default QuanLyThanhToanPage
