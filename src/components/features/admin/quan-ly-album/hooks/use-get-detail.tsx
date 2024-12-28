import { useQuery } from '@tanstack/react-query'
import { AlbumAPIQueryKey } from '../configs'
import { getDetailAlbum } from '../services'

export const useGetDetailAlbum = (id: string) => {
  return useQuery({
    queryKey: [AlbumAPIQueryKey.GET_ALBUM, id],
    queryFn: getDetailAlbum(id),
    enabled: !!id && id !== 'create',
  })
}
