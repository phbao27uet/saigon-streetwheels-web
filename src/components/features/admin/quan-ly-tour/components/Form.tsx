'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  Group,
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
    // mutate(data)

    console.log(data)
  })

  useEffect(() => {
    if (tourQuery.data) {
      formReturn.reset({
        ...tourQuery.data,
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
      <form onSubmit={onSubmit}>
        <Stack gap="lg">
          <TextInput
            label="Tiêu đề tour"
            placeholder="Nhập tiêu đề tour"
            {...formReturn.register('title')}
            error={formReturn.formState.errors.title?.message}
          />

          <TextInput
            label="Ảnh đại diện"
            placeholder="Nhập URL ảnh đại diện"
            {...formReturn.register('featureImage')}
            error={formReturn.formState.errors.featureImage?.message}
          />

          <Textarea
            label="Mô tả tour"
            placeholder="Nhập mô tả chi tiết về tour"
            {...formReturn.register('description')}
            error={formReturn.formState.errors.description?.message}
          />

          <Stack gap="lg">
            <Text fw={500}>Danh sách loại vé</Text>
            <TicketTypeManager />
          </Stack>

          <Stack>
            <Text fw={500}>Lịch trình tour</Text>
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

          <Button type="submit" loading={formReturn.formState.isSubmitting}>
            {params.id ? 'Cập nhật tour' : 'Tạo tour mới'}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  )
}
