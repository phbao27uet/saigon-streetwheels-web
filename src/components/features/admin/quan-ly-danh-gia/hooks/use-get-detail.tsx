import { useQuery } from '@tanstack/react-query'
import { FeedbackAPIQueryKey } from '../configs'
import { getDetailFeedback } from '../services'

export const useGetDetailFeedback = (id: string) => {
  return useQuery({
    queryKey: [FeedbackAPIQueryKey.GET_FEEDBACK, id],
    queryFn: getDetailFeedback(id),
    enabled: !!id && id !== 'create',
  })
}
