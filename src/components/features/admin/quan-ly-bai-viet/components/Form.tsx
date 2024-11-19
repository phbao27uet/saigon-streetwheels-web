'use client'

import { SingleImageUploader, TextInput, Textarea } from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Stack } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
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

  console.log('params', params)

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
          Nội dung bài viết
        </Input.Label>
        <Textarea
          name="content"
          placeholder="nhập nội dung"
          control={formReturn.control}
          rows={5}
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

      <Button onClick={onSubmit}>
        {params.id !== 'create' ? 'Cập nhật' : 'Tạo mới'}
      </Button>
    </Stack>
  )
}
