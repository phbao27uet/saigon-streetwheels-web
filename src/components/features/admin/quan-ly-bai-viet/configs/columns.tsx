'use client'

import type { IBlog } from '@/libs/types'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const columns: MRT_ColumnDef<IBlog>[] = [
  {
    accessorKey: 'title',
    header: 'Tiêu đề',
    enableEditing: false,
  },
  {
    accessorKey: 'description',
    header: 'Mô tả',
    enableEditing: false,
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
