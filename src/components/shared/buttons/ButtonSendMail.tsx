import Image from 'next/image'

export const ButtonSendMail = () => {
  const handleSendMail = () => {
    const email = 'saigonurbantours@gmail.com'
    const subject = 'Booking Tours'
    const body = `Dear Saigon Urban Tours,

My name is [Your Name]. I'm from [Your country] and I am writing this email on behalf of a group of over 15 people who are interested in booking a tour with your company.
My email address:
My phone number:

We would like to get more information about the available options for group tours, including:

Destinations and itineraries
Pricing for group bookings
Available dates
Additional services (e.g., transportation, meals, and accommodation)
Additionally, please let us know if there are any discounts or special packages for groups of our size. You can reach me at [Your WhatsApp Number] for further discussions.

We look forward to your response and are excited to plan this trip with your company.

Best regards,
[Your Name]`
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank')
  }

  return (
    <button
      type="button"
      onClick={handleSendMail}
      className="flex md:flex-row flex-col justify-between items-center w-fit gap-4 border border-black px-4 py-2 rounded cursor-pointer"
    >
      <p className="text-[#1B7C8B] font-bold text-left">
        For groups of over 15 guests, please email to receive preferential
        prices
      </p>
      <div className="border border-black rounded-md px-3 py-1">
        <Image src="/images/email.png" alt="mail" width={100} height={30} />
      </div>
    </button>
  )
}
