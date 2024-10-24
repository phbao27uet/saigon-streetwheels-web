'use client'

import type React from 'react'
import { useRef, useState } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Button, Image } from '@mantine/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

SwiperCore.use([Autoplay, Navigation])

const DATA = [
  {
    image: '/images/introduction/i-1.jpeg',
    title: 'he led 3 groups of guests to Saigon',
  },
  {
    image: '/images/introduction/i-2.jpeg',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
  {
    image: '/images/introduction/i-3.jpeg',
    title: 'Paradoxes of Animal By-Products Transport',
  },
  {
    image: '/images/introduction/i-4.jpeg',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
  {
    image: '/images/introduction/i-1.jpeg',
    title: 'Category 3 Animal By-Products: What You Need to Know',
  },
  {
    image: '/images/introduction/i-2.jpeg',
    title: 'Exploring Hidden Gems in Saigon',
  },
  {
    image: '/images/introduction/i-3.jpeg',
    title: 'Top 10 Street Foods You Must Try in Vietnam',
  },
  {
    image: '/images/introduction/i-4.jpeg',
    title: 'Eco-Tourism: Sustainable Travel in Vietnam',
  },
]

export interface SwiperProps {
  defaultActiveSlide?: number
  onBackgroundChange?: (newImageUrl: string) => void
}

const SliderCustom: React.FC<SwiperProps> = ({
  defaultActiveSlide,
  onBackgroundChange,
  ...props
}) => {
  const swiperRef = useRef<SwiperCore>()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0) // New state for active index

  return (
    <div>
      <ReactSwiper
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
        }}
        grabCursor
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiperRef.current = swiper
            if (defaultActiveSlide) {
              swiper.slideTo(defaultActiveSlide)
            }
          }
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
          setActiveIndex(swiper.realIndex) // Update active index

          if (onBackgroundChange) {
            onBackgroundChange(DATA[swiper.realIndex].image)
          }
        }}
        {...props}
      >
        {DATA.map((item) => (
          <SwiperSlide
            key={item.title}
            className="rounded-[20px] overflow-hidden"
          >
            <div className="h-[300px] w-auto">
              <Image alt={item.title} src={item.image} />
            </div>
          </SwiperSlide>
        ))}
      </ReactSwiper>

      <div className="flex flex-row justify-between items-center gap-5 mt-4">
        <div className="flex items-center gap-4">
          <Button
            variant="transparent"
            onClick={() => swiperRef.current?.slidePrev()}
            style={{
              width: 48,
              height: 48,
              zIndex: 49,
              opacity: 1,
              transition: 'opacity 0.2s ease-in-out',
              cursor: isBeginning ? 'not-allowed !important' : 'pointer',
              border: '1px solid #fff',
              borderRadius: '50%',
            }}
          >
            <IconArrowLeft size={32} className="text-white" />
          </Button>
          <Button
            variant="transparent"
            onClick={() => swiperRef.current?.slideNext()}
            style={{
              width: 48,
              height: 48,
              zIndex: 49,
              opacity: 1,
              transition: 'opacity 0.2s ease-in-out',
              cursor: isEnd ? 'not-allowed !important' : 'pointer',
              border: '1px solid #fff',
              borderRadius: '50%',
            }}
          >
            <IconArrowRight size={32} className="text-white" />
          </Button>
        </div>

        <div className="w-full sm:w-1/2 md:w-2/3 h-[1px] bg-white my-4 sm:my-0" />

        <p className="text-white text-4xl sm:text-5xl md:text-6xl font-bold w-[70px]">
          {(activeIndex + 1).toString().padStart(2, '0')}
        </p>
      </div>
    </div>
  )
}

export { SliderCustom }
