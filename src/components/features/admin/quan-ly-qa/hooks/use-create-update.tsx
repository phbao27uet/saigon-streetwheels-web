'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'
import { type CreateQASchema, QAAPIQueryKey } from '../configs'
import { createOrUpdateQA } from '../services/create'

export const useCreateOrUpdateQA = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateQASchema) => createOrUpdateQA(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [QAAPIQueryKey.GET_QA, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-qa')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QAAPIQueryKey.GET_QA],
      })
    },
  })
}
