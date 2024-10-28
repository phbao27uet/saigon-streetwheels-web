import { ListBlogPage } from '@/components/features/blog/ListBlogPage'

const ListBlog = async () => {
  await getTours()
  return (
    <>
      <ListBlogPage />
    </>
  )
}

const getTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    {
      id: 1,
      name: 'Tour 1',
    },
    {
      id: 2,
      name: 'Tour 2',
    },
  ]
}

export default ListBlog
