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
      <Section
        title="Travel Guide"
        titleClassName="text-[#C80D13]"
        className="pt-6"
      >
        <Swiper
          style={{
            width: '100%',
            height: '100%',
          }}
          pagination={pagination}
          className="px-3 md:px-10"
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
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
                description={blog.description}
                title={blog.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  )
}
