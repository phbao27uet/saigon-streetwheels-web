import type { ITour } from '@/libs/types'
import type { MRT_ColumnDef } from 'mantine-react-table'

export const columnsTour: MRT_ColumnDef<ITour>[] = [
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
  },
]
