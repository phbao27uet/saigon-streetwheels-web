import { ButtonCustomGreen } from '@/components/shared/buttons'
import { SwiperWithThumb } from '@/components/shared/slides'
import { Image } from '@mantine/core'
import { Container } from '@mantine/core'

const images = [
  '/images/home/tour-1.png',
  '/images/home/tn-2.png',
  '/images/home/tn-3.png',
  '/images/introduction/i-1.jpeg',
  '/images/introduction/i-2.jpeg',
  '/images/introduction/i-3.jpeg',
  '/images/introduction/i-4.jpeg',
]

export const TourDetailPage = () => {
  return (
    <Container
      size={'xl'}
      className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4 py-8 md:py-16"
    >
      <div className="w-full max-w-[600px] mx-auto lg:max-w-none">
        <SwiperWithThumb images={images} />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl md:text-3xl font-bold">
          TOUR FROM SAIGON TO MY THO
        </h1>
        <div className="flex flex-col gap-2 shadow-[21px_59px_30px_0px_#00000040] bg-white p-4 md:p-8 rounded-lg">
          <p className="text-lg md:text-xl">Price</p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <del className="text-2xl md:text-3xl">450.00 USD</del>
              <p className="text-2xl md:text-3xl font-bold text-red-500">
                300.00 USD
              </p>
            </div>

            <ButtonCustomGreen size="lg" className="w-full sm:w-auto">
              Check Availability
            </ButtonCustomGreen>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Image
                  src="/svgs/checked.svg"
                  alt="checked"
                  width={20}
                  height={20}
                />
                <p className="text-sm md:text-base">
                  20 stops near popular attractions & places
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-20">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl">About this tour</h2>
            <div className="w-full max-w-[300px] h-[1px] bg-black" />
          </div>

          <p className="text-base md:text-xl mt-4">
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised but also the leap into electronic
            typesetting, remaining essentially unchanged
          </p>
        </div>
      </div>
    </Container>
  )
}
