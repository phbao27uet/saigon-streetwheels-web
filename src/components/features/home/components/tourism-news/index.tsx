'use client'

import { Section } from '@/components/shared/layouts'
import { Swiper } from '@/components/shared/slides'
import { SwiperSlide } from 'swiper/react'
import type { PaginationOptions } from 'swiper/types'
import { useGetBlog } from '../../hooks'
import { LatestNewsCard } from './components'

export const TourismNews = () => {
  const { data: blogs } = useGetBlog()

  const pagination: PaginationOptions = {
    clickable: true,
  }

  return (
    <div className="bg-white">
      <div id="tourism-news" className="relative -top-[8rem]" />
      <Section title="TOURISM NEWS" titleClassName="text-[#C80D13]">
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
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {blogs.data?.map((blog) => (
            <SwiperSlide key={blog.id} className="h-full ">
              <LatestNewsCard
                id={blog.id}
                image={blog.featureImage}
                date={blog.createdAt}
                title={blog.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  )
}
