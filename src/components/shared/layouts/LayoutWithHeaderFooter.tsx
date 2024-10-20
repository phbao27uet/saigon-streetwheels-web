'use client';

import { AppShell, AppShellMain } from '@mantine/core';
import React from 'react';
import { MainPaper } from './main-paper';
import { Header } from './header';
import classes from '@/components/shared/layouts/Layout.module.css';
import { Footer } from './footer';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const isActiveHeader = (pathname: string, href: string[]) =>
  href.some((h) => pathname === `${h}/` || pathname === `${h}`);

export const LayoutWithHeaderFooter = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const isHideHeaderFooter = isActiveHeader(pathname, ['/']);

  return (
    <>
      <AppShell header={{ height: 90 }} layout="alt" className="overflow-hidden">
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
  );
};
