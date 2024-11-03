import { ButtonCustom, ButtonCustomRed } from '@/components/shared/buttons'
import { Calendar } from '@/components/shared/inputs'
import { cn } from '@/libs/utils'
import { IconClock, IconMapPin } from '@tabler/icons-react'
import { addDays } from 'date-fns'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import type { TourSchema } from '../schemas'
import { calculatePrice } from '../utils/calculate-price'
import { StepSelect } from './StepSelect'
import { TicketCounter } from './TicketCounter'

const TIMES = [
  '10:00 - 10:30 AM',
  '11:00 - 11:30 AM',
  '12:00 - 12:30 PM',
  '01:00 - 01:30 PM',
  '02:00 - 02:30 PM',
  '03:00 - 03:30 PM',
  '04:00 - 04:30 PM',
  '05:00 - 05:30 PM',
]

export const SelectTour = () => {
  const [step, setStep] = useState(0)
  const { control, watch, setValue } = useFormContext<TourSchema>()

  const totalPrice = calculatePrice(
    watch('adult'),
    watch('children'),
    watch('family'),
  )

  console.log(watch())

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
              availableDates={[
                new Date(),
                addDays(new Date(), 1),
                addDays(new Date(), 2),
                addDays(new Date(), 3),
                addDays(new Date(), 4),
                addDays(new Date(), 5),
                addDays(new Date(), 6),
                addDays(new Date(), 7),
                addDays(new Date(), 8),
                addDays(new Date(), 9),
                addDays(new Date(), 10),
                addDays(new Date(), 11),
                addDays(new Date(), 12),
                addDays(new Date(), 13),
                addDays(new Date(), 14),
                addDays(new Date(), 15),
                addDays(new Date(), 16),
                addDays(new Date(), 17),
                addDays(new Date(), 18),
                addDays(new Date(), 19),
                addDays(new Date(), 20),
              ]}
              soldOutDates={[addDays(new Date(), 3)]}
            />

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#0070BB]">
                TOUR FROM SAIGON TO MY THO
              </h1>
              <p className="text-base md:text-xl">
                Tour from Saigon to My Tho is a 1-day tour that takes you to the
                beautiful My Tho, where you can enjoy the peaceful countryside
                and the charming floating market.
              </p>
              <div className="flex gap-1">
                <IconMapPin />
                <p className="text-base md:text-xl">Depart:</p>
                <p className="text-base md:text-xl text-[#2D4271] font-bold">
                  Ho Chi Minh City
                </p>
              </div>

              <div className="flex gap-1">
                <IconClock />
                <p className="text-base md:text-xl">Start time:</p>
                <p className="text-base md:text-xl text-[#2D4271] font-bold">
                  14/07/2024
                </p>
              </div>

              <div className="flex gap-1 flex-col">
                <TicketCounter name="ADULT" price={30} inputName="adult" />
                <TicketCounter
                  name="Children 7-15 year"
                  price={30}
                  inputName="children"
                />
                <TicketCounter
                  name="Family Ticket 2+2"
                  price={30}
                  inputName="family"
                />
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
            {TIMES.map((item) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={item}
                className={cn(
                  'border border-black px-4 flex justify-center items-center h-20 cursor-pointer hover:bg-black hover:text-white',
                  watch('time') === item && 'bg-black text-white',
                )}
                onClick={() => setValue('time', item)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <ButtonCustom variant="outline" onClick={() => setStep(0)}>
              BACK
            </ButtonCustom>

            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">TOTAL PRICE:</p>
              <p className="text-xl font-bold text-[#C80D13]">
                {totalPrice.toFixed(2)} USD
              </p>

              <ButtonCustomRed
                onClick={() => {
                  if (!watch('time')) {
                    toast.error('Please select the time')
                    return
                  }

                  setStep(2)
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
