'use client'

import type { IAlbum } from '@/libs/types'
import { format } from 'date-fns'
import type { MRT_ColumnDef } from 'mantine-react-table'
import Image from 'next/image'

export const albumColumns: MRT_ColumnDef<IAlbum>[] = [
  {
    accessorKey: 'image',
    header: 'Hình ảnh',
    enableEditing: false,
    Cell: ({ row }) => {
      return (
        <Image src={row.original.image} alt="album" width={100} height={100} />
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
