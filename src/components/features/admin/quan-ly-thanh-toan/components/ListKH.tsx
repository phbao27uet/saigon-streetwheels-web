import { ReactTable } from '@/components/shared/tables'
import { TableContextProvider } from '@/components/shared/tables/components/TableContext'
import { disableOptions } from '@/components/shared/tables/hooks/useTable'
import { BookingAPIQueryKey, columnsBookingKH } from '../configs'

export const ListKHAdmin = () => {
  return (
    <div>
      <TableContextProvider>
        <ReactTable
          endpointAPI={'/bookings/booker-email'}
          endpointResourceAPI={'/bookings/booker-email'}
          name={BookingAPIQueryKey.GET_BOOKING_KH}
          columns={columnsBookingKH}
          data={[]}
          seeDetail={false}
          hasCreate={false}
          hasDelete={false}
          enableRowSelection={false}
          enableRowActions={false}
          enableEditing={false}
          {...disableOptions}
        />
      </TableContextProvider>
    </div>
  )
}
