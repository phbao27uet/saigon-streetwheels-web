import { ButtonCustom } from '@/components/shared'
import { Section } from '@/components/shared/layouts'
import { Image } from '@mantine/core'

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
  return (
    <div className="min-h-[70vh] md:min-h-screen relative bg-[#f6f6f6] py-8">
      <div id="about-us" className="relative -top-[8rem]" />
      <Section title="ABOUT US" className="pb-28">
        <div className="relative flex-responsive gap-8">
          <div className="basis-1/2 text-center flex justify-center h-[80%] w-fit self-center relative px-8">
            {/* <div className="absolute -top-5 left-3 w-1/5 h-[4px] bg-[#FFBF00]" />
            <div className="absolute -top-5 left-3 w-[4px] h-1/5 bg-[#FFBF00]" />
            <div className="absolute -bottom-5 right-3 w-1/5 h-[4px] bg-[#FFBF00]" />
            <div className="absolute -bottom-5 right-3 w-[4px] h-1/5 bg-[#FFBF00]" /> */}

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
            <p className="text-justify text-wrap text-lg mt-5">
              Welcome to Vietnam! We are Saigon Urban Tour (SUT)—a team of three
              founders, all born and raised in the vibrant city of Saigon. After
              years of working as tour guides and operators for various
              companies, we decided to create something new—a fresh, innovative
              way to showcase the city we love and call home. With a deep
              understanding of Saigon’s cuisine and streets, we at SUT are
              dedicated to providing you, our guests, with a journey that is
              safe, enriching, and full of joy. Founded in January 2025 by three
              young Saigonese, SUT is the result of years of studying, working,
              and interning in the tourism industry. Our mission is to deliver
              authentic cultural experiences to international travelers,
              connecting them with the heart of Vietnam and the soul of Saigon.
              Our team of passionate guides is equipped with excellent
              communication skills in foreign languages and expert motorbike
              handling, refined through years of navigating the bustling streets
              of major cities. We are committed to ensuring your safety and
              delight as we guide you through the vibrant streets and hidden
              gems of Saigon. Our Vision We aspire to become a leading motorbike
              tour provider, embodying the friendly and welcoming spirit of
              Saigon while promoting safe, sustainable, and authentic travel
              experiences. The Story Behind Saigon Urban Tour The name Saigon
              Urban Tour reflects our deep connection to the heart and soul of
              this city. "Urban" encapsulates the dynamic energy of Saigon,
              where modernity and tradition intertwine seamlessly. Our tours
              highlight the charm of daily life—whether it’s the aroma of fresh
              street food wafting through an alley, the hum of motorbikes
              weaving through the streets, or the genuine smiles of locals
              greeting one another. At SUT, we believe in the power of
              connection. Our tours aren’t just about the landmarks; they’re
              about the people, stories, and experiences that make Saigon truly
              special. Whether it’s sharing a bowl of steaming noodles at a
              roadside stall, hearing the laughter of children playing in a
              small alley, or exchanging smiles with locals, we aim to bring you
              closer to the heart of Saigon’s culture and community. Join us at
              Saigon Urban Tour, where every journey is a story waiting to be
              shared. Together, let’s uncover the charm and beauty of this
              incredible city!
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
