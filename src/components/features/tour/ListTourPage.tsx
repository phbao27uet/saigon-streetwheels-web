'use client'

import { ButtonCustomGreen } from '@/components/shared/buttons'
import { TourCard } from '@/components/shared/cards'
import { Section } from '@/components/shared/layouts'
import { format } from 'date-fns'
import { useGetInfiniteTours } from './hooks'

export const ListTourPage = () => {
  const { data: tours, fetchNextPage, hasNextPage } = useGetInfiniteTours()

  const displayedTours = tours ? tours.pages.flatMap((page) => page.data) : []

  return (
    <Section title="OUR TOUR - SAIGON URBAN TOUR" titleClassName="text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {displayedTours.map((tour) => (
          <TourCard
            key={tour.title}
            id={tour.id}
            title={tour.title}
            departureLocation={tour.departureLocation}
            departureDate={format(tour.availableDates[0].date, 'dd/MM/yyyy')}
            price={tour.ticketTypes[0].price}
            image={tour.featureImage}
          />
        ))}
      </div>
      {hasNextPage && (
        <div className="text-center mt-6">
          <ButtonCustomGreen onClick={() => fetchNextPage()}>
            Load More Tours
          </ButtonCustomGreen>
        </div>
      )}
    </Section>
  )
}
