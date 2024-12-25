import { Section } from '@/components/shared/layouts'
import { Image } from '@mantine/core'

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
  {
    name: 'Ms.Xs',
    image: '/images/home/fb-4.jpeg',
    feedback:
      'I had a great experience with the tour. The guide was very friendly and the food was delicious. I would definitely recommend this tour to anyone who wants to explore Vietnam.',
    stars: 4,
  },
]

export const Feedback = () => {
  return (
    <div id="feedback">
      <Section title="FEEDBACK FROM CUSTOMER" className="pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[150px] lg:gap-y-[100px] gap-6 p-4">
          {feedbacks.map((fb, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="w-full h-fit flex flex-col gap-2 items-center relative"
            >
              <div className="w-full max-w-[300px] h-[250px]">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={fb.image}
                  alt={fb.image}
                />
              </div>

              <div className="flex flex-col gap-2 items-start justify-start">
                <p className="text-2xl font-bold text-[#C13332]">{fb.name}</p>
                <div className="flex items-center">
                  {Array.from({ length: fb.stars }).map((_, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <span key={index} className="text-xl text-[#EBF218]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg">{fb.feedback}</p>

                

                {/* <Image
                  src="/svgs/fb-bottom.svg"
                  className="absolute bottom-0 translate-y-[95%]"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
