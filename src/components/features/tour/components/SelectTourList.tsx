'use client'

import { ButtonCustom, ButtonCustomRed } from '@/components/shared/buttons'
import { Calendar } from '@/components/shared/inputs'
import type { ITimeSlot, ITour } from '@/libs/types'
import { cn } from '@/libs/utils'
import { Group, Select, type SelectProps } from '@mantine/core'
import { IconCheck, IconClock, IconMapPin } from '@tabler/icons-react'
import { format } from 'date-fns'
import { useRouter } from 'nextjs-toploader/app'
import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import { useTourBooking } from '../hooks'
import type { TourSchema } from '../schemas'
import { StepSelect } from './StepSelect'
import { TicketCounter } from './TicketCounter'

interface SelectTourListProps {
  data: ITour[]
  onClose: () => void
}

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
}

export const SelectTourList = ({ data, onClose }: SelectTourListProps) => {
  const router = useRouter()
  const [availableTimes, setAvailableTimes] = useState<ITimeSlot[]>([])
  const [selectedTour, setSelectedTour] = useState<ITour | null>(null)

  const [step, setStep] = useState(0)
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useFormContext<TourSchema>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ticketTypes',
  })

  const watchTickets = watch('ticketTypes')

  const totalPrice = watchTickets?.reduce((total, ticket) => {
    return total + ticket.price * ticket.quantity
  }, 0)

  const totalQuantity = watchTickets?.reduce((total, ticket) => {
    return total + ticket.quantity
  }, 0)

  const { saveBooking } = useTourBooking()

  const onSubmit = (data: TourSchema) => {
    if (!selectedTour) {
      toast.error('Please select the tour')
      return
    }

    saveBooking({
      ...data,
      tourId: selectedTour?.id,
    })

    router.push('/payment')
    onClose()
  }

  const soldOutDates = selectedTour
    ? selectedTour.availableDates.filter((availableDate) =>
        availableDate.times.every((time) => time.availableTickets === 0),
      )
    : []

  const renderSelectOption: SelectProps['renderOption'] = ({
    option,
    checked,
  }) => {
    const tour = data.find((t) => t.id.toString() === option.value)

    if (!tour) return null

    return (
      <Group flex="1" gap="xs">
        {checked && (
          <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />
        )}

        <div className="flex items-center justify-between gap-1 flex-1">
          <p>{tour.title}</p>
          <p className="text-sm text-[#F81818]">
            {tour.ticketTypes[0].price} USD
          </p>
        </div>
      </Group>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <StepSelect step={step} />

      {step === 0 && (
        <>
          <div className="flex md:flex-row flex-col gap-10">
            <Calendar
              name="date"
              control={control}
              minDate={new Date()}
              availableDates={
                selectedTour
                  ? selectedTour.availableDates.map(
                      (availableDate) => new Date(availableDate.date),
                    )
                  : []
              }
              soldOutDates={soldOutDates.map(
                (availableDate) => new Date(availableDate.date),
              )}
              callback={(date) => {
                const selectedDate = selectedTour?.availableDates.find(
                  (d) =>
                    new Date(d.date).toDateString() === date?.toDateString(),
                )
                setAvailableTimes(selectedDate ? selectedDate.times : [])
              }}
            />

            <div className="flex flex-col gap-2 flex-1">
              <Select
                className="w-full"
                placeholder="Choose the tour you want?"
                data={data?.map((tour) => ({
                  value: tour?.id?.toString(),
                  label: tour?.title,
                }))}
                renderOption={renderSelectOption}
                maxDropdownHeight={200}
                onChange={(value) => {
                  if (!value) {
                    remove()
                    setSelectedTour(null)
                    return
                  }

                  const tour = data.find((t) => t.id.toString() === value)
                  if (!tour) return
                  setSelectedTour(tour)

                  remove()

                  for (const ticketType of tour.ticketTypes) {
                    append({
                      name: ticketType.name,
                      id: ticketType.id,
                      price: ticketType.price,
                      quantity: 0,
                    })
                  }
                }}
              />

              {selectedTour?.title && (
                <h1 className="text-2xl md:text-3xl font-bold text-[#0070BB]">
                  {selectedTour.title}
                </h1>
              )}

              <p className="text-base md:text-xl">
                {selectedTour?.description}
              </p>

              {selectedTour?.departureLocation && (
                <div className="flex gap-1">
                  <IconMapPin />
                  <p className="text-base md:text-xl">Depart:</p>
                  <p className="text-base md:text-xl text-[#2D4271] font-bold">
                    {selectedTour?.departureLocation}
                  </p>
                </div>
              )}

              {selectedTour && (
                <div className="flex gap-1">
                  <IconClock />
                  <p className="text-base md:text-xl">Start time:</p>
                  <p className="text-base md:text-xl text-[#2D4271] font-bold">
                    {watch('date') ? format(watch('date'), 'dd/MM/yyyy') : ''}
                  </p>
                </div>
              )}

              <div className="flex gap-1 flex-col">
                {fields.map((field, index) => (
                  <>
                    <TicketCounter
                      key={field.id}
                      name={field.name}
                      price={field.price}
                      inputName={`ticketTypes.${index}.quantity`}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-end mt-4">
            <p className="text-xl font-bold">TOTAL PRICE:</p>
            <p className="text-xl font-bold text-[#C80D13]">
              {totalPrice?.toFixed(2)} USD
            </p>

            <ButtonCustomRed
              onClick={() => {
                if (totalPrice === 0) {
                  toast.error('Please select the number of tickets')
                  return
                }

                if (!watch('date')) {
                  toast.error('Please select the date')
                  return
                }

                setStep(1)
              }}
            >
              CONTINUE
            </ButtonCustomRed>
          </div>
        </>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-4">
            {availableTimes.map((item) => {
              const currentTime = new Date()
              const hourMinute = format(currentTime, 'HH:mm')

              const availableDate = selectedTour?.availableDates.find(
                (d) => d.id === item.availableDateId,
              )

              const isDisabled =
                item.availableTickets <= 0 ||
                (hourMinute > item.endTime &&
                  availableDate?.date &&
                  format(availableDate?.date, 'yyyy-MM-dd') ===
                    format(currentTime, 'yyyy-MM-dd')) ||
                item.availableTickets < totalQuantity

              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  key={item.id}
                  className={cn(
                    'border border-black px-4 flex flex-col justify-center items-center h-20 cursor-pointer hover:bg-black hover:text-white',
                    watch('timeId') === item.id && 'bg-black text-white',
                    isDisabled && 'opacity-50 cursor-not-allowed',
                  )}
                  onClick={() => {
                    if (isDisabled) {
                      if (item.availableTickets < totalQuantity) {
                        toast.error('Not enough tickets available')
                        return
                      }

                      if (item.availableTickets <= 0) {
                        toast.error('This time is sold out')
                      } else {
                        toast.error('This time is not available')
                      }

                      return
                    }

                    setValue('timeId', item.id)
                  }}
                >
                  <p>
                    {item.startTime} - {item.endTime}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <ButtonCustom
              variant="outline"
              onClick={() => {
                setStep(0)
                setValue('timeId', 0)
              }}
            >
              BACK
            </ButtonCustom>

            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">TOTAL PRICE:</p>
              <p className="text-xl font-bold text-[#C80D13]">
                {totalPrice?.toFixed(2)} USD
              </p>

              <ButtonCustomRed
                onClick={() => {
                  if (!watch('timeId')) {
                    toast.error('Please select the time')
                    return
                  }

                  handleSubmit(onSubmit)()
                }}
              >
                CONTINUE
              </ButtonCustomRed>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
