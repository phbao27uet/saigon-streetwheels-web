import { AboutUs, HereSection } from './components'

export const HomePage = () => {
  return (
    <div className="flex flex-col bg-white">
      <HereSection />
      <AboutUs />
    </div>
  )
}
