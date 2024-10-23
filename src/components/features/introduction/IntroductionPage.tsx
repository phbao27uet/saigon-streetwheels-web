import SkewButton from '@/components/shared/buttons/SkewButton'
import { Container } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

export const IntroductionPage = () => {
  return (
    <div className="min-h-screen relative bg-[url('/images/introduction/bg.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-20 mix-blend-multiply" />

      <Container size="xl" className="flex gap-5 py-5">
        <div className="basis-1/3 flex flex-col z-10">
          <div className="w-[250px] h-[250px] rounded-full bg-white overflow-hidden">
            <Image
              alt="Logo"
              src="/images/logo.png"
              width={250}
              height={250}
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 mt-20">
            <h1 className="text-4xl font-bold text-white">SAIGON URBAN TOUR</h1>
            <p className="text-white">
               a type specimen book. It has survived not only five centuries,
              but also the leap electronic tktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum but also the leap
              electronic tktop publishing software like Aldus Page.
            </p>

            <Link href="/home" prefetch className="mt-10">
              <SkewButton>Start Exploring</SkewButton>
            </Link>
          </div>
        </div>

        <div className="basis-2/3 flex flex-col z-10">2222</div>
      </Container>
    </div>
  )
}
