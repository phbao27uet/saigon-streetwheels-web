'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'
import { type CreateNewsSchema, NewsAPIQueryKey } from '../configs'
import { createOrUpdateNews } from '../services'

export const useCreateOrUpdateNews = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateNewsSchema) => createOrUpdateNews(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [NewsAPIQueryKey.GET_NEWS, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-bai-gioi-thieu')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [NewsAPIQueryKey.GET_NEWS],
      })
    },
  })
}
