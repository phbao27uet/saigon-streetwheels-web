'use client'
import { Image } from '@mantine/core'
import { MainContainer } from '@shared/layouts'
import Link from 'next/link'

interface IFooterItem {
  title: string
  href: string
  icon?: React.ReactNode
}

const ABOUT_URBAN_TOUR: IFooterItem[] = [
  {
    title: 'Privacy Policy',
    href: '#',
  },
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
      <div className="bg-[#000] flex items-center justify-center">
        <div id="footer" />
        <MainContainer className="py-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/home"
              className="w-fit h-[90px] bg-white rounded-[12px] px-6 py-4 flex items-center justify-center"
            >
              <Image
                src="/images/logo-removebg.png"
                alt="logo"
                className="h-full w-auto"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div>
              <p className="text-white text-center">
                SaiGon Urban Tour Thank you for always choosing and trusting us.
                We will try to be better and bring a great experience to you, it
                is an honor to serve you.
              </p>
              <p className="text-white uppercase mt-4 mb-6 text-xl font-bold text-center">
                Payment Partner
              </p>
              <Image src="/svgs/thanh-toan.svg" alt="thanh-toan" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-bold uppercase text-white">Read Me</p>
              {ABOUT_URBAN_TOUR.map((item) => (
                <FooterItem key={item.title} {...item} />
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-bold uppercase text-white">
                Contact Information
              </p>
              {FOLLOW_US_ON.map((item) => (
                <FooterItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  )
}

export { Footer }
