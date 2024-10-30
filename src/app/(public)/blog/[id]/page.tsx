import { BlogDetailPage } from '@/components/features/blog'

const BlogDetail = async ({
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

export default BlogDetail

const getTour = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return {
    id,
    name: 'Tour 1',
  }
}
