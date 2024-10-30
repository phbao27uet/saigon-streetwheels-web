import { Container, Skeleton } from '@mantine/core'

const Loading = () => {
  return (
    <Container size={'xl'} className="py-8 md:py-16">
      <div className="flex flex-col gap-5">
        <Skeleton height={50} width="90%" radius="md" />
        <div className="flex flex-col gap-4">
          <Skeleton height={30} width="100%" radius="md" />
          <Skeleton height={30} width="100%" radius="md" />
          <Skeleton height={30} width="95%" radius="md" />
        </div>

        <div className="w-full mx-auto mt-6">
          <Skeleton height={500} radius="md" />
        </div>

        <div className="flex flex-col gap-3 mt-6">
          {[1, 2, 3, 4].map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Skeleton key={index} height={25} width="100%" radius="md" />
          ))}
        </div>
        <div className="mt-8">
          {[1, 2].map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className="flex flex-col gap-3 mb-6">
              <Skeleton height={25} width="100%" radius="md" />
              <Skeleton height={25} width="95%" radius="md" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Loading
