'use client'

import { ButtonCustom, ButtonCustomRed } from '@/components/shared/buttons'
import { Calendar } from '@/components/shared/inputs'
import type { ITimeSlot, ITour } from '@/libs/types'
import { cn } from '@/libs/utils'
import { IconClock, IconMapPin } from '@tabler/icons-react'
import { format } from 'date-fns'
import { useParams } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'
import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import { useTourBooking } from '../hooks'
import type { TourSchema } from '../schemas'
import { StepSelect } from './StepSelect'
import { TicketCounter } from './TicketCounter'

interface SelectTourProps {
  data: ITour
}

export const SelectTour = ({ data }: SelectTourProps) => {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const [availableTimes, setAvailableTimes] = useState<ITimeSlot[]>([])

  const [step, setStep] = useState(0)
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useFormContext<TourSchema>()

  const { fields } = useFieldArray({
    control,
    name: 'ticketTypes',
  })

  const watchTickets = watch('ticketTypes')

  const totalPrice = watchTickets.reduce((total, ticket) => {
    return total + ticket.price * ticket.quantity
  }, 0)

  const totalQuantity = watchTickets.reduce((total, ticket) => {
    return total + ticket.quantity
  }, 0)

  const { saveBooking } = useTourBooking()

  const onSubmit = (data: TourSchema) => {
    saveBooking({
      ...data,
      tourId: Number(params.id),
    })

    router.push('/payment')
  }

  const soldOutDates = data.availableDates.filter((availableDate) =>
    availableDate.times.every((time) => time.availableTickets === 0),
  )

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
              availableDates={data.availableDates.map(
                (availableDate) => new Date(availableDate.date),
              )}
              soldOutDates={soldOutDates.map(
                (availableDate) => new Date(availableDate.date),
              )}
              callback={(date) => {
                const selectedDate = data.availableDates.find(
                  (d) =>
                    new Date(d.date).toDateString() === date?.toDateString(),
                )
                setAvailableTimes(selectedDate ? selectedDate.times : [])
              }}
            />

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#0070BB]">
                {data.title}
              </h1>
              <p className="text-base md:text-xl">{data.description}</p>
              <div className="flex gap-1">
                <IconMapPin />
                <p className="text-base md:text-xl">Depart:</p>
                <p className="text-base md:text-xl text-[#2D4271] font-bold">
                  {data.departureLocation}
                </p>
              </div>

              <div className="flex gap-1">
                <IconClock />
                <p className="text-base md:text-xl">Start time:</p>
                <p className="text-base md:text-xl text-[#2D4271] font-bold">
                  {format(data.availableDates[0].date, 'dd/MM/yyyy')}
                </p>
              </div>

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
              {totalPrice.toFixed(2)} USD
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

              const availableDate = data.availableDates.find(
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
                  {/* {isDisabled && (
                    <p className="text-sm text-red-500">
                      {item.availableTickets} tickets available
                    </p>
                  )} */}
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
                {totalPrice.toFixed(2)} USD
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
