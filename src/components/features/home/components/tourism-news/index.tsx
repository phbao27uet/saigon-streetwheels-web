'use client'

import { Swiper } from '@/components/shared/slides'
import { SwiperSlide } from 'swiper/react'
import type { PaginationOptions } from 'swiper/types'
import { Section } from '../Section'
import { LatestNewsCard } from './components'

const DATA = [
  {
    image: '/images/home/tn-1.png',
    date: 'June 12, 2024',
    title: 'he led 3 groups of guests to Saigon',
  },
  {
    image: '/images/home/tn-2.png',
    date: 'May 12, 2021',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
  {
    image: '/images/home/tn-3.png',
    date: 'May 12, 2021',
    title: 'Paradoxes of Animal By-Products Transport',
  },
  {
    image: '/images/home/tn-2.png',
    date: 'May 12, 2021',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
]

export const TourismNews = () => {
  const pagination: PaginationOptions = {
    clickable: true,
  }

  return (
    <div id="tourism-news" className="bg-white">
      <Section title="TOURISM NEWS" titleClassName="text-[#C80D13]">
        <Swiper
          style={{
            width: '100%',
            height: '100%',
          }}
          pagination={pagination}
          className="p-3 md:p-10"
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {DATA?.map((data) => (
            <SwiperSlide
              key={data.title}
              className="h-full overflow-hidden rounded-[30px]"
            >
              <LatestNewsCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  )
}
