'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'nextjs-toploader/app'
import { toast } from 'sonner'
import { AlbumAPIQueryKey, type CreateAlbumSchema } from '../configs'
import { createOrUpdateAlbum } from '../services/create-album'

export const useCreateOrUpdateAlbum = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateAlbumSchema) => createOrUpdateAlbum(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [AlbumAPIQueryKey.GET_ALBUM, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-album')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [AlbumAPIQueryKey.GET_ALBUM],
      })
    },
  })
}
