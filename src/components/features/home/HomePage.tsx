import { Suspense } from 'react'
import {
  AboutUs,
  AlbumTour,
  Feedback,
  HereSection,
  OurTour,
  TourismNews,
} from './components'

export const HomePage = () => {
  return (
    <div className="flex flex-col bg-black">
      <HereSection />
      <AboutUs />
      <OurTour />
      <AlbumTour />
      <Feedback />

      <Suspense fallback={<div>Loading...</div>}>
        <TourismNews />
      </Suspense>
    </div>
  )
}
