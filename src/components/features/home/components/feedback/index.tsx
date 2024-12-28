'use client'

import {
  FeedbackAPIQueryKey,
  getListFeedback,
} from '@/components/features/admin'
import { Section } from '@/components/shared/layouts'
import type { DataPagination, IFeedback } from '@/libs/types'
import { Image } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

export const Feedback = () => {
  const { data: fbs, isLoading } = useQuery<DataPagination<IFeedback[]>>({
    queryKey: [FeedbackAPIQueryKey.GET_FEEDBACKS],
    queryFn: getListFeedback,
  })

  if (isLoading) return null

  return (
    <div id="feedback">
      <Section title="FEEDBACK FROM CUSTOMER" className="pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[150px] lg:gap-y-[100px] gap-6 p-4">
          {fbs?.data.map((fb, index) => (
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
                  {Array.from({ length: fb.star }).map((_, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <span key={index} className="text-xl text-[#EBF218]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg">{fb.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
