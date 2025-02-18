import { useQuery } from '@tanstack/react-query'
import { QAAPIQueryKey } from '../configs'
import { getDetailQA } from '../services'

export const useGetDetailQA = (id: string) => {
  return useQuery({
    queryKey: [QAAPIQueryKey.GET_QA, id],
    queryFn: getDetailQA(id),
    enabled: !!id && id !== 'create',
  })
}
