'use client'
import { ButtonCustomRed, TourCard } from '@/components/shared'
import { useGetInfiniteTours } from './hooks'

import { Section } from '@/components/shared/layouts'
import { format } from 'date-fns'

export const ListTourPage = () => {
  const {
    data: tours,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetInfiniteTours({})

  const displayedTours = tours ? tours.pages.flatMap((page) => page.data) : []

  return (
    <Section
      title="OUR TOUR - SAIGON URBAN TOUR"
      className="bg-[#f5f2f1] pt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 p-4">
        {displayedTours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            title={tour.title}
            departureDate={format(tour.createdAt, 'MMMM dd, yyyy')}
            price={tour.ticketTypes[0].price}
            image={tour.featureImage}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {hasNextPage && (
          <ButtonCustomRed
            onClick={() => fetchNextPage()}
            loading={isFetchingNextPage}
          >
            Load more
          </ButtonCustomRed>
        )}
      </div>
    </Section>
  )
}
