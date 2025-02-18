'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'
import { type CreateImageSchema, ImageAPIQueryKey } from '../configs'
import { createOrUpdateNews } from '../services'

export const useCreateOrUpdate = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateImageSchema) => createOrUpdateNews(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [ImageAPIQueryKey.IMAGES, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-anh-home')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [ImageAPIQueryKey.IMAGES],
      })
    },
  })
}
