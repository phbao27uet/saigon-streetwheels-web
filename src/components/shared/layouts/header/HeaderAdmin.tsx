'use client'

import { cn } from '@/libs/utils'
import { tss } from '@libs/utils/tss-style'
import { Group, Image } from '@mantine/core'
import { MainContainer } from '@shared/layouts'
import Link from 'next/link'
import { Auth } from './components'

export function HeaderAdmin() {
  const { classes, cx } = useStyles()

  return (
    <>
      <header className={cx(classes.header)}>
        <MainContainer>
          <Group h="100%" px="md" className={classes.headerContent}>
            <Link href={'/admin'}>
              <Image
                src="/images/logo-removebg.png"
                alt="logo"
                className={cn(classes.logo)}
              />
            </Link>


            <Auth />
          </Group>
        </MainContainer>
      </header>
    </>
  )
}

const useStyles = tss.create(() => ({
  header: {
    padding: '8px 0px',
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    height: '100%',
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

  logo: {
    height: 30,
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
