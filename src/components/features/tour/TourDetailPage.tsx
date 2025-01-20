'use client'

import { ButtonCustomGreen } from '@/components/shared/buttons'
import { SwiperWithThumb } from '@/components/shared/slides'
import { cn, convertMinutesToDayHourMinute } from '@/libs/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Image, Modal } from '@mantine/core'
import { Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FormProvider, useForm } from 'react-hook-form'
import { PaymentPartner, SelectTour } from './components'
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
              {data?.shortDescription.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index} className="flex gap-2 items-center">
                  <Image
                    src="/svgs/checked.svg"
                    alt="checked"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-20">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl text-[#1B7C8B] font-bold uppercase">
                About this tour
              </h2>
              <div className="w-full max-w-[300px] h-[1px] bg-black" />
            </div>

            <p className="text-base md:text-xl mt-4">{data.description}</p>
          </div>

          <div className="flex items-start gap-2 bg-white p-4 w-full md:max-w-[300px]">
            <Image src="/svgs/pin.svg" alt="pin" width={28} height={28} />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Departures from:</p>
              <p className="text-base">{data.departureLocation}</p>
            </div>
          </div>

          {data.duration ? (
            <div className="flex items-start gap-2 bg-white p-4 w-full md:max-w-[300px]">
              <Image src="/svgs/clock.svg" alt="clock" width={28} height={28} />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Duration:</p>
                <p className="text-base">
                  {convertMinutesToDayHourMinute(data.duration)}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </Container>

      <Container size={'xl'}>
        {data.information && (
          <div className="mt-8 md:mt-20">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl text-[#C13332] font-bold uppercase md:min-w-[270px]">
                More information
              </h2>
              <div className="w-full h-[1px] bg-black" />
            </div>

            <p
              className="text-base md:text-xl mt-4"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: data.information }}
            />
          </div>
        )}

        {data.emoji && (
          <div className="my-8 md:my-20 bg-white p-2 md:p-8 border-red-600 border-2">
            <p
              className={cn(
                'overflow-x-auto',
                '[&_tr:first-of-type]:uppercase [&_tr:first-of-type]:font-bold [&_tr:first-of-type]:text-[#C13332]',
                '[&_tr:first-of-type_td]:after:mt-2 [&_tr:first-of-type_td]:after:border-b [&_tr:first-of-type_td]:after:border-[#EDE7E7] [&_tr:first-of-type_td]:after:content-[""] [&_tr:first-of-type_td]:after:w-full [&_tr:first-of-type_td]:after:block',
                '[&_tr_td]:text-start [&_tr:first-of-type_td]:py-2',
                '[&_tr:nth-of-type(2)_td]:align-top [&_tr:nth-of-type(2)_td]:pt-2',
                '[&_tr:nth-of-type(2)_td_p]:leading-10',
                '[&_tr_td]:p-5 [&_tr_td]:min-w-[300px]',
              )}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: data.emoji }}
            />
          </div>
        )}
      </Container>

      <PaymentPartner />
    </FormProvider>
  )
}
