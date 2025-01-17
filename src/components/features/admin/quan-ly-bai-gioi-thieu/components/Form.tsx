'use client'

import {
  MyEditor,
  SingleImageUploader,
  TextInput,
  Textarea,
} from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Stack, Switch } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  type CreateNewsSchema,
  createNewsSchema,
  defaultValuesQuanLyBaiGioiThieu,
} from '../configs'
import { useCreateOrUpdateNews, useGetDetailNews } from '../hooks'

export const NewsForm = () => {
  const formReturn = useForm<CreateNewsSchema>({
    resolver: zodResolver(createNewsSchema),
    defaultValues: defaultValuesQuanLyBaiGioiThieu,
  })

  const params = useParams<{ id: string }>()
  const newsQuery = useGetDetailNews(params.id)

  const { mutate } = useCreateOrUpdateNews(params.id)

  const onSubmit = formReturn.handleSubmit((data) => {
    mutate(data)
  })

  useEffect(() => {
    if (newsQuery.data) {
      formReturn.reset({
        ...newsQuery.data,
      })
    }
  }, [formReturn, newsQuery.data])

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
          Tiêu đề bài viết giới thiệu
        </Input.Label>
        <TextInput
          name="title"
          placeholder="nhập tiêu đề"
          control={formReturn.control}
        />
      </Stack>

      <Stack>
        <Input.Label required fw={600}>
          Bài viết giới thiệu chính
        </Input.Label>
        <Controller
          control={formReturn.control}
          name="isMain"
          render={({ field }) => (
            <Switch
              className="w-fit"
              checked={!!field.value}
              onChange={field.onChange}
            />
          )}
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

      <Button onClick={onSubmit} variant="filled">
        {params.id !== 'create' ? 'Cập nhật' : 'Tạo mới'}
      </Button>
    </Stack>
  )
}
