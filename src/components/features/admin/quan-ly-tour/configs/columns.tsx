'use client'

import type { ITour } from '@/libs/types'
import { cn } from '@/libs/utils'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const columnsTour: MRT_ColumnDef<ITour>[] = [
  {
    accessorKey: 'title',
    header: 'Tiêu đề',
    enableEditing: false,
  },
  {
    accessorKey: 'departureLocation',
    header: 'Địa điểm xuất phát',
    enableEditing: false,
  },
  {
    accessorKey: 'description',
    header: 'Mô tả',
    enableEditing: false,
  },
  {
    accessorKey: 'isOutstanding',
    header: 'Nổi bật',
    enableEditing: false,
    Cell: ({ row }) => {
      const isOutstanding = row.original.isOutstanding
      return (
        <div
          className={cn(
            'text-center px-2 py-1 rounded-md w-fit',
            isOutstanding && 'text-green-500 bg-green-50',
            !isOutstanding && 'text-red-500 bg-red-50',
          )}
        >
          {isOutstanding ? 'Có' : 'Không'}
        </div>
      )
    },
  },
]
