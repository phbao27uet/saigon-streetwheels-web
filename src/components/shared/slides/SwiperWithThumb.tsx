'use client'

import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { cn } from '@/libs/utils'
import { Button, Image } from '@mantine/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { ClassNameValue } from 'tailwind-merge'

interface Props {
  images: string[]
  classNameWrapper?: ClassNameValue
  classNameImage?: ClassNameValue
  hideNavigation?: boolean
}

export const SwiperWithThumb = ({
  images,
  classNameWrapper,
  classNameImage,
  hideNavigation,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const thumbsSwiperRef = useRef<SwiperType | null>(null)

  const handlePrevClick = () => {
    if (thumbsSwiperRef.current) {
      thumbsSwiperRef.current.slidePrev()
      mainSwiperRef.current?.slidePrev()
    }
  }

  const handleNextClick = () => {
    if (thumbsSwiperRef.current) {
      thumbsSwiperRef.current.slideNext()
      mainSwiperRef.current?.slideNext()
    }
  }

  return (
    <div className="swiper-container">
      <Swiper
        className="overflow-hidden relative"
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        onSwiper={(swiper) => {
          mainSwiperRef.current = swiper
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={`main-${item}`}>
            <div
              className={cn(
                'relative w-full pt-[100%] rounded-lg overflow-hidden',
                classNameWrapper,
              )}
            >
              <Image
                src={item}
                className={cn(
                  'absolute top-0 left-0 w-full h-full object-cover',
                  classNameImage,
                )}
                alt={`Product image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mt-4">
        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper)
            thumbsSwiperRef.current = swiper
          }}
          loop={true}
          spaceBetween={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="px-12"
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.2,
            },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={`thumb-${item}`}>
              <div className="relative w-full pt-[80%] cursor-pointer rounded-lg overflow-hidden">
                <Image
                  src={item}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {!hideNavigation && (
          <>
            <Button
              onClick={handlePrevClick}
              className="hidden lg:block"
              style={{
                position: 'absolute',
                width: 48,
                height: 48,
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 49,
                transition: 'opacity 0.2s ease-in-out',
                backgroundColor: '#c13331',
                borderRadius: '50%',
              }}
            >
              <IconArrowLeft size={32} className="text-white" />
            </Button>
            <Button
              onClick={handleNextClick}
              className="hidden lg:block"
              style={{
                position: 'absolute',
                width: 48,
                height: 48,
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 49,
                transition: 'opacity 0.2s ease-in-out',
                backgroundColor: '#c13331',
                borderRadius: '50%',
              }}
            >
              <IconArrowRight size={32} className="text-white" />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
