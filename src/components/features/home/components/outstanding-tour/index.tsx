'use client'

import { useGetInfiniteTours } from '@/components/features/tour/hooks'
import { ButtonCustomGreen } from '@/components/shared/buttons'
import { TourCard } from '@/components/shared/cards'
import { Section } from '@/components/shared/layouts'
import { format } from 'date-fns'

export const OutstandingTour = () => {
  const { data: tours, hasNextPage, fetchNextPage } = useGetInfiniteTours()

  const displayedTours = tours ? tours.pages.flatMap((page) => page.data) : []

  return (
    <Section title="Outstanding Tours">
      <div id="outstanding-tour" className="relative -top-[12rem]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
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
      </div>
      <div className="text-center mt-6">
        {hasNextPage && (
          <div className="text-center mt-6">
            <ButtonCustomGreen onClick={() => fetchNextPage()}>
              Load More Tours
            </ButtonCustomGreen>
          </div>
        )}
      </div>
    </Section>
  )
}
