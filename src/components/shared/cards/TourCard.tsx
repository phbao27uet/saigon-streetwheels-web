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
    <Link href={`/our-tour/${id}`} className="flex flex-col h-full">
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <Image className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between py-2 flex-grow gap-1">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-gray-700 text-base">{departureDate}</p>
        <p className="text-base font-semibold text-[#FA0404]">${price}</p>
        <div className="flex justify-between items-center mt-2">
          <ButtonCustomGreen size="xs" fullWidth>
            Booking Now
          </ButtonCustomGreen>
        </div>
      </div>
    </Link>
  )
}
