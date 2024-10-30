'use client'

import { SectionWithPagination } from '@/components/shared/layouts'
import { BlogCard } from './components'
import { getBlogs } from './services'

export const ListBlogPage = () => {
  return (
    <div className="flex flex-col">
      <SectionWithPagination
        title="OUR BLOG - SAIGON URBAN TOUR"
        titleClassName="text-black"
        queryKey={['blog']}
        fetchFn={getBlogs}
        renderItem={(blog) => <BlogCard {...blog} />}
      />
    </div>
  )
}
