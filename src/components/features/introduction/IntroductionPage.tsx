import Image from 'next/image'

export const IntroductionPage = () => {
  return (
    <div
      className={`min-h-screen bg-red-300 relative bg-[url('/images/introduction/bg.webp')] bg-cover bg-center`}
    >
      <div className="fixed inset-0 bg-[#D9D9D9] opacity-70" />
      <div className="w-[350px] h-[350px] rounded-[50%] bg-white">
        <Image
          alt="bg"
          src={'/images/logo.png'}
          width={350}
          height={350}
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-5 w-[303px] h-[85px] px-[22px] gap-[30px] rounded-[20px]">
        <p className="text-[30px]">LET’S GO</p>
      </div>
    </div>
  )
}
