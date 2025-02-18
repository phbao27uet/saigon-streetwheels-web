'use client'

import { useGetInfiniteTours } from '@/components/features/tour/hooks'
import { TourCard } from '@/components/shared/cards'
import { Section } from '@/components/shared/layouts'
import { Swiper } from '@/components/shared/slides'
import { cn } from '@/libs/utils'
import { format } from 'date-fns'
import { SwiperSlide } from 'swiper/react'
import type { PaginationOptions } from 'swiper/types'

export const OurTour = () => {
  const { data: tours } = useGetInfiniteTours({
    isOutstanding: false,
  })

  const displayedTours = tours ? tours.pages.flatMap((page) => page.data) : []

  const pagination: PaginationOptions = {
    clickable: true,
  }

  if (displayedTours.length === 0) {
    return null
  }

  return (
    <Section title="Our Tours" className="w-full">
      <div
        id="our-tour"
        className={cn(
          'relative -top-[12rem]',
          displayedTours.length < 4 && '[&_.swiper-initialized]:!pb-4',
        )}
      />
      <Swiper
        style={{
          width: '100%',
          height: '100%',
        }}
        className="px-3 md:px-10"
        pagination={pagination}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {displayedTours.map((tour) => (
          <SwiperSlide key={tour.id} className="h-full ">
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
