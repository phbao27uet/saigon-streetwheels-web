import { Suspense } from 'react'
import {
  AboutUs,
  Feedback,
  HereSection,
  OurTour,
  OutstandingTour,
  TourismNews,
} from './components'

export const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#f6f6f6]">
      <HereSection />
      <AboutUs />
      <OutstandingTour />
      <OurTour />
      {/* <AlbumTour /> */}
      <Feedback />

      {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
      <Suspense fallback={<> </>}>
        <TourismNews />
      </Suspense>
    </div>
  )
}
