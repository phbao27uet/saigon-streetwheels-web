import { AboutUs, AlbumTour, HereSection, OurTour } from './components'

export const HomePage = () => {
  return (
    <div className="flex flex-col bg-black">
      <HereSection />
      <AboutUs />
      <OurTour />
      <AlbumTour />
    </div>
  )
}
