import { TourAPIQueryKey, getListTours, ListTourAdmin } from "@/components/features/admin";
import { getQueryClient } from "@/libs/query";

const QuanLyTourPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [TourAPIQueryKey.GET_TOURS],
    queryFn: getListTours
  });


  return (
    <div>
      <ListTourAdmin />
    </div>
  )
}

export default QuanLyTourPage
