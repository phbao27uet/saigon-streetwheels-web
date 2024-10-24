'use client'

import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { Image } from '@mantine/core'
import { Navigation, Thumbs } from 'swiper/modules'

interface Props {
  images: string[]
}
export const SwiperWithThumb = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="swiper-container">
      <Swiper
        className="overflow-hidden relative"
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={`main-${item}`}>
            <div className="relative w-full pt-[100%] rounded-lg overflow-hidden">
              <Image
                src={item}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={`Product image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mt-4"
      >
        {images.map((item, index) => (
          <SwiperSlide key={`thumb-${item}`}>
            <div className="relative w-full pt-[100%] cursor-pointer rounded-lg overflow-hidden">
              <Image
                src={item}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
