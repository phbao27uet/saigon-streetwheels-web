import { Container } from '@mantine/core'
import Image from 'next/image'

export const PaymentPartner = () => {
  return (
    <div className="bg-white">
      <Container
        size={'xl'}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[100px] py-8"
      >
        <Image src={'/svgs/visa.svg'} alt="visa" width={120} height={120} />
        <Image
          src={'/svgs/mastercard.svg'}
          alt="mastercard"
          width={120}
          height={120}
        />
        <Image
          src={'/images/paypal.png'}
          alt="paypal"
          width={120}
          height={120}
        />
      </Container>
    </div>
  )
}
