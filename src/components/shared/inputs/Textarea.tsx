import {
  Textarea as TextareaMantine,
  type TextareaProps as TextareaPropsMantine,
} from '@mantine/core'
import { type FieldValues, useController } from 'react-hook-form'
import type { TextareaProps } from './types'

export const Textarea = <T extends FieldValues>({
  name,
  control,
  ...props
}: TextareaProps<T> & TextareaPropsMantine) => {
  const {
    field: { value, ...other },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <>
      <TextareaMantine
        value={value || ''}
        error={error?.message}
        {...other}
        {...props}
      />
    </>
  )
}
