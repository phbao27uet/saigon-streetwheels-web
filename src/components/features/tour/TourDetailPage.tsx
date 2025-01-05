'use client'

import { ButtonCustomGreen } from '@/components/shared/buttons'
import { SwiperWithThumb } from '@/components/shared/slides'
import { zodResolver } from '@hookform/resolvers/zod'
import { Image, Modal } from '@mantine/core'
import { Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FormProvider, useForm } from 'react-hook-form'
import { SelectTour } from './components'
import { useGetDetailTour } from './hooks'
import { type TourSchema, tourSchema } from './schemas'

export const TourDetailPage = ({ id }: { id: string }) => {
  const { data } = useGetDetailTour(id)

  const [opened, { open, close }] = useDisclosure(false)

  const methods = useForm<TourSchema>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      ticketTypes: data.ticketTypes.map((ticketType) => ({
        ...ticketType,
        quantity: 0,
      })),
    },
  })

  return (
    <FormProvider {...methods}>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="1000px"
        centered
      >
        <SelectTour data={data} onClose={close} />
      </Modal>

      <Container
        size={'xl'}
        className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4 py-8 md:py-16"
      >
        <div className="w-full max-w-[600px] mx-auto lg:max-w-none">
          <SwiperWithThumb images={data.images} hideNavigation />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
          <div className="flex flex-col gap-2 shadow-[21px_59px_30px_0px_#00000040] bg-white p-4 md:p-8 rounded-lg">
            <p className="text-lg md:text-xl">Price</p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <del className="text-2xl md:text-3xl">
                  {data.ticketTypes[0].price * 1.5} USD
                </del>
                <p className="text-2xl md:text-3xl font-bold text-red-500">
                  {data.ticketTypes[0].price} USD
                </p>
              </div>

              <ButtonCustomGreen
                size="lg"
                className="w-full sm:w-auto"
                onClick={open}
              >
                Check Availability
              </ButtonCustomGreen>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              {[1, 2, 3].map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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

            <p className="text-base md:text-xl mt-4">{data.description}</p>
          </div>
        </div>
      </Container>
    </FormProvider>
  )
}
