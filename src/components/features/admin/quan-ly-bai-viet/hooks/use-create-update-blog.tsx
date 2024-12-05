'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'
import { BlogAPIQueryKey, type CreateBlogSchema } from '../configs'
import { createOrUpdateBlog } from '../services/create-blog'

export const useCreateOrUpdateBlog = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateBlogSchema) => createOrUpdateBlog(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [BlogAPIQueryKey.GET_BLOG, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-bai-viet')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [BlogAPIQueryKey.GET_BLOGS],
      })
    },
  })
}
