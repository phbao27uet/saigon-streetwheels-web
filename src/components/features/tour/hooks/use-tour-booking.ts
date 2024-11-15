import { useAtom, useAtomValue } from 'jotai'
import {
  type TourBooking,
  isBookingExpiredAtom,
  tourBookingAtom,
} from '../atoms'

export const useTourBooking = () => {
  const [booking, setBooking] = useAtom(tourBookingAtom)
  const isExpired = useAtomValue(isBookingExpiredAtom)

  console.log('isExpired', isExpired)
  console.log('booking', booking)

  const saveBooking = (data: Omit<TourBooking, 'timestamp'>) => {
    setBooking({
      ...data,
      timestamp: Date.now(),
    })
  }

  const clearBooking = () => {
    setBooking(null)
  }

  return {
    booking: isExpired ? null : booking,
    isExpired,
    saveBooking,
    clearBooking,
  }
}
