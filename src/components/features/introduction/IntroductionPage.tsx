'use client'

import SkewButton from '@/components/shared/buttons/SkewButton'
import { Container, Image } from '@mantine/core'
import Link from 'next/link'
import { useState } from 'react'
import { SliderCustom } from './components'

export const IntroductionPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    '/images/introduction/i-1.jpeg',
  )

  const handleBackgroundChange = (newImageUrl: string) => {
    setBackgroundImage(newImageUrl)
  }

  return (
    <div
      className="min-h-screen relative bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-20 mix-blend-multiply" />

      <Container
        size={1800}
        className="flex flex-col md:flex-row gap-10 py-5 min-h-screen"
      >
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start z-10">
          <Link href="/home">
            <div className="w-full h-full max-w-[200px] max-h-[200px]">
              <Image
                src="/images/logo.jpg"
                alt="logo"
                className="h-full w-full rounded-[100px]"
              />
            </div>
          </Link>

          <div className="flex flex-col gap-4 mt-10 md:mt-20 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              SAIGON URBAN TOUR
            </h1>
            <p className="text-white text-sm md:text-base">
               a type specimen book. It has survived not only five centuries,
              but also the leap electronic tktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum but also the leap
              electronic tktop publishing software like Aldus Page.
            </p>

            <Link
              href="/home"
              prefetch
              className="mt-6 md:mt-10 self-center md:self-start"
            >
              <SkewButton>Start Exploring</SkewButton>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col z-10 self-center md:self-end mt-10 md:mt-0">
          <SliderCustom onBackgroundChange={handleBackgroundChange} />
        </div>
      </Container>
    </div>
  )
}
