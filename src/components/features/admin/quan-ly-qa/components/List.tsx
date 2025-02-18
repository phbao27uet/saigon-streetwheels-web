import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { QAAPIQueryKey, qaColumns } from '../configs'

export const ListQAAdmin = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/qa'}
          endpointResourceAPI={'/qa'}
          name={QAAPIQueryKey.GET_QA}
          columns={qaColumns}
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
