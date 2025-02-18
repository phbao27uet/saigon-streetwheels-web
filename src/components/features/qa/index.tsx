'use client'

import { Section } from '@/components/shared'
import type { DataPagination, IQA } from '@/libs/types'
import { Accordion } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { QAAPIQueryKey, getListQA } from '../admin/quan-ly-qa'

const DATA = [
  {
    title: 'Do I drive my own motorbike on the tour?',
    content: `No, our guests do not self-drive during the tour. Each guest rides as a passenger behind one of our skilled driver-guides. For safety and insurance reasons, guests are not allowed to operate motorbikes.
    Sitting as a passenger allows you to enjoy the sights stress-free while ensuring your safety. Plus, all of our tour guides are licensed professionals with excellent driving experience!`,
  },
  {
    title: 'Do you provide raincoats for guests in case of rain?',
    content: `No need to worry- your safety and comfort are our top.
    <b>Rain Protection:</b> We always carry raincoats for both guests and drivers to keep everyone dry.
    <b>Safe Driving:</b> Our drivers are well-trained to ride safely in wet conditions, taking extra care on slippery roads.
    <b>Flexible Plans:</b> If the rain becomes too heavy, we’ll pause the tour at a nearby shelter until it’s safe to continue.
    <b>Adventure Spirit:</b> A little rain can add to the fun and make the experience even more memorable!`,
  },
  {
    title: 'Do you offer tours in languages other than English?',
    content:
      'Our tours are primarily offered in English, but we also offer the option to book a Chinese (Mandarin) or Korean translator for our tours. This service is available for an additional fee if you book for a minimum of 4 people or opt for a Private tour (minimum 2 people). A 24-hour notice is required to arrange for a Chinese or Korean translator.',
  },
  {
    title: 'Are there any age or weight restrictions for the tour?',
    content:
      'There are no specific age restrictions for the tour, but participants should be able to comfortably sit on a motorbike and follow the guide. For safety reasons, we recommend that children under 12 do not participate unless accompanied by a responsible adult. In terms of weight, we suggest that guests should not exceed 100 kg (220 lbs) to ensure the motorbike remains balanced and safe. Please let us know if you have any concerns, and we’ll be happy to accommodate your needs.',
  },
  {
    title: 'Can I take pictures or videos during the tour?',
    content:
      'Yes, you are welcome to take pictures and videos during the tour! We encourage you to capture the beautiful sights and memorable moments. Just be sure to do so safely, especially while riding, and follow the guide’s instructions to ensure everyone’s safety. If you need help with taking photos or want to stop for a picture, feel free to let the guide know!',
  },
  {
    title: 'Are the bikes provided safe and well-maintained?',
    content:
      'Yes, all of our bikes are carefully maintained and regularly checked to ensure they are in excellent condition. We prioritize safety, so each bike undergoes routine inspections to meet the highest safety standards. Our experienced drivers also perform pre-ride checks to ensure everything is working properly before the tour starts. Your safety is our top priority!',
  },
  {
    title:
      'Is there a backup vehicle in case something goes wrong with the motorbike?',
    content:
      'Yes, we have a backup vehicle on standby in case of any issues with the motorbike during the tour. If a motorbike encounters any problems, the backup vehicle will be available to assist, ensuring that your tour experience remains smooth and uninterrupted. Your safety and comfort are always our priority.',
  },
  {
    title: 'What should I wear for the tour?',
    content: `For the tour, we recommend wearing comfortable, weather-appropriate clothing. Here are some suggestions:
      <b>Comfortable clothes:</b> Lightweight and breathable clothing that allow you to move freely.
      <b>Closed-toe shoes:</b> Sneakers or sturdy shoes are ideal for safety and comfort.
      `,
  },
  {
    title: 'Will I have an English-speaking guide?',
    content:
      'Yes, all of our tours are led by English-speaking guides who are knowledgeable and experienced. They will ensure you have a great experience, providing insights into the local culture, history, and attractions. If you need a guide who speaks a different language, we can arrange that in advance—just let us know when booking.',
  },
  {
    title:
      'Can the tour accommodate special dietary requirements (vegetarian, gluten-free, etc.)?',
    content:
      'Yes, our tour can accommodate special dietary requirements such as vegetarian, gluten-free, and other dietary preferences. Please let us know in advance when booking so we can make the necessary arrangements with our food providers to ensure you have an enjoyable and safe dining experience during the tour. Your comfort and satisfaction are important to us.',
  },
  {
    title: 'Are the restaurants or food stalls safe and clean?',
    content:
      'We carefully select restaurants and food stalls that meet high standards of cleanliness and safety. We prioritize your health and ensure that all the food vendors we partner with maintain proper hygiene practices. You can enjoy the local cuisine with peace of mind, knowing that the food is prepared in clean and safe environments.',
  },
  {
    title: 'How long will we spend at each food stop?',
    content:
      "The amount of time spent at each food stop will vary depending on the location and the experience, but typically, we spend around 20-30 minutes at each stop. This allows you enough time to enjoy the food, ask questions, and explore the surroundings. If you'd like more time at a particular stop, feel free to let the guide know, and we can adjust the schedule accordingly.",
  },
  {
    title:
      'Will the guide explain the history or cultural significance of the food?',
    content:
      "Our guide will provide insights into the history and cultural significance of the food at each stop. They will share interesting stories about the dishes, their origins, and how they fit into the local culture, giving you a deeper appreciation of the flavors and traditions. It's a great way to connect with the local culture while enjoying delicious food.",
  },
  {
    title: 'What happens if I need to cancel my tour or change the date?',
    content:
      "If you need to cancel or change the date of your tour, please contact us as soon as possible. Our cancellation policy may vary, but generally, we require at least 24-48 hours' notice for cancellations or changes. Depending on the timing, a refund or rescheduling option may be available. For specific details, please refer to our terms and conditions or get in touch with our customer service team for assistance.",
  },
  {
    title: 'Can we choose what to eat, or is the menu fixed?',
    content:
      'The menu for our tours is typically fixed to give you a curated experience of local dishes. However, if you have specific preferences or dietary restrictions, please let us know in advance, and we will do our best to accommodate your needs. While the majority of the dishes are pre-selected, we aim to provide a variety of options to suit different tastes!',
  },
  {
    title: 'What if I don’t like a certain dish or can’t eat it?',
    content:
      "If there's a dish you don't like or can't eat due to dietary restrictions or allergies, please let the guide know in advance. We will do our best to accommodate your needs by offering an alternative or finding a substitute. Your comfort and enjoyment are our priority, so don’t hesitate to inform us if there’s something you can’t eat.",
  },
  {
    title: 'How much food is provided? Will I leave feeling full?',
    content:
      "The amount of food provided during the tour is typically designed to give you a full and satisfying experience. You'll be able to try a variety of local dishes at each stop, offering a generous portion that will leave you feeling satisfied. While it may not be a full-course meal at every stop, the total amount of food over the course of the tour is usually enough to leave you full. If you have specific hunger concerns or dietary needs, feel free to let us know, and we can adjust accordingly.",
  },
  {
    title: 'Can I bring my luggage or backpack on the bike?',
    content:
      "Yes, you can bring a small backpack or personal items with you on the bike. Our drivers can securely store your belongings in the provided space on the motorbike. However, for safety and comfort, we recommend keeping the luggage to a manageable size. If you have large bags or heavy luggage, it's best to arrange for alternative storage or transport in advance.",
  },
  {
    title: 'Can I ride my own motorbike instead of being a passenger?',
    content:
      'For safety reasons, our tours are designed with guests riding as passengers behind our experienced drivers. Our liability insurance does not cover guests who drive their own motorbikes. However, we ensure that riding as a passenger is a comfortable and enjoyable experience, allowing you to fully relax and enjoy the sights while being in the care of a professional guide.',
  },
  {
    title: 'Can I bring my own helmet or do you provide one?',
    content:
      'You are welcome to bring your own helmet if you prefer, but we also provide high-quality helmets for all guests. Our helmets are regularly cleaned and checked for safety to ensure a secure and comfortable ride. If you have a specific helmet you would like to use, feel free to bring it along!',
  },
]

export const QA = () => {
  const { data, isLoading } = useQuery<DataPagination<IQA[]>>({
    queryKey: [QAAPIQueryKey.GET_QA],
    queryFn: () => getListQA(200),
  })

  if (isLoading) return null

  return (
    <Section
      titleClassName="text-[#C80D13] text-3xl"
      title="Q&A"
      className="pt-10"
    >
      <Accordion>
        {data?.data?.map((item, index) => (
          <Accordion.Item value={item.title} key={index}>
            <Accordion.Control>
              <h3 className="text-2xl font-medium text-[#C13332] mb-2 font-alike">
                {item.title}
              </h3>
            </Accordion.Control>
            <Accordion.Panel>
              <p
                className="text-base whitespace-pre-line leading-[25px]"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Section>
  )
}
