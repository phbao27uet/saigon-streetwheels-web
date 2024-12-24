'use client'

import { MultipleImageUpload, SingleImageUploader } from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  Input,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  type CreateTourSchema,
  createTourSchema,
  defaultValuesTour,
} from '../configs'
import { useCreateOrUpdateTour, useGetDetailTour } from '../hooks'
import { TicketTypeManager } from './TicketTypes'
import { TimeFields } from './TimeFields'

export const TourForm = () => {
  const formReturn = useForm<CreateTourSchema>({
    resolver: zodResolver(createTourSchema),
    defaultValues: defaultValuesTour,
  })

  const params = useParams<{ id: string }>()
  const tourQuery = useGetDetailTour(params.id)

  const { mutate, isPending } = useCreateOrUpdateTour(params.id)

  const onSubmit = formReturn.handleSubmit((data) => {
    mutate(data)
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (tourQuery.data) {
      try {
        formReturn.reset({
          ...tourQuery.data,
        })

        // transformedAvailableDates.forEach((dateField, index) => {
        //   updateDate(index, {
        //     ...dateField,
        //   })
        // })
      } catch (error) {
        console.error('Error setting form values:', error)
      }
    }
  }, [tourQuery.data])

  return (
    <FormProvider {...formReturn}>
      <form onSubmit={onSubmit} className="mt-5">
        <Stack gap="xl">
          <Card withBorder shadow="sm" p="md" radius="md">
            <Stack gap="lg">
              <Text size="xl" fw={700} c="blue">
                1. Thông tin cơ bản
              </Text>
              <TextInput
                label="Tiêu đề tour"
                placeholder="Nhập tiêu đề tour"
                {...formReturn.register('title')}
                error={formReturn.formState.errors.title?.message}
              />
              <Stack>
                <Input.Label required fw={600}>
                  Ảnh đại diện
                </Input.Label>
                <SingleImageUploader
                  name="featureImage"
                  control={formReturn.control}
                />
              </Stack>
              <Stack>
                <Input.Label required fw={600}>
                  Danh sách ảnh mô tả
                </Input.Label>
                <MultipleImageUpload
                  name="images"
                  control={formReturn.control}
                />
              </Stack>
              <TextInput
                label="Địa điểm xuất phát"
                placeholder="Nhập địa điểm xuất phát"
                {...formReturn.register('departureLocation')}
                error={formReturn.formState.errors.departureLocation?.message}
              />
              <Textarea
                label="Mô tả tour"
                placeholder="Nhập mô tả chi tiết về tour"
                {...formReturn.register('description')}
                error={formReturn.formState.errors.description?.message}
              />
            </Stack>
          </Card>

          <Card withBorder shadow="sm" p="md" radius="md">
            <Stack gap="lg">
              <Text size="xl" fw={700} c="blue">
                2. Danh sách loại vé
              </Text>
              <TicketTypeManager />
            </Stack>
          </Card>

          <Card withBorder shadow="sm" p="md" radius="md">
            <Stack gap="lg">
              <Text size="xl" fw={700} c="blue">
                3. Lịch trình tour
              </Text>
              <TimeFields />
            </Stack>
          </Card>

          <Button
            variant="filled"
            type="submit"
            loading={formReturn.formState.isSubmitting || isPending}
          >
            {params.id ? 'Cập nhật tour' : 'Tạo tour mới'}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  )
}
