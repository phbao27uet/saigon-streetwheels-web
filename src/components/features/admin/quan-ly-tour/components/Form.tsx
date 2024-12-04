'use client'

import { MultipleImageUpload, SingleImageUploader } from '@/components/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  Group,
  Input,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form'
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
    console.log(data)
    mutate(data)
  })

  useEffect(() => {
    if (tourQuery.data) {
      formReturn.reset({
        title: tourQuery.data.title,
        description: tourQuery.data.description,
        featureImage: tourQuery.data.featureImage,
        images: tourQuery.data.images,
        departureLocation: tourQuery.data.departureLocation,
        ticketTypes: tourQuery.data.ticketTypes,
        availableDates: tourQuery.data.availableDates.map((availableDate) => ({
          ...availableDate,
          date: new Date(availableDate.date),
        })),
      })
    }
  }, [formReturn, tourQuery.data])

  // Quản lý mảng ngày có thể book
  const {
    fields: dateFields,
    append: appendDate,
    remove: removeDate,
  } = useFieldArray({
    control: formReturn.control,
    name: 'availableDates',
  })

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
              {dateFields.map((dateField, dateIndex) => (
                <Card key={dateField.id} withBorder>
                  <Stack>
                    <Group justify="space-between">
                      <Controller
                        name={`availableDates.${dateIndex}.date`}
                        control={formReturn.control}
                        render={({ field }) => (
                          <DatePickerInput
                            label="Ngày"
                            placeholder="Chọn ngày"
                            value={new Date(field.value)}
                            onChange={(value) => field.onChange(value)}
                            minDate={new Date()}
                            error={
                              formReturn.formState.errors.availableDates?.[
                                dateIndex
                              ]?.date?.message
                            }
                          />
                        )}
                      />
                      <Button
                        color="red"
                        variant="subtle"
                        onClick={() => removeDate(dateIndex)}
                      >
                        Xóa ngày
                      </Button>
                    </Group>
                    <TimeFields
                      dateIndex={dateIndex}
                      selectedDate={formReturn.getValues(
                        `availableDates.${dateIndex}.date`,
                      )}
                    />
                  </Stack>
                </Card>
              ))}

              <Button
                variant="outline"
                onClick={() =>
                  appendDate({
                    date: new Date(),
                    times: [],
                  })
                }
              >
                Thêm ngày mới
              </Button>
            </Stack>
          </Card>

          <Button
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
