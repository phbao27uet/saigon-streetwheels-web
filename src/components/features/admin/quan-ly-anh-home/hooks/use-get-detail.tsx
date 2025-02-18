import { useQuery } from '@tanstack/react-query'
import { ImageAPIQueryKey } from '../configs'
import { getDetailByType } from '../services'

export const useGetDetailImage = (type: string) => {
  return useQuery({
    queryKey: [ImageAPIQueryKey.IMAGES, type],
    queryFn: getDetailByType(type),
    enabled: !!type && type !== 'create',
  })
}
