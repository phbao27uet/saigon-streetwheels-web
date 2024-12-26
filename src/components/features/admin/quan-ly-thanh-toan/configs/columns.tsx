'use client'

import type { BookingStatus, IBooking } from '@/libs/types'
import { cn } from '@/libs/utils'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const bookingStatus: Record<BookingStatus, string> = {
  PENDING: 'Chờ thanh toán',
  PAID: 'Đã thanh toán',
  CANCELED: 'Đã hủy',
}

export const columnsBooking: MRT_ColumnDef<IBooking>[] = [
  {
    accessorKey: 'id',
    header: 'Mã Code',
    enableEditing: false,
  },
  {
    accessorKey: 'bookerName',
    header: 'Tên người đặt',
    enableEditing: false,
  },
  {
    accessorKey: 'bookerPhoneNumber',
    header: 'Số điện thoại',
    enableEditing: false,
  },
  {
    accessorKey: 'bookerEmail',
    header: 'Email',
    enableEditing: false,
  },
  {
    accessorKey: 'tour.title',
    header: 'Tên tour',
    enableEditing: false,
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái thanh toán',
    enableEditing: false,
    Cell: ({ row }) => {
      return (
        <div
          className={cn(
            'text-center px-2 py-1 rounded-md',
            row.original.status === 'PENDING' && 'text-orange-500 bg-orange-50',
            row.original.status === 'PAID' && 'text-green-500 bg-green-50',
            row.original.status === 'CANCELED' && 'text-red-500 bg-red-50',
          )}
        >
          {bookingStatus[row.original.status]}
        </div>
      )
    },
  },
  {
    accessorKey: 'totalPrice',
    header: 'Tổng tiền',
    enableEditing: false,
    Cell: ({ row }) => {
      return <div>{row.original.totalPrice.toFixed(2)} USD</div>
    },
  },
  {
    accessorKey: 'time.createdAt',
    header: 'Ngày đặt',
    enableEditing: false,
    Cell: ({ row }) => {
      return <div>{format(row.original.createdAt, 'dd/MM/yyyy')}</div>
    },
  },
  {
    accessorKey: 'time.timeSlot',
    header: 'Thời gian',
    enableEditing: false,
    Cell: ({ row }) => {
      return (
        <div>
          {row.original.time.startTime} - {row.original.time.endTime}
        </div>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Ngày tạo',
    enableEditing: false,
    Cell: ({ row }) => {
      return <div>{format(row.original.createdAt, 'dd/MM/yyyy HH:mm')}</div>
    },
  },
]
