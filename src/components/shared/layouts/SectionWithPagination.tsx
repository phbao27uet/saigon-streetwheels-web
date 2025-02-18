'use client'

import { useQueryWithPagination } from '@/libs/hooks/query-with-pagination'
import type { DataPagination, PaginationState } from '@/libs/types'
import { cn } from '@/libs/utils'
import { Container } from '@mantine/core'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ClassNameValue } from 'tailwind-merge'

interface SectionProps<T> {
  title: string
  titleClassName?: ClassNameValue
  className?: ClassNameValue
  queryKey: string[]
  fetchFn: (params: PaginationState) => Promise<DataPagination<T[]>>
  renderItem: (item: T) => React.ReactNode
}

export const SectionWithPagination = <T,>({
  title,
  className,
  titleClassName,
  queryKey,
  fetchFn,

  renderItem,
}: SectionProps<T>) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [pageSize] = useState(6)

  const { data, isLoading, isFetching } = useQueryWithPagination<T>({
    queryKey,
    fetchFn,
    params: { perPage: pageSize, page: pageIndex },
  })

  const handlePageChange = (newPage: number) => {
    setPageIndex(newPage)
  }

  return (
    <Container
      size="xl"
      className={cn('flex flex-col gap-4 w-full', className)}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          'text-3xl font-bold text-white text-center uppercase',
          titleClassName,
        )}
      >
        {title}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Loading overlay */}
        {(isLoading || isFetching) && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
          </div>
        )}

        {/* Render data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.data.map((item, index) => (
            <div key={index}>{renderItem(item)}</div>
          ))}
        </div>
      </motion.div>

      {data?.meta?.totalPages && data.meta.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: data.meta.totalPages }, (_, i) => i + 1).map(
            (page) => (
              <button
                type="button"
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  'w-8 h-8 rounded flex items-center justify-center',
                  pageIndex === page
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                )}
              >
                {page}
              </button>
            ),
          )}
          {pageIndex < data.meta.totalPages && (
            <button
              type="button"
              onClick={() => handlePageChange(pageIndex + 1)}
              className="px-3 h-8 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Sau
            </button>
          )}
        </div>
      )}
    </Container>
  )
}
