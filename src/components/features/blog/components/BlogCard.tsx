import { format } from 'date-fns'
import Link from 'next/link'

interface BlogCardProps {
  featureImage: string
  title: string
  description: string
  createdAt: string
  id: number
}

export const BlogCard = ({
  featureImage,
  title,
  description,
  createdAt,
  id,
}: BlogCardProps) => {
  return (
    <Link prefetch href={`/blog/${id}`} className="flex gap-4 p-4">
      <div className="w-[400px] h-[200px] flex-shrink-0">
        <img
          src={featureImage}
          alt={title}
          className="w-full h-full object-cover rounded-lg overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-red-600 hover:text-red-700">
          {title}
        </h3>

        <span className="text-xl text-gray-500 font-bold">
          {format(new Date(createdAt), 'yyyy-MM-dd')}
        </span>

        <p className="text-lg text-gray-700 line-clamp-4">{description}</p>
      </div>
    </Link>
  )
}
