import {
  AlbumAPIQueryKey,
  AlbumForm,
  getDetailAlbum,
} from '@/components/features/admin'
import { getQueryClient } from '@/libs/query'

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [AlbumAPIQueryKey.GET_ALBUM, params.id],
    queryFn: getDetailAlbum(params.id),
  })

  return <AlbumForm />
}

export default Page
