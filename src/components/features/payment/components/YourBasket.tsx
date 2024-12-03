import { useTourBooking } from '../../tour/hooks'

export const YourBasket = () => {
  const { booking } = useTourBooking()
  return (
    <div>
      <div className="uppercase text-2xl font-bold py-4 bg-[#C80D13]">
        Your basket
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p>Image</p>
        <p>Tour name</p>
        <p>Tour date</p>
        <p>Tour time</p>
        <p>Tour price</p>
      </div>
    </div>
  )
}
