'use client'

import type { IFeedback } from '@/libs/types'
import { Text } from '@mantine/core'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'
import Image from 'next/image'

export const feedbackColumns: MRT_ColumnDef<IFeedback>[] = [
  {
    accessorKey: 'image',
    header: 'Hình ảnh',
    enableEditing: false,
    Cell: ({ row }) => {
      return (
        <Image
          src={row.original.image}
          alt="feedback"
          width={100}
          height={100}
        />
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Tên',
    enableEditing: false,
  },
  {
    accessorKey: 'star',
    header: 'Số sao',
    enableEditing: false,
  },
  {
    accessorKey: 'content',
    header: 'Nội dung',
    enableEditing: false,
    Cell: ({ row }) => {
      return <Text lineClamp={3}>{row.original.content}</Text>
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
