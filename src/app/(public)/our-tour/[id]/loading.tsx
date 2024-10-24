import { Container, Skeleton } from '@mantine/core'

const Loading = () => {
  return (
    <Container
      size={'xl'}
      className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4 py-8 md:py-16"
    >
      <div className="w-full max-w-[600px] mx-auto lg:max-w-none">
        <Skeleton height={400} radius="md" />
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton height={40} width="70%" radius="md" />
        <div className="flex flex-col gap-2 shadow-[21px_59px_30px_0px_#00000040] bg-white p-4 md:p-8 rounded-lg">
          <Skeleton height={30} width="30%" radius="md" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <Skeleton height={30} width="60%" radius="md" />
              <Skeleton height={30} width="50%" radius="md" />
            </div>

            <Skeleton height={50} width="200px" radius="md" />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {[1, 2, 3].map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex gap-2 items-center">
                <Skeleton circle height={20} width={20} />
                <Skeleton height={20} width="80%" radius="md" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-20">
          <div className="flex items-center gap-4">
            <Skeleton height={30} width="30%" radius="md" />
            <div className="w-full max-w-[300px] h-[1px] bg-gray-300" />
          </div>

          <Skeleton height={100} className="mt-4" radius="md" />
        </div>
      </div>
    </Container>
  )
}

export default Loading
