import { CardSkeleton } from '@/components/shared/skeletons'
import { Container } from '@mantine/core'

const Loading = () => {
  return (
    <Container size="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <CardSkeleton key={index} />
        ))}
      </div>
    </Container>
  )
}

export default Loading
