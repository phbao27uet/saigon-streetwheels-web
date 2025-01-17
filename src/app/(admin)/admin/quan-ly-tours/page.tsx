import {
  ListTourAdmin,
  TourAPIQueryKey,
  getListTours,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const QuanLyTourPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [TourAPIQueryKey.GET_TOURS],
    queryFn: () => getListTours({ page: 1, perPage: 20 }),
  })

  return (
    <div>
      <p className="text-2xl font-bold my-4">Quản lý tour</p>

      <ListTourAdmin />
    </div>
  )
}

export default QuanLyTourPage
