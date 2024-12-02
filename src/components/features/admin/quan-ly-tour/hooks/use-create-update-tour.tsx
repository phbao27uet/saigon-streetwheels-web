'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { TourAPIQueryKey, type CreateTourSchema } from '../configs'
import { createOrUpdateTour } from '../services/'

export const useCreateOrUpdateTour = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (body: CreateTourSchema) => createOrUpdateTour(body, id),
    onSuccess: () => {
      if (id !== 'create') {
        queryClient.invalidateQueries({
          queryKey: [TourAPIQueryKey.GET_TOUR, id],
        })
      }
      toast.success('Thành công!')
      router.push('/admin/quan-ly-tour')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [TourAPIQueryKey.GET_TOURS],
      })
    },
  })
}
