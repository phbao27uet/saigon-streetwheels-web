'use client'

import { SingleImageUploader } from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Stack } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  type CreateAlbumSchema,
  albumDefaultValues,
  createAlbumSchema,
} from '../configs'
import { useCreateOrUpdateAlbum, useGetDetailAlbum } from '../hooks'

export const AlbumForm = () => {
  const formReturn = useForm<CreateAlbumSchema>({
    resolver: zodResolver(createAlbumSchema),
    defaultValues: albumDefaultValues,
  })

  const params = useParams<{ id: string }>()
  const albumQuery = useGetDetailAlbum(params.id)

  const { mutate, isPending } = useCreateOrUpdateAlbum(params.id)

  const onSubmit = formReturn.handleSubmit((data) => {
    mutate(data)
  })

  useEffect(() => {
    if (albumQuery.data) {
      formReturn.reset({
        ...albumQuery.data,
      })
    }
  }, [formReturn, albumQuery.data])

  return (
    <Stack
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Stack>
        <Input.Label required fw={600}>
          Ảnh
        </Input.Label>
        <SingleImageUploader name="image" control={formReturn.control} />
      </Stack>

      <Button onClick={onSubmit} variant="filled">
        {params.id !== 'create' ? 'Cập nhật' : 'Tạo mới'}
      </Button>
    </Stack>
  )
}
