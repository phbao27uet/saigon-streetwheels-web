'use client'

import { cn } from '@/libs/utils'
import { tss } from '@libs/utils/tss-style'
import { Burger, Flex, Group, Image } from '@mantine/core'
import { MainContainer } from '@shared/layouts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ButtonCustom } from '../../buttons'
import { DrawerHeader } from './components'

export const HEADER = [
  { title: 'ABOUT US', href: '/home#about-us' },
  { title: 'TRAVEL TRIP', href: '/home#' },
  { title: 'OUR TOUR', href: '/our-tour' },
  { title: 'CONTACT US', href: '#footer' },
  { title: 'BLOG', href: '/home#tourism-news' },
  { title: 'Q&A', href: '/home#' },
]

const isActiveHeader = (pathname: string, href: string[]) =>
  href.some((h) => pathname.includes(`${h}/`) || pathname.includes(`${h}`))

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpened, setDrawerOpened] = useState(false)
  const { classes, cx } = useStyles({
    headerScrolled: scrolled,
    hasBackgroundHeader: isActiveHeader(pathname, ['/our-tour']),
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDrawer = () => setDrawerOpened((o) => !o)

  return (
    <>
      <header
        className={cx(classes.header, { [classes.headerScrolled]: scrolled })}
      >
        <MainContainer>
          <Group h="100%" px="md" className={classes.headerContent}>
            <Link href={'/'}>
              <Image
                src="/svgs/logo.svg"
                alt="logo"
                className={cn(classes.logo)}
              />
            </Link>

            <Flex className={classes.desktopMenu}>
              {HEADER.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  prefetch
                  className={`${classes.headerNavLink} ${pathname === `${item.href}/` || pathname === `${item.href}` ? 'active' : ''}`}
                >
                  {item.title}
                </Link>
              ))}

              <ButtonCustom className="w-fit" size="lg">
                Buy Tickets
              </ButtonCustom>
            </Flex>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.burger}
              size="sm"
            />
          </Group>
        </MainContainer>
      </header>

      <DrawerHeader drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </>
  )
}

const useStyles = tss
  .withParams<{ headerScrolled: boolean; hasBackgroundHeader: boolean }>()
  .create(({ headerScrolled, hasBackgroundHeader }) => ({
    header: {
      padding: '8px 0px',
      zIndex: 1000,
      transition: 'background-color 0.3s ease',
      height: 150,
      backgroundColor: hasBackgroundHeader ? '#000' : 'transparent',
    },

    headerScrolled: {
      backgroundColor: '#000',
    },

    headerContent: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    desktopMenu: {
      gap: 40,
      alignItems: 'center',

      '@media (max-width: 1024px)': {
        display: 'none',
      },
    },

    headerNavLink: {
      color: '#FFFFFF',
      fontSize: 'clamp(1rem, 0.6068rem + 0.2235vw, 0.875rem)',
      fontWeight: 600,
      textDecoration: 'none',
      position: 'relative',
      transition: 'color 0.3s ease',
      letterSpacing: 0.7,
      padding: '15px 0px',
      textTransform: 'uppercase',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 10,
        opacity: 0,
        left: 0,
        width: '100%',
        height: 2,
        backgroundColor: 'white',
        transition: 'all 0.25s ease',
      },

      '&:hover::after': {
        bottom: 0,
        opacity: 1,
      },

      '&.active': {
        '&::after': {
          bottom: '0 !important',
          opacity: '1 !important',
        },
      },
    },

    logo: {
      height: headerScrolled ? 100 : 120,
      transition: 'height 0.3s ease',
      objectFit: 'contain',
      width: 'auto',
    },

    burger: {
      display: 'none',

      '@media (max-width: 1024px)': {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      },
    },
  }))
