'use client'

import { Section } from '@/components/shared/layouts'
import { cn } from '@/libs/utils'
import { useSuspenseQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { getDetailBlog } from '../admin'
import { BlogAPIQueryKey } from '../admin'

// const innerHtmlStyle: MantineStyleProp = {
//   textAlign: 'justify',
//   fontSize: '20px',

//   '& .imageWrapper': {
//     background: '#ffffff',
//     position: 'relative',

//     marginTop: '20px',
//     marginBottom: '20px',
//     maxWidth: '700px',
//     width: '100%',
//     // maxHeight: "675px",
//     height: 'auto',
//     marginLeft: 'auto',
//     marginRight: 'auto',

//     '& .logo': {
//       position: 'absolute',
//       top: '10px',
//       left: '10px',
//       width: '50px',
//       height: '50px',
//     },
//   },

//   '& ul': {
//     listStyleType: 'disc',
//     listStylePosition: 'inside',

//     display: 'block',
//     marginBlockStart: '0.5em',
//     marginBlockEnd: '0.5em',
//     marginInlineStart: '0px',
//     marginInlineEnd: '0px',
//     paddingInlineStart: '40px',
//     margin: 0,
//     marginBottom: '8px',
//   },
//   '& ol': {
//     listStyleType: 'decimal',
//     listStylePosition: 'inside',

//     display: 'block',
//     marginBlockStart: '1em',
//     marginBlockEnd: '1em',
//     marginInlineStart: '0px',
//     marginInlineEnd: '0px',
//     paddingInlineStart: '40px',
//   },
//   '& ul ul, ol ul': {
//     listStyleType: 'circle',
//     listStylePosition: 'inside',
//     marginLeft: '15px',
//   },
//   '& ol ol, ul ol': {
//     listStyleType: 'lower-latin',
//     listStylePosition: 'inside',
//     marginLeft: '15px',
//   },
//   '& h2, h3, h4, blockquote': {
//     fontWeight: 'bold',
//     fontSize: '1.3em',
//     marginTop: '20px',
//     marginBottom: '10px',
//   },
//   '& p': {
//     marginTop: '15px',
//   },
//   '& em': {
//     fontStyle: 'italic',
//   },
//   '& img': {
//     display: 'block',
//     margin: '12px auto',
//   },
// }

export const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const { data } = useSuspenseQuery({
    queryKey: [BlogAPIQueryKey.GET_BLOG, params.id],
    queryFn: getDetailBlog(params.id),
  })

  return (
    <Section titleClassName="text-[#C80D13] text-3xl" title={data?.title}>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">{data?.description}</p>
        <p className="text-[#666363] font-bold text-xl">
          {format(new Date(data?.createdAt), 'yyyy-MM-dd')}
        </p>

        <div
          className={cn(
            'prose prose-sm max-w-none',
            // Typography and text styling
            'text-justify text-[20px]',

            // Image wrapper styles
            '[&_.imageWrapper]:bg-white [&_.imageWrapper]:relative [&_.imageWrapper]:mt-5 [&_.imageWrapper]:mb-5 [&_.imageWrapper]:max-w-[700px] [&_.imageWrapper]:w-full [&_.imageWrapper]:h-auto [&_.imageWrapper]:mx-auto',
            '[&_.imageWrapper_.logo]:absolute [&_.imageWrapper_.logo]:top-[10px] [&_.imageWrapper_.logo]:left-[10px] [&_.imageWrapper_.logo]:w-[50px] [&_.imageWrapper_.logo]:h-[50px]',

            // List styles
            '[&_ul]:list-disc [&_ul]:list-inside [&_ul]:block [&_ul]:my-2 [&_ul]:px-10',
            '[&_ol]:list-decimal [&_ol]:list-inside [&_ol]:block [&_ol]:my-4 [&_ol]:px-10',
            '[&_ul_ul],[&_ol_ul]:list-circle [&_ul_ul],[&_ol_ul]:list-inside [&_ul_ul],[&_ol_ul]:ml-[15px]',
            '[&_ul_ol],[&_ol_ol]:list-[lower-latin] [&_ul_ol],[&_ol_ol]:list-inside [&_ul_ol],[&_ol_ol]:ml-[15px]',

            // Heading and blockquote styles
            '[&_h2],[&_h3],[&_h4],[&_blockquote]:font-bold [&_h2],[&_h3],[&_h4],[&_blockquote]:text-[1.3em] [&_h2],[&_h3],[&_h4],[&_blockquote]:my-5',

            // Paragraph styles
            '[&_p]:mt-[15px]',

            // Emphasis styles
            '[&_em]:italic',

            // Image styles
            '[&_img]:block [&_img]:my-3 [&_img]:mx-auto',
          )}
          // style={{ ...innerHtmlStyle }}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </div>
    </Section>
  )
}
