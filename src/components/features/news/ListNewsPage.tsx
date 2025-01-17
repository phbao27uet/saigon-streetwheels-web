'use client'

import { SectionWithPagination } from '@/components/shared/layouts'
import { BlogAPIQueryKey } from '../admin'
import { NewsCard } from './components'
import { getListNews } from './services'

export const ListNewsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionWithPagination
        title="NEWS"
        titleClassName="text-[#c13331]"
        queryKey={[BlogAPIQueryKey.GET_BLOGS]}
        fetchFn={getListNews}
        renderItem={(news) => (
          <NewsCard
            id={news.id}
            featureImage={news.featureImage}
            description={news.description}
            title={news.title}
            createdAt={news.createdAt}
          />
        )}
      />
    </div>
  )
}
