import { ButtonCustomRed } from '@/components/shared'
import { Image } from '@mantine/core'
import Link from 'next/link'

interface Props {
  id: number
  image: string
  title: string
  description: string
}

export const LatestNewsCard = ({ id, image, title, description }: Props) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="h-fit">
        <div className="relative overflow-hidden pt-[100%]">
          <Image
            alt="A globe surrounded by packages and a plane flying over it, representing global transport"
            className="absolute left-0 top-0 h-full w-full overflow-hidden"
            src={image}
          />
        </div>
        <p className="mt-1 text-left text-xl text-[#1B7C8B] font-bold line-clamp-3 min-h-[84px]">
          {title}
        </p>
        <p className="mt-1 text-left text-xl text-black line-clamp-2">
          {description}
        </p>
      </div>

      <div className="text-left">
        <ButtonCustomRed className="mt-2">SEE MORE</ButtonCustomRed>
      </div>
    </Link>
  )
}
