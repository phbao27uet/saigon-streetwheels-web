'use client'
import { ButtonCustom } from '@/components/shared'
import { Section } from '@/components/shared/layouts'
import { Image } from '@mantine/core'
import { useState } from 'react'

const IMAGES = [
  {
    src: '/images/home/au-1.jpeg',
    alt: 'about-us-1',
  },
  {
    src: '/images/home/au-2.jpeg',
    alt: 'about-us-2',
  },
  {
    src: '/images/home/au-3.jpeg',
    alt: 'about-us-3',
  },
  {
    src: '/images/home/au-4.jpeg',
    alt: 'about-us-4',
  },
]

export const AboutUs = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-[70vh] md:min-h-screen relative bg-[#f5f2f1] py-8">
      <div id="about-us" className="relative -top-[8rem]" />
      <Section title="ABOUT US" className="pb-28">
        <div className="relative flex-responsive gap-8">
          <div className="basis-1/2 w-fit self-center">
            <Image
              className="md:w-full sm:w-[500px] w-[300px]"
              src={'/images/home/au-main.jpeg'}
              alt="about-us"
            />
          </div>
          <div className="basis-1/2 flex flex-col">
            <h1 className="text-4xl font-bold text-[#C13332] capitalize">
              saigon urban tour
            </h1>
            <div className="mt-4">
              <p>
                Welcome to Vietnam! We are Saigon Urban Tour (SUT)—a team of
                three founders, all born and raised in the vibrant city of
                Saigon. After years of working as tour guides and operators for
                various companies, we decided to create something new—a fresh,
                innovative way to showcase the city we love and call home. With
                a deep understanding of Saigon’s cuisine and streets, we at SUT
                are dedicated to providing you, our guests, with a journey that
                is safe, enriching, and full of joy.
              </p>
              <p>
                Our team of passionate guides is equipped with excellent
                communication skills in foreign languages and expert motorbike
                handling, refined through years of navigating the bustling
                streets of major cities. We are committed to ensuring your
                safety and delight as we guide you through the vibrant streets
                and hidden gems of Saigon.
              </p>
              <p>
                Our Vision
                <br />
                We aspire to become a leading motorbike tour provider, embodying
                the friendly and welcoming spirit of Saigon while promoting
                safe, sustainable, and authentic travel experiences.
              </p>
              {!showMore && <span>...</span>}
              {showMore && (
                <>
                  <p>
                    The Story Behind Saigon Urban Tour
                    <br />
                    The name Saigon Urban Tour reflects our deep connection to
                    the heart and soul of this city. "Urban" encapsulates the
                    dynamic energy of Saigon, where modernity and tradition
                    intertwine seamlessly. Our tours highlight the charm of
                    daily life—whether it’s the aroma of fresh street food
                    wafting through an alley, the hum of motorbikes weaving
                    through the streets, or the genuine smiles of locals
                    greeting one another.
                  </p>

                  <p>
                    The name Saigon Urban Tour reflects our deep connection to
                    the heart and soul of this city. "Urban" encapsulates the
                    dynamic energy of Saigon, where modernity and tradition
                    intertwine seamlessly. Our tours highlight the charm of
                    daily life—whether it’s the aroma of fresh street food
                    wafting through an alley, the hum of motorbikes weaving
                    through the streets, or the genuine smiles of locals
                    greeting one another.
                  </p>

                  <p>
                    Join us at Saigon Urban Tour, where every journey is a story
                    waiting to be shared. Together, let’s uncover the charm and
                    beauty of this incredible city!
                  </p>
                </>
              )}
            </div>

            <ButtonCustom
              className="w-fit mt-5"
              size="lg"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Learn More'}
            </ButtonCustom>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {IMAGES.map((image) => (
            <AboutUsImage key={image.alt} {...image} />
          ))}
        </div>
      </Section>
    </div>
  )
}

const AboutUsImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="h-[150px]">
      <Image className="block rounded-lg h-full w-full" src={src} alt={alt} />
    </div>
  )
}
