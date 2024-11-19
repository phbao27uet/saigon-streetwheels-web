'use client'

import { cn } from '@/libs/utils'
import { tss } from '@libs/utils/tss-style'
import { Burger, Group, Image } from '@mantine/core'
import { MainContainer } from '@shared/layouts'
import Link from 'next/link'
import { useState } from 'react'
import { DrawerHeader } from './components'

export function HeaderAdmin() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const { classes, cx } = useStyles()

  const toggleDrawer = () => setDrawerOpened((o) => !o)

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
