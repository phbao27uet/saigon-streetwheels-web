import {
  AlbumAPIQueryKey,
  ListAlbumAdmin,
  getListAlbum,
} from '@/components/features/admin/quan-ly-album'
import { getQueryClient } from '@/libs/query'

const QuanLyAlbumPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [AlbumAPIQueryKey.GET_ALBUMS],
    queryFn: getListAlbum,
  })

  return (
    <div>
      <ListAlbumAdmin />
    </div>
  )
}

export default QuanLyAlbumPage
