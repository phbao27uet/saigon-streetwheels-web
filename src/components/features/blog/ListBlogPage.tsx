'use client'

import { SectionWithPagination } from '@/components/shared/layouts'
import { BlogAPIQueryKey } from '../admin'
import { LatestNewsCard } from '../home/components/tourism-news/components'
import { getListBlogs } from './services'

export const ListBlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionWithPagination
        title="TRAVEL GUIDE"
        titleClassName="text-[#c13331]"
        queryKey={[BlogAPIQueryKey.GET_BLOGS]}
        fetchFn={getListBlogs}
        renderItem={(blog) => (
          <LatestNewsCard
            id={blog.id}
            image={blog.featureImage}
            description={blog.description}
            title={blog.title}
          />
        )}
      />
    </div>
  )
}
