'use client'

import { SingleImageUploader } from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Stack } from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  type CreateImageSchema,
  createImageSchema,
  defaultValuesQuanLyAnhHome,
} from '../configs'
import { useCreateOrUpdate, useGetDetailImage } from '../hooks'

export const ImageForm = () => {
  const formReturn = useForm<CreateImageSchema>({
    resolver: zodResolver(createImageSchema),
    defaultValues: defaultValuesQuanLyAnhHome,
  })

  const imageQuery = useGetDetailImage('HOME')

  const { mutate } = useCreateOrUpdate('HOME')

  const onSubmit = formReturn.handleSubmit((data) => {
    mutate(data)
  })

  useEffect(() => {
    if (imageQuery.data) {
      formReturn.reset({
        ...imageQuery.data,
      })
    }
  }, [formReturn, imageQuery.data])

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
        <SingleImageUploader name="imageUrl" control={formReturn.control} />
      </Stack>

      <Button onClick={onSubmit} variant="filled">
        Cập nhật
      </Button>
    </Stack>
  )
}
