import { TourCard } from '@/components/shared/cards'
import { Section } from '../Section'

const tours = [
  {
    image: '/images/home/tour-1.png',
    title: 'Tour Saigon To My Tho',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '12/10/2024',
    price: 60,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Cu Chi Tunnels Adventure',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '15/10/2024',
    price: 45,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Mekong Delta Exploration',
    departureLocation: 'Can Tho',
    departureDate: '20/10/2024',
    price: 75,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Hoi An Ancient Town Tour',
    departureLocation: 'Da Nang',
    departureDate: '25/10/2024',
    price: 55,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Ha Long Bay Cruise',
    departureLocation: 'Hanoi',
    departureDate: '01/11/2024',
    price: 120,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Sapa Trekking Experience',
    departureLocation: 'Lao Cai',
    departureDate: '05/11/2024',
    price: 90,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Hue Imperial City Tour',
    departureLocation: 'Hue',
    departureDate: '10/11/2024',
    price: 50,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Phu Quoc Island Getaway',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '15/11/2024',
    price: 150,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Nha Trang Beach Retreat',
    departureLocation: 'Nha Trang',
    departureDate: '20/11/2024',
    price: 80,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Da Lat Highland Adventure',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '25/11/2024',
    price: 70,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Hanoi Old Quarter Walk',
    departureLocation: 'Hanoi',
    departureDate: '01/12/2024',
    price: 40,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Mui Ne Sand Dunes Expedition',
    departureLocation: 'Phan Thiet',
    departureDate: '05/12/2024',
    price: 65,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Phong Nha Cave Exploration',
    departureLocation: 'Dong Hoi',
    departureDate: '10/12/2024',
    price: 85,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Ninh Binh Scenic Tour',
    departureLocation: 'Hanoi',
    departureDate: '15/12/2024',
    price: 60,
  },
  {
    image: '/images/home/tour-1.png',
    title: 'Con Dao Islands Discovery',
    departureLocation: 'Ho Chi Minh City',
    departureDate: '20/12/2024',
    price: 180,
  },
]

export const OurTour = () => {
  return (
    <Section title="Our Tours">
      <div id="our-tour" className="relative -top-[12rem]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {tours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}
      </div>
    </Section>
  )
}
