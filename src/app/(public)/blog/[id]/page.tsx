import { BlogDetailPage } from '@/components/features/blog'

const TourDetail = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  const tour = await getTour(params.id)
  return (
    <div>
      <BlogDetailPage />
    </div>
  )
}

export default TourDetail

const getTour = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    id,
    name: 'Tour 1',
  }
}
