'use client'
import { TourCard } from '@/components/shared'
import { useGetInfiniteTours } from './hooks'

import { Section } from '@/components/shared/layouts'
import { Swiper } from '@/components/shared/slides'
import { format } from 'date-fns'
import { SwiperSlide } from 'swiper/react'
import type { PaginationOptions } from 'swiper/types'

export const ListTourPage = () => {
  const { data: tours } = useGetInfiniteTours()

  const displayedTours = tours ? tours.pages.flatMap((page) => page.data) : []

  const pagination: PaginationOptions = {
    clickable: true,
  }

  return (
    <Section title="OUR TOUR - SAIGON URBAN TOUR">
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
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {displayedTours.map((tour) => (
          <SwiperSlide key={tour.id} className="h-full bg-[#f5f2f1]">
            <TourCard
              key={tour.title}
              id={tour.id}
              title={tour.title}
              departureDate={format(tour.createdAt, 'MMMM dd, yyyy')}
              price={tour.ticketTypes[0].price}
              image={tour.featureImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}
