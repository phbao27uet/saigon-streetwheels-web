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
      <p className="text-2xl font-bold my-4">Quản lý album</p>

      <ListAlbumAdmin />
    </div>
  )
}

export default QuanLyAlbumPage
