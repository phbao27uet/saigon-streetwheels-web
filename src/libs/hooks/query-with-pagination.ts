import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { DataPagination } from '../types'

interface PaginationParams {
  pageIndex: number
  pageSize: number
}

interface PaginatedResponse<T> {
  data: T[]
  total: number
}

interface UseQueryWithPaginationProps<T> {
  queryKey: string[]
  fetchFn: (params: PaginationParams) => Promise<DataPagination<T[]>>
  params: PaginationParams
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
