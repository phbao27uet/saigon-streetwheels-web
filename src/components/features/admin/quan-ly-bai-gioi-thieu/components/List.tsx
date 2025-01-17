import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { NewsAPIQueryKey, columnsQuanLyBaiGioiThieu } from '../configs'

export const ListNewsAdmin = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/news'}
          endpointResourceAPI={'/news'}
          name={NewsAPIQueryKey.GET_NEWS}
          columns={columnsQuanLyBaiGioiThieu}
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
