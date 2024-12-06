import type { DataPagination, ITour } from '@/libs/types'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { TourAPIQueryKey, getListTours } from '../../admin'

export const useGetInfiniteTours = () => {
  const queryResult = useSuspenseInfiniteQuery<DataPagination<ITour[]>>({
    queryKey: [TourAPIQueryKey.GET_TOURS],
    queryFn: getListTours,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.currentPage < lastPage.meta.totalPages
        ? lastPage.meta.currentPage + 1
        : undefined
    },
    initialPageParam: undefined,
  })

  return queryResult
}
