'use client'

import { Section } from '@/components/shared/layouts'
import { cn } from '@/libs/utils'
import { Box } from '@mantine/core'
import { useSuspenseQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { getDetailBlog } from '../admin'
import { BlogAPIQueryKey } from '../admin'

export const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const { data } = useSuspenseQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOG, params.id],
    queryFn: getDetailBlog(params.id),
  })

  return (
    <Section
      titleClassName="text-[#C80D13] text-3xl"
      title={data?.title}
      className="pt-6"
    >
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">{data?.description}</p>
        <p className="text-[#666363] font-bold text-xl">
          {format(new Date(data?.createdAt), 'yyyy-MM-dd')}
        </p>

        <Box
          style={{
            '& a': {
              color: '#006121',
              textDecoration: 'underline',
            },

            '& img': {
              maxWidth: '100%',
            },

            '& ul': {
              display: 'block',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
              paddingInlineStart: '40px',
            },

            '& ol': {
              display: 'block',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
              paddingInlineStart: '40px',
            },

            '& blockquote': {
              borderLeft: '2px solid #ccc',
              marginLeft: '1.5rem',
              paddingLeft: '1rem',
            },
          }}
          className={cn(
            'prose prose-sm max-w-none',
            // Typography and text styling
            'text-justify text-[20px]',

            // Image wrapper styles
            '[&_.imageWrapper]:bg-white [&_.imageWrapper]:relative [&_.imageWrapper]:mt-5 [&_.imageWrapper]:mb-5 [&_.imageWrapper]:max-w-[700px] [&_.imageWrapper]:w-full [&_.imageWrapper]:h-auto [&_.imageWrapper]:mx-auto',
            '[&_.imageWrapper_.logo]:absolute [&_.imageWrapper_.logo]:top-[10px] [&_.imageWrapper_.logo]:left-[10px] [&_.imageWrapper_.logo]:w-[50px] [&_.imageWrapper_.logo]:h-[50px]',

            // List styles - Updated for proper bullet/number alignment
            '[&_ul]:list-disc [&_ul]:pl-10 [&_ul]:my-2 [&_ul_li]:pl-0',
            '[&_ol]:list-decimal [&_ol]:pl-10 [&_ol]:my-4 [&_ol_li]:pl-0',
            '[&_ul_ul]:list-circle [&_ul_ul]:mt-1 [&_ul_ul]:ml-4',
            '[&_ol_ul]:list-circle [&_ol_ul]:mt-1 [&_ol_ul]:ml-4',
            '[&_ul_ol]:list-[lower-latin] [&_ul_ol]:mt-1 [&_ul_ol]:ml-4',
            '[&_ol_ol]:list-[lower-latin] [&_ol_ol]:mt-1 [&_ol_ol]:ml-4',
            // Fix for list item text wrapping
            '[&_ul_li]:gap-2',
            '[&_ol_li]:gap-2',
            // Fix for list markers
            '[&_ul_li]:marker:text-black [&_ul_li]:marker:content-["•_"]',
            '[&_ol_li]:marker:text-black',

            // Heading and blockquote styles
            '[&_h2],[&_h3],[&_h4],[&_blockquote]:font-bold [&_h2],[&_h3],[&_h4],[&_blockquote]:text-[1.3em] [&_h2],[&_h3],[&_h4],[&_blockquote]:my-5',

            // Paragraph styles
            '[&_p]:mt-[15px]',

            // Emphasis styles
            '[&_em]:italic',

            // Image styles
            '[&_img]:block [&_img]:my-3 [&_img]:mx-auto',
          )}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </div>
    </Section>
  )
}
