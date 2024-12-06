import { Image } from '@mantine/core'
import { format } from 'date-fns'
import Link from 'next/link'

interface Props {
  id: number
  image: string
  date: string
  title: string
}

export const LatestNewsCard = ({ id, date, image, title }: Props) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="h-fit">
        <div className="relative overflow-hidden pt-[100%]">
          <Image
            alt="A globe surrounded by packages and a plane flying over it, representing global transport"
            className="absolute left-0 top-0 h-full w-full rounded-[33px] overflow-hidden"
            src={image}
          />
        </div>
        <p className="mt-2 text-left text-xl text-black">
          On {format(new Date(date), 'MMMM dd, yyyy')}
        </p>
        <p className="mt-1 text-left text-xl text-black">{title}</p>
      </div>
    </Link>
  )
}
