'use client'
import { NewsAPIQueryKey } from '@/components/features/admin'
import { Swiper } from '@/components/shared'
import { Section } from '@/components/shared/layouts'
import { request } from '@/libs/requests'
import type { DataPagination, INews } from '@/libs/types'
import { Image } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'

export const AboutUs = () => {
  const { data } = useQuery<INews>({
    queryKey: [NewsAPIQueryKey.GET_NEWS, 'MAIN'],
    queryFn: async () => {
      const news = await request.get('/news/main')
      return news.data
    },
  })

  return (
    <div className="min-h-[70vh] md:min-h-screen relative bg-[#f5f2f1] pt-8">
      <div id="about-us" className="relative -top-[8rem]" />
      <Section title="ABOUT US" className="pb-5">
        <div className="relative flex-responsive gap-8">
          <div className="basis-1/2 w-fit self-center">
            <Image
              className="md:w-full sm:w-[500px] w-[300px] rounded-[10px]"
              src={data?.featureImage || '/images/home/au-main.jpeg'}
              alt="about-us"
            />
          </div>
          <div className="basis-1/2 flex flex-col">
            <h1 className="text-4xl font-bold text-[#C13332] capitalize">
              {data?.title}
            </h1>
            <div className="mt-4 whitespace-pre-line">
              <p>{data?.description}</p>
            </div>
          </div>
        </div>

        <AboutUsImages />
      </Section>
    </div>
  )
}

const AboutUsImages = () => {
  const { data } = useQuery<DataPagination<INews[]>>({
    queryKey: [NewsAPIQueryKey.GET_NEWS],
    queryFn: async () => {
      const news = await request.get(
        '/news?filters=[{"field":"isMain","value":false,"operator":"equals"}]',
      )
      return news.data
    },
  })

  return (
    <Swiper
      style={{
        width: '100%',
        height: '100%',
        marginTop: '20px',
      }}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      breakpoints={{
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      }}
    >
      {data?.data.map((news) => (
        <SwiperSlide key={news.id} className="flex h-full">
          <AboutUsImage
            key={news.title}
            id={news.id}
            title={news.title}
            description={news.description}
            src={news.featureImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const AboutUsImage = ({
  id,
  src,
  title,
  description,
}: { src: string; id: number; title: string; description: string }) => {
  return (
    <Link
      href={`/news/${id}`}
      className="flex flex-col bg-white shadow-2xl h-full min-h-full rounded-lg overflow-auto flex-1"
    >
      <div className="relative pt-[80%]">
        <Image
          className="block rounded-lg h-full w-full absolute inset-0 object-cover"
          src={src}
          alt={title}
        />
      </div>
      <div className="flex flex-col p-4 text-center min-h-[160px]">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-base text-left line-clamp-3">{description}</p>
      </div>
    </Link>
  )
}
