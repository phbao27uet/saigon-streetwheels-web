import { Image } from '@mantine/core'
import Link from 'next/link'
import { ButtonCustomGreen } from '../buttons'

interface TourCardProps {
  id: number
  title: string
  departureDate: string
  price: number
  image: string
}

export const TourCard = ({
  id,
  title,
  departureDate,
  price,
  image,
}: TourCardProps) => {
  return (
    <Link
      href={`/our-tour/${id}`}
      className="flex flex-col h-full bg-transparent"
    >
      <div className="w-full h-[300px] rounded-lg overflow-hidden bg-transparent">
        <Image
          className="w-full h-full object-cover rounded-lg overflow-hidden"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col py-2 flex-grow gap-1 bg-[#f5f2f1] items-start">
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-gray-700 text-xl">{departureDate}</p>
        <p className="text-xl font-semibold text-[#FA0404]">${price}</p>
        <div className="flex justify-between w-full items-center mt-2">
          <ButtonCustomGreen size="xs" fullWidth>
            Booking Now
          </ButtonCustomGreen>
        </div>
      </div>
    </Link>
  )
}
