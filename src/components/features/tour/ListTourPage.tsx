'use client'

import { ButtonCustomGreen } from '@/components/shared/buttons'
import { TourCard } from '@/components/shared/cards'
import { Section } from '@/components/shared/layouts'
import { useState } from 'react'

const tours = [
  {
    id: 1,
    image: '/images/home/tour-1.png',
    title: 'Tour Saigon To My Tho',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '12/10/2024',
    price: 60,
  },
  {
    id: 2,
    image: '/images/home/tour-1.png',
    title: 'Cu Chi Tunnels Adventure',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '15/10/2024',
    price: 45,
  },
  {
    id: 3,
    image: '/images/home/tour-1.png',
    title: 'Mekong Delta Exploration',
    departureLocation: 'Can Tho',
    departureDate: '20/10/2024',
    price: 75,
  },
  {
    id: 4,
    image: '/images/home/tour-1.png',
    title: 'Hoi An Ancient Town Tour',
    departureLocation: 'Da Nang',
    departureDate: '25/10/2024',
    price: 55,
  },
  {
    id: 5,
    image: '/images/home/tour-1.png',
    title: 'Ha Long Bay Cruise',
    departureLocation: 'Hanoi',
    departureDate: '01/11/2024',
    price: 120,
  },
  {
    id: 6,
    image: '/images/home/tour-1.png',
    title: 'Sapa Trekking Experience',
    departureLocation: 'Lao Cai',
    departureDate: '05/11/2024',
    price: 90,
  },
  {
    id: 7,
    image: '/images/home/tour-1.png',
    title: 'Hue Imperial City Tour',
    departureLocation: 'Hue',
    departureDate: '10/11/2024',
    price: 50,
  },
  {
    id: 8,
    image: '/images/home/tour-1.png',
    title: 'Phu Quoc Island Getaway',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '15/11/2024',
    price: 150,
  },
  {
    id: 9,
    image: '/images/home/tour-1.png',
    title: 'Nha Trang Beach Retreat',
    departureLocation: 'Nha Trang',
    departureDate: '20/11/2024',
    price: 80,
  },
  {
    id: 10,
    image: '/images/home/tour-1.png',
    title: 'Da Lat Highland Adventure',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '25/11/2024',
    price: 70,
  },
  {
    id: 11,
    image: '/images/home/tour-1.png',
    title: 'Hanoi Old Quarter Walk',
    departureLocation: 'Hanoi',
    departureDate: '01/12/2024',
    price: 40,
  },
  {
    id: 12,
    image: '/images/home/tour-1.png',
    title: 'Mui Ne Sand Dunes Expedition',
    departureLocation: 'Phan Thiet',
    departureDate: '05/12/2024',
    price: 65,
  },
  {
    id: 13,
    image: '/images/home/tour-1.png',
    title: 'Ho Chi Minh City Food Tour',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '10/12/2024',
    price: 55,
  },
  {
    id: 14,
    image: '/images/home/tour-1.png',
    title: 'Phong Nha Cave Exploration',
    departureLocation: 'Dong Hoi',
    departureDate: '15/12/2024',
    price: 85,
  },
  {
    id: 15,
    image: '/images/home/tour-1.png',
    title: 'Ninh Binh Scenic Tour',
    departureLocation: 'Hanoi',
    departureDate: '20/12/2024',
    price: 60,
  },
  {
    id: 16,
    image: '/images/home/tour-1.png',
    title: 'Con Dao Islands Discovery',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '25/12/2024',
    price: 130,
  },
  {
    id: 17,
    image: '/images/home/tour-1.png',
    title: 'Cao Bang Ban Gioc Waterfall Trip',
    departureLocation: 'Hanoi',
    departureDate: '02/01/2025',
    price: 95,
  },
  {
    id: 18,
    image: '/images/home/tour-1.png',
    title: 'Cham Islands Snorkeling Adventure',
    departureLocation: 'Hoi An',
    departureDate: '07/01/2025',
    price: 70,
  },
  {
    id: 19,
    image: '/images/home/tour-1.png',
    title: 'Mai Chau Valley Retreat',
    departureLocation: 'Hanoi',
    departureDate: '12/01/2025',
    price: 55,
  },
  {
    id: 20,
    image: '/images/home/tour-1.png',
    title: 'Halong Bay Kayaking Experience',
    departureLocation: 'Halong City',
    departureDate: '17/01/2025',
    price: 80,
  },
  {
    id: 21,
    image: '/images/home/tour-1.png',
    title: 'Mekong Delta Homestay',
    departureLocation: 'Can Tho',
    departureDate: '22/01/2025',
    price: 65,
  },
  {
    id: 22,
    image: '/images/home/tour-1.png',
    title: 'Sapa Rice Terrace Trekking',
    departureLocation: 'Lao Cai',
    departureDate: '27/01/2025',
    price: 75,
  },
  {
    id: 23,
    image: '/images/home/tour-1.png',
    title: 'Hue Perfume River Cruise',
    departureLocation: 'Hue',
    departureDate: '01/02/2025',
    price: 45,
  },
  {
    id: 24,
    image: '/images/home/tour-1.png',
    title: 'Dalat Countryside Cycling Tour',
    departureLocation: 'Da Lat',
    departureDate: '06/02/2025',
    price: 50,
  },
]

export const ListTourPage = () => {
  const [showAllTours, setShowAllTours] = useState(false)
  const displayedTours = showAllTours ? tours : tours.slice(0, 12)

  return (
    <Section title="OUR TOUR - SAIGON URBAN TOUR" titleClassName="text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {displayedTours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}
      </div>
      {!showAllTours && (
        <div className="text-center mt-6">
          <ButtonCustomGreen onClick={() => setShowAllTours(true)}>
            View All Tours
          </ButtonCustomGreen>
        </div>
      )}
    </Section>
  )
}
