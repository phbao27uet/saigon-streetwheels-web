import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { AlbumAPIQueryKey, albumColumns } from '../configs'

export const ListAlbumAdmin = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/album'}
          endpointResourceAPI={'/album'}
          name={AlbumAPIQueryKey.GET_ALBUM}
          columns={albumColumns}
          data={[]}
          seeDetail
          hasCreate
          enableRowSelection={false}
          {...disableOptions}
        />
      </TableContextProvider>
    </div>
  )
}
