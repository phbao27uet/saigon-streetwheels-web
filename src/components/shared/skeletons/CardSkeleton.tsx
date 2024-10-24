import { Skeleton } from '@mantine/core'

const CardSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

export { CardSkeleton }
