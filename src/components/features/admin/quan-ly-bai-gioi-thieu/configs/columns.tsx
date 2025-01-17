'use client'

import type { INews } from '@/libs/types'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const columnsQuanLyBaiGioiThieu: MRT_ColumnDef<INews>[] = [
  {
    accessorKey: 'title',
    header: 'Tiêu đề',
    enableEditing: false,
  },
  {
    accessorKey: 'description',
    header: 'Mô tả',
    enableEditing: false,
    Cell: ({ row }) => {
      return <p className="line-clamp-3">{row.original.description}</p>
    },
  },
  {
    accessorKey: 'isMain',
    header: 'Bài viết giới thiệu chính',
    enableEditing: false,
    Cell: ({ row }) => {
      return <div>{row.original.isMain ? 'Có' : 'Không'}</div>
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
