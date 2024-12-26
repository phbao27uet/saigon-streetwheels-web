import { Suspense } from 'react'
import {
  AboutUs,
  Feedback,
  HereSection,
  OurMoment,
  OurTour,
  OutstandingTour,
  TourismNews,
} from './components'

export const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#f5f2f1]">
      <HereSection />
      <AboutUs />
      <OutstandingTour />
      <OurTour />
      {/* <AlbumTour /> */}
      <OurMoment />
      <Feedback />

      {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
      <Suspense fallback={<> </>}>
        <TourismNews />
      </Suspense>
    </div>
  )
}
