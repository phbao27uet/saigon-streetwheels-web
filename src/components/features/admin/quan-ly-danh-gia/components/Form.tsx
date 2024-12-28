'use client'

import { SingleImageUploader } from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Rating, Stack, TextInput } from '@mantine/core'
import { Textarea } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  type CreateFeedbackSchema,
  createFeedbackSchema,
  feedbackDefaultValues,
} from '../configs'
import { useCreateFeedback, useGetDetailFeedback } from '../hooks'

export const FeedbackForm = () => {
  const formReturn = useForm<CreateFeedbackSchema>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: feedbackDefaultValues,
  })

  const params = useParams<{ id: string }>()
  const feedbackQuery = useGetDetailFeedback(params.id)

  const { mutate, isPending } = useCreateFeedback(params.id)

  const onSubmit = formReturn.handleSubmit((data) => {
    mutate(data)
  })

  useEffect(() => {
    if (feedbackQuery.data) {
      formReturn.reset({
        ...feedbackQuery.data,
      })
    }
  }, [formReturn, feedbackQuery.data])

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

      <TextInput
        label="Tên"
        placeholder="Nhập tên"
        {...formReturn.register('name')}
        error={formReturn.formState.errors.name?.message}
      />

      <Textarea
        label="Nội dung"
        placeholder="Nhập nội dung"
        {...formReturn.register('content')}
        error={formReturn.formState.errors.content?.message}
      />

      <Stack gap="xs">
        <Input.Label required fw={600}>
          Đánh giá
        </Input.Label>
        <Controller
          control={formReturn.control}
          name="star"
          render={({ field }) => <Rating {...field} />}
        />
      </Stack>

      <Button onClick={onSubmit} variant="filled">
        {params.id !== 'create' ? 'Cập nhật' : 'Tạo mới'}
      </Button>
    </Stack>
  )
}
