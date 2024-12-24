import { TextInput } from '@mantine/core'
import { Button } from '@mantine/core'
import { NumberInput } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import type { CreateTourSchema } from '../configs/schemas'

export const TicketTypeManager = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<CreateTourSchema>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ticketTypes',
  })

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Loại vé</h3>
        <Button
          variant="filled"
          type="button"
          onClick={() => append({ name: '', price: 0 })}
        >
          Thêm loại vé
        </Button>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-4 items-start">
            <TextInput
              label="Tên loại vé"
              placeholder="Nhập tên loại vé"
              {...register(`ticketTypes.${index}.name`)}
              error={errors.ticketTypes?.[index]?.name?.message}
              className="flex-1"
            />

            <Controller
              control={control}
              name={`ticketTypes.${index}.price`}
              render={({ field: { value, onChange } }) => (
                <NumberInput
                  label="Giá vé"
                  placeholder="Giá vé"
                  value={value}
                  onChange={onChange}
                  error={errors.ticketTypes?.[index]?.price?.message}
                  className="flex-1"
                />
              )}
            />

            <Button
              type="button"
              variant="outline"
              size="icon"
              color="red"
              onClick={() => remove(index)}
              className="self-end"
            >
              <IconX className="h-5 w-5 text-red-500" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
