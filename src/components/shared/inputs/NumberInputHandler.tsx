import { cn } from '@/libs/utils'
import type { NumberInputProps } from '@mantine/core'
import { Button } from '@mantine/core'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { type FieldValues, useController } from 'react-hook-form'
import type { NumberInputHandlerProps } from './types'

export const NumberInputHandler = <T extends FieldValues>({
  name,
  control,
}: NumberInputHandlerProps<T> & NumberInputProps) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  const currentValue = value || 0

  const handleChange = (value: number) => {
    onChange(value)
  }

  return (
    <div className="flex items-center justify-center w-fit border border-black rounded-md">
      <Button
        onClick={() => handleChange(currentValue - 1)}
        variant="transparent"
        className={cn(
          'w-12',
          currentValue === 0 && 'opacity-50 cursor-not-allowed',
        )}
        disabled={currentValue === 0}
      >
        <IconMinus size={20} color="#000" />
      </Button>

      <div className="flex items-center justify-center border-r border-l border-black px-2 text-lg font-bold w-20 h-full">
        {!currentValue ? 0 : `x${currentValue}`}
      </div>

      <Button
        onClick={() => handleChange(currentValue + 1)}
        variant="transparent"
        className="w-12"
      >
        <IconPlus size={20} color="#000" />
      </Button>
    </div>
  )
}
