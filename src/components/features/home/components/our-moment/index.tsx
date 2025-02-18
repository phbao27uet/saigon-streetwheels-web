'use client'

import { AlbumAPIQueryKey, getListAlbum } from '@/components/features/admin'
import { SwiperWithThumb } from '@/components/shared'
import { Section } from '@/components/shared/layouts'
import type { IAlbum } from '@/libs/types'
import type { DataPagination } from '@/libs/types'
import { useQuery } from '@tanstack/react-query'

export const OurMoment = () => {
  const { data: albums, isLoading } = useQuery<DataPagination<IAlbum[]>>({
    queryKey: [AlbumAPIQueryKey.GET_ALBUMS],
    queryFn: getListAlbum,
  })

  if (isLoading) return null

  return (
    <Section title="Our Moment" className="w-full pt-6">
      <div className="px-3 md:px-10">
        <SwiperWithThumb
          images={albums?.data.map((al) => al.image) || []}
          classNameWrapper="pd-[100%] md:pt-[50%]"
        />
      </div>
    </Section>
  )
}
