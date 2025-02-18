'use client'

import type { IQA } from '@/libs/types'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const qaColumns: MRT_ColumnDef<IQA>[] = [
  {
    accessorKey: 'title',
    header: 'Tiêu đề',
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
