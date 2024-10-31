import { Calendar } from '@/components/shared/inputs'
import { IconClock, IconMapPin } from '@tabler/icons-react'
import { addDays } from 'date-fns'
import { useFormContext } from 'react-hook-form'
import type { TourSchema } from '../schemas'

export const SelectTour = () => {
  const { control } = useFormContext<TourSchema>()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Calendar
        name="date"
        control={control}
        minDate={new Date()}
        availableDates={[new Date(), addDays(new Date(), 1)]}
        soldOutDates={[addDays(new Date(), 2)]}
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0070BB]">
          TOUR FROM SAIGON TO MY THO
        </h1>
        <p className="text-base md:text-xl">
          Tour from Saigon to My Tho is a 1-day tour that takes you to the
          beautiful My Tho, where you can enjoy the peaceful countryside and the
          charming floating market.
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
      </div>
    </div>
  )
}
