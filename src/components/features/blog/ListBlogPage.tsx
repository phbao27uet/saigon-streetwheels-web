'use client'

import { SectionWithPagination } from '@/components/shared/layouts'
import { BlogAPIQueryKey } from '../admin'
import { BlogCard } from './components'
import { getListBlogs } from './services'

export const ListBlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionWithPagination
        title="OUR BLOG - SAIGON URBAN TOUR"
        titleClassName="text-black"
        queryKey={[BlogAPIQueryKey.GET_BLOGS]}
        fetchFn={getListBlogs}
        renderItem={(blog) => <BlogCard {...blog} />}
      />
    </div>
  )
}
