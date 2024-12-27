'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'
import { type CreateFeedbackSchema, FeedbackAPIQueryKey } from '../configs'
import { createOrUpdateFeedback } from '../services/create-feedback'

export const useCreateFeedback = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateFeedbackSchema) =>
      createOrUpdateFeedback(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [FeedbackAPIQueryKey.GET_FEEDBACK, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-danh-gia')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [FeedbackAPIQueryKey.GET_FEEDBACKS],
      })
    },
  })
}
