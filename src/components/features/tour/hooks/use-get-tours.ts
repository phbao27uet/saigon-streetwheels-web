import type { DataPagination, ITour } from '@/libs/types'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { TourAPIQueryKey, getListTours } from '../../admin'

interface UseGetInfiniteToursArgs {
  isOutstanding?: boolean
  perPage?: number
}

export const useGetInfiniteTours = ({
  isOutstanding,
  perPage,
}: UseGetInfiniteToursArgs) => {
  const queryResult = useSuspenseInfiniteQuery<DataPagination<ITour[]>>({
    queryKey: [TourAPIQueryKey.GET_TOURS, isOutstanding, perPage],
    queryFn: ({ pageParam }) =>
      getListTours({ page: pageParam as number, perPage, isOutstanding }),
    getNextPageParam: (lastPage) => {
      return lastPage.meta.currentPage < lastPage.meta.totalPages
        ? lastPage.meta.currentPage + 1
        : undefined
    },
    initialPageParam: undefined,
  })

  return queryResult
}
