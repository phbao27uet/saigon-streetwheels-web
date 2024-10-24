import { Image } from '@mantine/core'
import Link from 'next/link'
import { ButtonCustomGreen } from '../buttons'

interface TourCardProps {
  id: number
  title: string
  departureLocation: string
  departureDate: string
  price: number
  image: string
}

export const TourCard = ({
  id,
  title,
  departureLocation,
  departureDate,
  price,
  image,
}: TourCardProps) => {
  return (
    <Link
      href={`/our-tour/${id}`}
      className="flex flex-col rounded-lg shadow-lg h-full"
    >
      <div className="w-full h-[400px]">
        <Image className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between px-6 py-4 bg-white flex-grow">
        <div className="flex flex-col mb-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            Departure Location: {departureLocation}
          </p>
          <p className="text-gray-700 text-base">Depart: {departureDate}</p>
        </div>

        <div className="flex justify-between items-center">
          <ButtonCustomGreen className="w-fit">Booking Now</ButtonCustomGreen>
          <div className="text-base font-semibold py-2 px-4 text-[#FA0404] border border-[#000] rounded-lg">
            {price} US
          </div>
        </div>
      </div>
    </Link>
  )
}
