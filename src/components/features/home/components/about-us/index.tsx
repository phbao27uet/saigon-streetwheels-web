import { ButtonCustom } from '@/components/shared/buttons'
import { Image } from '@mantine/core'
import { Container } from '@mantine/core'

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
]

export const AboutUs = () => {
  return (
    <div className="min-h-[70vh] md:min-h-screen relative bg-[url('/images/home/about-us.webp')] bg-cover bg-center py-8">
      <Container size="md" className="relative flex-responsive gap-8">
        <div className="basis-1/2 py-5 text-center flex justify-center">
          <Image
            className="rounded-lg md:w-full sm:w-[500px] w-[300px]"
            src={'/images/home/au-main.jpeg'}
            alt="about-us"
          />
        </div>
        <div className="basis-1/2 flex flex-col">
          <h3 className="text-2xl font-semibold uppercase text-white">
            about us
          </h3>
          <h1 className="text-4xl font-bold text-[#FF850C] capitalize mt-2">
            saigon urban tour
          </h1>
          <p className="text-justify text-white text-wrap text-lg mt-5">
            m has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also  text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also 
          </p>
          <ButtonCustom className="w-fit mt-5" size="lg">
            Learn More
          </ButtonCustom>
        </div>

        <div className="md:absolute bottom-0 right-0 md:translate-y-2/4 flex md:justify-end gap-5">
          {IMAGES.map((image) => (
            <AboutUsImage key={image.alt} {...image} />
          ))}
        </div>
      </Container>
    </div>
  )
}

const AboutUsImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="h-[150px] w-[300px] basis-1/3 md:basis-1/4 ">
      <Image className="block rounded-lg h-full w-full" src={src} alt={alt} />
    </div>
  )
}
