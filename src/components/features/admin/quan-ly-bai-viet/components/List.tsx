import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { BlogAPIQueryKey, columns } from '../configs'

export const ListArticle = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/articles'}
          endpointResourceAPI={'/articles'}
          name={BlogAPIQueryKey.GET_BLOGS}
          columns={columns}
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
