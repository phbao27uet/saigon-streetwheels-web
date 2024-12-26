import { SwiperWithThumb } from '@/components/shared'
import { Section } from '@/components/shared/layouts'

const data = {
  images: [
    '/images/home/om-1.jpeg',
    '/images/home/om-2.png',
    '/images/home/om-3.png',
    '/images/home/om-4.png',
    '/images/home/om-5.png',
  ],
}

export const OurMoment = () => {
  return (
    <Section title="Our Moment" className="w-full">
      <SwiperWithThumb images={data.images} classNameWrapper="pt-[50%]" />
    </Section>
  )
}
