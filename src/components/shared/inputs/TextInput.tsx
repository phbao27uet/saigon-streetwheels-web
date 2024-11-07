import {
  TextInput as TextInputMantine,
  type TextInputProps as TextInputPropsMantine,
} from '@mantine/core'
import { type FieldValues, useController } from 'react-hook-form'
import type { TextInputProps } from './types'

export const TextInput = <T extends FieldValues>({
  name,
  control,
  ...props
}: TextInputProps<T> & TextInputPropsMantine) => {
  const {
    field: { value, ...other },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <>
      <TextInputMantine
        value={value || ''}
        error={error?.message}
        {...other}
        {...props}
      />
    </>
  )
}
