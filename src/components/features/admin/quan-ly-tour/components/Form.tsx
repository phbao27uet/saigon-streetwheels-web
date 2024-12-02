'use client'


import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Group, Stack, Text, TextInput, Textarea } from '@mantine/core'
import { DateInput, TimeInput } from '@mantine/dates'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import {
  type CreateTourSchema,
  createTourSchema,
  defaultValuesTour,
} from '../configs'
import { useCreateOrUpdateTour, useGetDetailTour } from '../hooks'

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

  const renderTimeFields = (dateIndex: number) => {
    const {
      fields: timeFields,
      append: appendTime,
      remove: removeTime,
    } = useFieldArray({
      control: formReturn.control,
      name: `availableDates.${dateIndex}.times`,
    })

    const selectedDate = formReturn.getValues(`availableDates.${dateIndex}.date`)

    return (
      <Stack gap="sm">
        {timeFields.map((timeField, timeIndex) => (
          <Group key={timeField.id} align="flex-end">
            <TimeInput
              label="Giờ bắt đầu"
              placeholder="HH:mm"
              {...formReturn.register(
                `availableDates.${dateIndex}.times.${timeIndex}.startTime`,
                { valueAsDate: true }
              )}
              error={
                formReturn.formState.errors.availableDates?.[dateIndex]?.times?.[
                  timeIndex
                ]?.startTime?.message
              }
            />
            <TimeInput
              label="Giờ kết thúc"
              placeholder="HH:mm"
              {...formReturn.register(
                `availableDates.${dateIndex}.times.${timeIndex}.endTime`,
                { valueAsDate: true }
              )}
              error={
                formReturn.formState.errors.availableDates?.[dateIndex]?.times?.[
                  timeIndex
                ]?.endTime?.message
              }
            />
            <TextInput
              type="number"
              label="Số lượng vé"
              placeholder="Nhập số lượng vé"
              {...formReturn.register(
                `availableDates.${dateIndex}.times.${timeIndex}.availableTickets`,
                { valueAsNumber: true }
              )}
              error={
                formReturn.formState.errors.availableDates?.[dateIndex]?.times?.[
                  timeIndex
                ]?.availableTickets?.message
              }
            />
            <Button color="red" onClick={() => removeTime(timeIndex)}>
              Xóa khung giờ
            </Button>
          </Group>
        ))}
        <Button
          onClick={() => {
            const defaultStartTime = new Date(selectedDate)
            defaultStartTime.setHours(9, 0, 0) // 9:00 AM
            const defaultEndTime = new Date(selectedDate)
            defaultEndTime.setHours(17, 0, 0) // 5:00 PM

            appendTime({
              startTime: defaultStartTime,
              endTime: defaultEndTime,
              availableTickets: 0,
            })
          }}
          variant="outline"
        >
          Thêm khung giờ
        </Button>
      </Stack>
    )
  }

  return (
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

        <Stack>
          <Text fw={500}>Lịch trình tour</Text>
          {dateFields.map((dateField, dateIndex) => (
            <Card key={dateField.id} withBorder>
              <Stack>
                <Group justify="space-between">
                  <DateInput
                    label="Ngày"
                    placeholder="Chọn ngày"
                    {...formReturn.register(
                      `availableDates.${dateIndex}.date`,
                      {
                        valueAsDate: true,
                      }
                    )}
                    minDate={new Date()}
                    error={
                      formReturn.formState.errors.availableDates?.[dateIndex]?.date
                        ?.message
                    }
                  />
                  <Button
                    color="red"
                    variant="subtle"
                    onClick={() => removeDate(dateIndex)}
                  >
                    Xóa ngày
                  </Button>
                </Group>
                {renderTimeFields(dateIndex)}
              </Stack>
            </Card>
          ))}

          <Button
            variant="outline"
            onClick={() =>
              appendDate({
                date: new Date().toISOString(),
                times: [{ startTime: new Date(), endTime: new Date(), availableTickets: 0 }],
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
  )
}
