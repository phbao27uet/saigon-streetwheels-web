'use client'

import {
  FeedbackAPIQueryKey,
  getListFeedback,
} from '@/components/features/admin'
import { Section } from '@/components/shared/layouts'
import type { DataPagination, IFeedback } from '@/libs/types'
import { Image } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

import { Swiper } from '@/components/shared/slides'
import { SwiperSlide } from 'swiper/react'
import type { PaginationOptions } from 'swiper/types'

export const Feedback = () => {
  const { data: fbs, isLoading } = useQuery<DataPagination<IFeedback[]>>({
    queryKey: [FeedbackAPIQueryKey.GET_FEEDBACKS],
    queryFn: getListFeedback,
  })

  const pagination: PaginationOptions = {
    clickable: true,
  }

  if (isLoading) return null

  return (
    <div id="feedback">
      <Section title="FEEDBACK FROM CUSTOMER" className="pb-28">
        <Swiper
          style={{
            width: '100%',
            height: '100%',
          }}
          pagination={pagination}
          className="p-3 md:p-10"
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
          }}
        >
          {fbs?.data?.map((fb, index) => (
            <SwiperSlide key={fb.id} className="h-full ">
              <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="w-full h-fit flex flex-col gap-2 items-center relative"
            >
              <div className="w-full max-w-[300px] h-[250px]">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={fb.image}
                  alt={fb.image}
                />
              </div>

              <div className="flex flex-col gap-2 items-start justify-start">
                <p className="text-2xl font-bold text-[#C13332]">{fb.name}</p>
                <div className="flex items-center">
                  {Array.from({ length: fb.star }).map((_, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <span key={index} className="text-xl text-[#E7B00D]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg leading-[25px] text-left">
                  {fb.content}
                </p>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  )
}
