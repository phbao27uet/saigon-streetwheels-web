import { Image } from '@mantine/core'
import { format } from 'date-fns'
import {
  useGetDetailTour,
  useGetTimeSlot,
  useTourBooking,
} from '../../tour/hooks'

export const YourBasket = () => {
  const { booking } = useTourBooking()
  const { data: timeSlot } = useGetTimeSlot(booking?.timeId.toString() || '')
  const { data: tour } = useGetDetailTour(booking?.tourId.toString() || '')

  if (!booking) return <div>No booking</div>

  return (
    <div>
      <div className="flex justify-center items-center uppercase text-2xl font-bold py-4 bg-[#C80D13] text-white">
        Your basket
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Image
          src={tour?.featureImage}
          alt={tour?.title}
          width={100}
          height={100}
        />
        <p className="font-bold text-xl text-[#0070BB]">{tour?.title}</p>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {booking.ticketTypes.map((ticket) => (
          <YourBasketItem
            key={ticket.id}
            ticketName={ticket.name}
            ticketPrice={ticket.price}
            ticketQuantity={ticket.quantity}
            ticketDate={booking.date}
            ticketTime={`${timeSlot?.startTime} - ${timeSlot?.endTime}`}
          />
        ))}
      </div>
    </div>
  )
}

interface YourBasketItemProps {
  ticketName: string
  ticketPrice: number
  ticketQuantity: number
  ticketDate: string | Date
  ticketTime: string
}

export const YourBasketItem = ({
  ticketName,
  ticketPrice,
  ticketQuantity,
  ticketDate,
  ticketTime,
}: YourBasketItemProps) => {
  if (!ticketDate || !ticketTime || ticketQuantity === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-xl">Entrance ticket {ticketName}</p>
      <p className="font-bold text-xl text-[#C80D13]">{ticketPrice} US</p>
      <p>
        When: {format(new Date(ticketDate), 'MMMM dd, yyyy')}, {ticketTime} 
      </p>
      <p>
        Who: {ticketQuantity} x {ticketName}
      </p>
    </div>
  )
}
