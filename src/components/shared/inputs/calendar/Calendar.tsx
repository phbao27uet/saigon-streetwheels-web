import { cn } from '@/libs/utils'
import { DatePicker, type DatePickerProps } from '@mantine/dates'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { differenceInDays, isSameDay } from 'date-fns'
import { type FieldValues, useController } from 'react-hook-form'
import type { CalendarProps } from '../types'

export const Calendar = <T extends FieldValues>({
  name,
  control,
  availableDates = [],
  soldOutDates = [],
  className,
  ...props
}: CalendarProps<T> &
  Omit<DatePickerProps, 'value' | 'onChange'> & {
    availableDates?: Date[]
  }) => {
  const {
    field: { value, ...other },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <div>
      <DatePicker
        allowDeselect
        value={value}
        error={error?.message}
        size="lg"
        getDayProps={(date) => {
          let bgColor = undefined
          let isDisabled = false

          if (
            availableDates.some(
              (highlightDate) =>
                highlightDate.toDateString() === date.toDateString(),
            )
          ) {
            bgColor = '#C80D13'
          }

          if (value && isSameDay(date, value)) {
            bgColor = '#000000'
          }

          if (
            soldOutDates.some((soldOutDate) => isSameDay(soldOutDate, date))
          ) {
            bgColor = '#D9D9D9'
          }

          // Check disabled
          /**
           * 1. Đã bán hết vé
           * 2. Ngày nhỏ hơn ngày min
           * 3. Ngày không có vé nào có sẵn
           */
          if (
            soldOutDates.some((soldOutDate) => isSameDay(soldOutDate, date)) ||
            (props.minDate && differenceInDays(date, props.minDate) < 0) ||
            availableDates.every(
              (availableDate) => !isSameDay(availableDate, date),
            )
          ) {
            isDisabled = true
          }

          return {
            style: {
              backgroundColor: bgColor,
              color: bgColor ? 'white' : undefined,
            },
            disabled: isDisabled,
          }
        }}
        nextIcon={<IconChevronRight size={16} />}
        previousIcon={<IconChevronLeft size={16} />}
        className={cn('w-full', className)}
        {...other}
        {...props}
      />

      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500" />
          <span className="text-base">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-black" />
          <span className="text-base">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#D9D9D9] relative">
            <span className="border-t border-red-500 absolute top-1/2 left-0 w-5 rotate-45" />
          </div>
          <span className="text-base">Sold Out</span>
        </div>
      </div>
    </div>
  )
}
