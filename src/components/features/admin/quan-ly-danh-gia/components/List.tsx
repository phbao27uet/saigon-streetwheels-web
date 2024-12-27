import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { FeedbackAPIQueryKey, feedbackColumns } from '../configs'

export const ListFeedbackAdmin = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/feedback'}
          endpointResourceAPI={'/feedback'}
          name={FeedbackAPIQueryKey.GET_FEEDBACKS}
          columns={feedbackColumns}
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
