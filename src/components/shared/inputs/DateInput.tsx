import {
    DatePickerInput,
    PickerBaseProps,
    type DatePickerInputProps,
  } from '@mantine/dates'
  import { type FieldValues, useController } from 'react-hook-form'
  import type { DateInputProps } from './types'

type DateValue = PickerBaseProps['value']

export const DateInput = <T extends FieldValues>({
  name,
  control,
  ...props
}: DateInputProps<T> & DatePickerInputProps) => {
  const {
    field: { value, ...other },
      fieldState: { error },
    } = useController({
      name,
      control,
  })

  return (
    <>
        <DatePickerInput
          value={new Date(value) as DateValue || undefined }
          error={error?.message}
          {...other}
          {...props}
      />
    </>
  )
}
