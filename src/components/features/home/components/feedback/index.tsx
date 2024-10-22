import { Image } from '@mantine/core'
import { Section } from '../Section'

// biome-ignore lint/style/useNamingConvention: <explanation>
interface IFeedback {
  image: string
  name: string
  feedback: string
  stars: number // 1-5
}

const feedbacks: IFeedback[] = [
  {
    name: 'Ms.Atinlyn',
    image: '/images/home/fb-1.jpeg',
    feedback:
      'I had a great time with the tour. The guide was very friendly and knowledgeable. I would definitely recommend this tour to anyone who wants to explore Vietnam.',
    stars: 5,
  },
  {
    name: 'Ms.Emily',
    image: '/images/home/fb-2.jpeg',
    feedback:
      'The tour was amazing. The guide was very professional and the itinerary was well-planned. I would love to join another tour with this company in the future.',
    stars: 4,
  },
  {
    name: 'Ms.John',
    image: '/images/home/fb-3.jpeg',
    feedback:
      'I had a great experience with the tour. The guide was very friendly and the food was delicious. I would definitely recommend this tour to anyone who wants to explore Vietnam.',
    stars: 5,
  },
]

export const Feedback = () => {
  return (
    <div id="feedback">
      <Section title="FEEDBACK FROM CUSTOMER" className="pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[150px] lg:gap-y-6 gap-6 p-4">
          {feedbacks.map((fb) => (
            <div
              key={fb.image}
              className="w-full h-fit flex flex-col gap-2 items-center text-white relative"
            >
              <div className="w-full h-[250px] flex justify-center">
                <Image
                  className="w-[80%] h-full object-cover rounded-lg"
                  src={fb.image}
                  alt={fb.image}
                />
              </div>

              <div className="flex flex-col items-center border-r-[3px] pb-1 border-l-[3px] border-white">
                <p className="text-3xl font-bold px-4">{fb.name}</p>
                <p className="text-lg px-4 text-justify">{fb.feedback}</p>

                <div className="flex items-center">
                  {Array.from({ length: fb.stars }).map((_, index) => (
                    <span key={index} className="text-xl text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>

                <Image
                  src="/svgs/fb-bottom.svg"
                  className="absolute bottom-0 translate-y-[95%]"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
