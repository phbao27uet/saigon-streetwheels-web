import { Image } from '@mantine/core'

interface Props {
  image: string
  date: string
  title: string
}

export const LatestNewsCard = ({ date, image, title }: Props) => {
  return (
    <div className="h-fit">
      <div className="relative overflow-hidden rounded-[33px] pt-[100%]">
        <Image
          alt="A globe surrounded by packages and a plane flying over it, representing global transport"
          className="absolute left-0 top-0 h-full w-full rounded-[33px] shadow-[0_0_28px_-8px_rgba(0,0,0,0.5)]"
          src={image}
        />
      </div>
      <p className="mt-2 text-xl text-black">
        On {date}, {title}
      </p>
    </div>
  )
}
