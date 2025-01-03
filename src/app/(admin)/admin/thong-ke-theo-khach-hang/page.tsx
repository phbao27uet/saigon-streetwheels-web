import {
  BookingAPIQueryKey,
  ListKHAdmin,
  getListBookingsKH,
} from '@/components/features/admin/quan-ly-thanh-toan'
import { getQueryClient } from '@/libs/query'

const ThongKeTheoKhachHangPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BookingAPIQueryKey.GET_BOOKING_KH],
    queryFn: getListBookingsKH,
  })

  return (
    <div>
      <ListKHAdmin />
    </div>
  )
}

export default ThongKeTheoKhachHangPage
