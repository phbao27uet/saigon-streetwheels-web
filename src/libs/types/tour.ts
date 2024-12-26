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
  tourId: number
  startTime: string
  endTime: string
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
  times: ITimeSlot[]

  isOutstanding: boolean
  isAvailable: boolean
}
