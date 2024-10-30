import { getQueryClient } from '@/libs/query'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type React from 'react'

interface Props {
  queryKey: string[]
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  queryFn: () => Promise<any>
}

export const PageWithPrefetchQuery = async ({
  queryKey,
  queryFn,
  children,
}: React.PropsWithChildren<Props>) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
