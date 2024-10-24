'use client'

import classes from '@/components/shared/layouts/Layout.module.css'
import { AppShell, AppShellMain } from '@mantine/core'
import { usePathname } from 'next/navigation'
import type React from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { MainPaper } from './main-paper'

interface LayoutProps {
  children: React.ReactNode
}

const isActiveHeader = (pathname: string, href: string[]) =>
  href.some((h) => pathname === `${h}/` || pathname === `${h}`)

export const LayoutWithHeaderFooter = ({ children }: LayoutProps) => {
  const pathname = usePathname()

  const isHideHeaderFooter = isActiveHeader(pathname, ['/'])

  return (
    <>
      <AppShell
        header={{ height: 90 }}
        layout="alt"
        className="overflow-hidden"
      >
        {isHideHeaderFooter ? null : (
          <AppShell.Header className="border-none bg-transparent">
            <Header />
          </AppShell.Header>
        )}

        <AppShellMain className={classes.layout}>
          <MainPaper>{children}</MainPaper>
        </AppShellMain>
      </AppShell>

      {isHideHeaderFooter ? null : <Footer />}
    </>
  )
}
