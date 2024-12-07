'use client'

import type { IBooking } from '@/libs/types'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const columnsBooking: MRT_ColumnDef<IBooking>[] = [
  {
    accessorKey: 'bookerName',
    header: 'Tên người đặt',
    enableEditing: false,
  },
  {
    accessorKey: 'bookerPhone',
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
    accessorKey: 'paidStatus',
    header: 'Trạng thái thanh toán',
    enableEditing: false,
    Cell: ({ row }) => {
      return (
        <div>
          {row.original.paidStatus ? 'Đã thanh toán' : 'Chưa thanh toán'}
        </div>
      )
    },
  },
  {
    accessorKey: 'totalPrice',
    header: 'Tổng tiền',
    enableEditing: false,
  },
  {
    accessorKey: 'time.availableDate.date',
    header: 'Ngày đi',
    enableEditing: false,
    Cell: ({ row }) => {
      return (
        <div>{format(row.original.time.availableDate.date, 'dd/MM/yyyy')}</div>
      )
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
