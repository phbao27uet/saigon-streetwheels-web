import { cn } from '@/libs/utils'
import MotorbikeSvg from '@public/svgs/motorbike.svg'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
})

export const IntroductionPage = () => {
  return (
    <div className="min-h-screen relative bg-[url('/images/introduction/bg.webp')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-20 mix-blend-multiply" />
      <div className="flex flex-col items-center z-10">
        <div className="w-[350px] h-[350px] rounded-full bg-white overflow-hidden">
          <Image
            alt="Logo"
            src="/images/logo.png"
            width={350}
            height={350}
            className="object-cover"
            priority
          />
        </div>
        <Link
          href={'home'}
          prefetch
          className="mt-8 flex-responsive gap-2 md:gap-6 justify-center items-center rounded-[20px] bg-black p-4"
        >
          <Image
            src={MotorbikeSvg.src}
            width={74}
            height={80}
            alt="motorbike"
            priority
          />
          <p
            className={cn(
              'text-[20px] md:text-[30px] text-center text-white font-bold',
              sairaStencilOne.className,
            )}
          >
            LET'S GO
          </p>
        </Link>
      </div>
    </div>
  )
}
