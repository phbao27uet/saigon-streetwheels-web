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
          <SwiperSlide key={tour.id} className="h-full ">
            <TourCard
              key={tour.title}
              id={tour.id}
              title={tour.title}
              departureDate={format(
                tour.availableDates[0].date,
                'MMMM dd, yyyy',
              )}
              price={tour.ticketTypes[0].price}
              image={tour.featureImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {displayedTours.map((tour) => (
          <TourCard
            key={tour.title}
            id={tour.id}
            title={tour.title}
            departureDate={format(tour.availableDates[0].date, 'MMMM dd, yyyy')}
            price={tour.ticketTypes[0].price}
            image={tour.featureImage}
          />
        ))}
      </div> */}

      {/* {hasNextPage && (
        <div className="text-center mt-6">
          <ButtonCustomGreen onClick={() => fetchNextPage()}>
            Load More Tours
          </ButtonCustomGreen>
        </div>
      )} */}
    </Section>
  )
}
