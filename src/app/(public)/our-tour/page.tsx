import { ListTourPage } from '@/components/features/tour'

const ListTour = async () => {
  await getTours()
  return (
    <>
      <ListTourPage />
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

export default ListTour
