import { TOUR_BOOKING_KEY } from '@/libs/utils'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import type { TourSchema } from '../schemas'

export interface TourBooking extends TourSchema {
  tourId: number
  timestamp: number
}

const EXPIRY_TIME = 15 * 60 * 1000 // 15 minutes

export const tourBookingAtom = atomWithStorage<TourBooking | null>(
  TOUR_BOOKING_KEY,
  null,
)

export const isBookingExpiredAtom = atom((get) => {
  const booking = get(tourBookingAtom)
  if (!booking) return true

  return new Date().getTime() - booking.timestamp > EXPIRY_TIME
})
