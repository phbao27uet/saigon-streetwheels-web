'use client'
import { Container, Image } from '@mantine/core'
import Link from 'next/link'

interface IFooterItem {
  title: string
  href: string
  icon?: React.ReactNode
}

const ABOUT_URBAN_TOUR: IFooterItem[] = [
  {
    title: 'About Us',
    href: '/home#about-us',
  },
  {
    title: 'Our Tours',
    href: '/our-tour',
  },
  {
    title: 'Contact Us',
    href: '#footer',
  },
  {
    title: 'Blog',
    href: '/home#tourism-news',
  },
  {
    title: 'Q&A',
    href: '/blog',
  },
]

const FOLLOW_US_ON: IFooterItem[] = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/saigonurbantours',
    icon: <Image src="/svgs/fb.svg" alt="facebook" />,
  },
  {
    title: 'Whatsapp',
    href: 'https://wa.me/message/PWBWP5HAB7FHM1',
    icon: <Image src="/svgs/whatsapp.svg" alt="whatsapp" />,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/saigonurbantours',
    icon: <Image src="/svgs/ig.svg" alt="instagram" />,
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@SaigonUrbanTours',
    icon: <Image src="/svgs/youtube.svg" alt="youtube" />,
  },
]

const FooterItem = ({ title, href, icon }: IFooterItem) => {
  return (
    <Link href={href} target="_blank" className="text-white">
      <div className="flex items-center gap-2">
        {icon}
        <p>{title}</p>
      </div>
    </Link>
  )
}

const Footer = () => {
  return (
    <>
      <div className="bg-[#1d7d8c] flex items-center justify-center">
        <div id="footer" />
        <Container size="lg" className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/home" className="w-fit h-[90px] bg-white rounded-[12px] px-6 py-4 flex items-center justify-center">
                <Image
                  src="/images/logo-removebg.png"
                  alt="logo"
                  className="h-full w-auto"
                />
            </Link>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div>
              <p className="text-white">
                sentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </p>
              <p className="text-white uppercase mt-4 mb-6 text-xl font-bold text-center">
                Payment Partner
              </p>
              <Image src="/svgs/thanh-toan.svg" alt="thanh-toan" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-bold uppercase text-white">
                About urban tour
              </p>
              {ABOUT_URBAN_TOUR.map((item) => (
                <FooterItem key={item.title} {...item} />
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-bold uppercase text-white">
                Follow us on
              </p>
              {FOLLOW_US_ON.map((item) => (
                <FooterItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export { Footer }
