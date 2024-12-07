import type { ITicketType, ITimeSlot, ITour } from './tour'

export interface IBlog {
  id: number
  title: string
  description: string
  content: string
  featureImage: string
  createdAt: string
  updatedAt: string
}

export interface IBooking {
  id: number
  totalPrice: number
  bookerName: string
  bookerEmail: string
  bookerPhoneNumber: string
  bookerPhoneNumber2: string
  bookerAddress: string
  bookerNote: string
  tourId: number
  tour: ITour
  paidStatus: boolean
  approvalUrl: string
  paypalOrderId: string
  expireTime: string
  timeId: number
  createdAt: string
  updatedAt: string

  bookingDetails: IBookingDetail[]
  time: ITimeSlot
}

export interface IBookingDetail {
  id: number
  quantity: number
  price: number
  bookingId: number
  ticketTypeId: number
  createdAt: string
  updatedAt: string

  ticketType: ITicketType
}
