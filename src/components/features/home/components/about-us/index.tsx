import { ButtonCustom } from '@/components/shared/buttons'
import { Image } from '@mantine/core'
import { Section } from '../Section'

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
    src: '/images/home/au-3.jpeg',
    alt: 'about-us-4',
  },
]

export const AboutUs = () => {
  return (
    <div className="min-h-[70vh] md:min-h-screen relative bg-[#010b14] py-8">
      <div id="about-us" className="relative -top-[8rem]" />
      <Section title="ABOUT US" className="pb-28">
        <div className="relative flex-responsive gap-8">
          <div className="basis-1/2 text-center flex justify-center h-[80%] relative">
            <div className="absolute -top-5 -left-5 w-1/5 h-[4px] bg-[#FFBF00]" />
            <div className="absolute -top-5 -left-5 w-[4px] h-1/5 bg-[#FFBF00]" />
            <div className="absolute -bottom-5 -right-5 w-1/5 h-[4px] bg-[#FFBF00]" />
            <div className="absolute -bottom-5 -right-5 w-[4px] h-1/5 bg-[#FFBF00]" />

            <Image
              className="md:w-full sm:w-[500px] w-[300px]"
              src={'/images/home/au-main.jpeg'}
              alt="about-us"
            />
          </div>
          <div className="basis-1/2 flex flex-col">
            <h1 className="text-4xl font-bold text-[#FFBF00] capitalize">
              saigon urban tour
            </h1>
            <p className="text-justify text-white text-wrap text-lg mt-5">
              m has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also  text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also 
            </p>
            <ButtonCustom
              variant="transparent"
              className="w-fit mt-5"
              size="lg"
            >
              Learn More
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
