import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { BookingAPIQueryKey, columnsBooking } from '../configs'

export const ListBookingAdmin = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/bookings'}
          endpointResourceAPI={'/bookings'}
          name={BookingAPIQueryKey.GET_BOOKINGS}
          columns={columnsBooking}
          data={[]}
          seeDetail={false}
          hasCreate={false}
          enableRowSelection={false}
          {...disableOptions}
        />
      </TableContextProvider>
    </div>
  )
}
