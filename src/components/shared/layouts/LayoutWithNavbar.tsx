'use client'

import classes from '@/components/shared/layouts/Layout.module.css'
import { MainPaper } from '@/components/shared/layouts/main-paper'
import { AppShell, AppShellMain } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { HeaderAdmin } from './header'
import { Navbar } from './navbar'

interface LayoutProps {
  children: React.ReactNode
}

const LayoutWithNavbar = ({ children }: LayoutProps) => {
  const [opened, { toggle, close: closeNavbar }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: 76 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
      layout="alt" // layout="alt" is used to make the navbar sticky
    >
      <AppShell.Header>
        <HeaderAdmin />
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar toggle={toggle} opened={opened} closeNavbar={closeNavbar} />
      </AppShell.Navbar>

      <AppShellMain className={classes.layoutWithNavbar}>
        <MainPaper>{children}</MainPaper>
      </AppShellMain>
    </AppShell>
  )
}

export { LayoutWithNavbar }
