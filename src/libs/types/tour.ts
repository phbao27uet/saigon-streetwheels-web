export interface ITicketType {
  id: number
  name: string
  price: number
  tourId: number
  createdAt: string
  updatedAt: string
}

export interface ITimeSlot {
  id: number
  availableDateId: number
  startTime: string
  endTime: string
  availableTickets: number
}

export interface IAvailableDate {
  id: number
  tourId: number
  date: Date
  times: ITimeSlot[]
}

export interface ITour {
  id: number
  title: string
  description: string
  featureImage: string
  images: string[]
  departureLocation: string
  createdAt: string
  updatedAt: string
  ticketTypes: ITicketType[]
  availableDates: IAvailableDate[]
}
