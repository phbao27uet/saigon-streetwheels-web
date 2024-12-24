import { ActionIcon, Group, Stack, rem } from '@mantine/core'
import { Button } from '@mantine/core'
import { TimeInput } from '@mantine/dates'
import { mergeRefs } from '@mantine/hooks'
import { IconClock } from '@tabler/icons-react'
import { useRef } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import type { CreateTourSchema } from '../configs'

export const TimeFields = () => {
  const { control, register, formState, getValues } =
    useFormContext<CreateTourSchema>()

  const {
    fields: timeFields,
    append: appendTime,
    remove: removeTime,
  } = useFieldArray({
    control,
    name: 'times',
  })

  const startTimeRefs = useRef<(HTMLInputElement | null)[]>([])
  const endTimeRefs = useRef<(HTMLInputElement | null)[]>([])

  const timePickerControl = (ref: HTMLInputElement | null) => (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  )

  return (
    <Stack gap="sm">
      {timeFields.map((timeField, timeIndex) => (
        <Group key={timeField.id} align="flex-end">
          <TimeInput
            label="Giờ bắt đầu"
            placeholder="HH:mm"
            {...register(`times.${timeIndex}.startTime`, {
              shouldUnregister: true,
            })}
            ref={mergeRefs(
              (el) => {
                startTimeRefs.current[timeIndex] = el
              },
              register(`times.${timeIndex}.startTime`).ref,
            )}
            rightSection={timePickerControl(startTimeRefs.current[timeIndex])}
            error={formState.errors.times?.[timeIndex]?.startTime?.message}
          />
          <TimeInput
            label="Giờ kết thúc"
            placeholder="HH:mm"
            {...register(`times.${timeIndex}.endTime`, {
              shouldUnregister: true,
            })}
            ref={mergeRefs(
              (el) => {
                endTimeRefs.current[timeIndex] = el
              },
              register(`times.${timeIndex}.endTime`).ref,
            )}
            rightSection={timePickerControl(endTimeRefs.current[timeIndex])}
            error={formState.errors.times?.[timeIndex]?.endTime?.message}
          />
          <Button
            variant="filled"
            color="red"
            onClick={() => removeTime(timeIndex)}
          >
            Xóa khung giờ
          </Button>
        </Group>
      ))}
      <Button
        onClick={() => {
          appendTime({
            startTime: '',
            endTime: '',
          })
        }}
        variant="outline"
      >
        Thêm khung giờ
      </Button>
    </Stack>
  )
}
