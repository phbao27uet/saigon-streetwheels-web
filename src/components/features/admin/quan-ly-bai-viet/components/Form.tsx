'use client'

import {
  MyEditor,
  SingleImageUploader,
  TextInput,
  Textarea,
} from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Stack } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  type CreateBlogSchema,
  createBlogSchema,
  defaultValues,
} from '../configs'
import { useCreateOrUpdateBlog, useGetDetailBlog } from '../hooks'

export const BlogForm = () => {
  const formReturn = useForm<CreateBlogSchema>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: defaultValues,
  })

  const params = useParams<{ id: string }>()
  const blogQuery = useGetDetailBlog(params.id)

  const { mutate, isPending } = useCreateOrUpdateBlog(params.id)

  const onSubmit = formReturn.handleSubmit((data) => {
    mutate(data)
  })

  useEffect(() => {
    if (blogQuery.data) {
      formReturn.reset({
        ...blogQuery.data,
      })
    }
  }, [formReturn, blogQuery.data])

  return (
    <Stack
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Stack>
        <Input.Label required fw={600}>
          Ảnh đại diện
        </Input.Label>
        <SingleImageUploader name="featureImage" control={formReturn.control} />
      </Stack>
      <Stack>
        <Input.Label required fw={600}>
          Tiêu đề bài viết
        </Input.Label>
        <TextInput
          name="title"
          placeholder="nhập tiêu đề"
          control={formReturn.control}
        />
      </Stack>

      <Stack>
        <Input.Label required fw={600}>
          Mô tả bài viết
        </Input.Label>
        <Textarea
          name="description"
          placeholder="nhập mô tả"
          control={formReturn.control}
        />
      </Stack>

      <Controller
        name="content"
        control={formReturn.control}
        render={({ field: { onChange, value, ref } }) => (
          <MyEditor
            innerRef={ref}
            id="content"
            onChange={onChange}
            value={value}
            error={formReturn.formState.errors.content?.message}
            label={'Nội dung bài viết'}
          />
        )}
      />

      <Button onClick={onSubmit} variant='filled'>
        {params.id !== 'create' ? 'Cập nhật' : 'Tạo mới'}
      </Button>
    </Stack>
  )
}
