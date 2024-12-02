import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { DataPagination, PaginationState } from '../types'

interface UseQueryWithPaginationProps<T> {
  queryKey: string[]
  fetchFn: (params: PaginationState) => Promise<DataPagination<T[]>>
  params: PaginationState
}

export const useQueryWithPagination = <T>({
  queryKey,
  fetchFn,
  params,
}: UseQueryWithPaginationProps<T>) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => fetchFn(params),
    placeholderData: keepPreviousData,
  })
}
