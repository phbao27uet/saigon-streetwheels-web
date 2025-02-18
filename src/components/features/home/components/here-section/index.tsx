'use client'

import { useGetDetailImage } from '@/components/features/admin/quan-ly-anh-home/hooks'
import { cn } from '@/libs/utils'

export const HereSection = () => {
  const imageQuery = useGetDetailImage('HOME')

  const imageUrl = imageQuery.data?.imageUrl

  console.log(imageUrl)

  return (
    <div
      className={cn(
        'min-h-[70vh] md:min-h-screen relative bg-cover bg-center flex items-center justify-center',
      )}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : '',
      }}
    >
      {/* <p className="text-center text-xl font-semibold sm:text-3xl md:text-5xl lg:text-7xl text-wrap text-white"></p> */}
    </div>
  )
}
