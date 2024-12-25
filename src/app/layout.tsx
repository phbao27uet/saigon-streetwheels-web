import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
// import "dayjs/locale/vi";
import 'dayjs/locale/ru'

import './globals.css'
import 'mantine-react-table/styles.css'

import { theme } from '@libs/theme'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import NextTopLoader from 'nextjs-toploader'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir'

import WebVitals from '@/components/shared/web-vitals'
import {
  JotaiProvider,
  ModalProvider,
  PayPalProvider,
  Provider,
  QueryClientProvider,
  ToastProvider,
} from '@/providers'
import { DatesProvider } from '@mantine/dates'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: '1..',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preload" as="image" href="/images/logo.jpg" />
        <link rel="preload" as="image" href="/images/logo-removebg.png" />
        <link rel="preload" as="image" href="/svgs/motorbike.svg" />
        <link rel="preload" as="image" href="/images/home/hero-1.jpg" />
      </head>
      <body className={inter.className}>
        <WebVitals />
        <PayPalProvider>
          <JotaiProvider>
            <QueryClientProvider>
              {/* <SessionProvider> */}
              <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
                <MantineProvider defaultColorScheme="light" theme={theme}>
                  <DatesProvider
                    settings={{
                      locale: 'ru',
                      firstDayOfWeek: 0,
                      weekendDays: [0],
                      timezone: 'UTC',
                    }}
                  >
                    <ModalProvider>
                      <NextTopLoader
                        showSpinner={false}
                        color="#C80D13"
                        initialPosition={0.08}
                        crawlSpeed={200}
                        height={3}
                        crawl={true}
                        zIndex={1600}
                        template={
                          '<div class="bar" role="bar"><div class="peg"></div></div>'
                        }
                      />
                      <ToastProvider />
                      <Provider>{children}</Provider>
                    </ModalProvider>
                  </DatesProvider>
                </MantineProvider>
              </NextAppDirEmotionCacheProvider>
              {/* </SessionProvider> */}
            </QueryClientProvider>
          </JotaiProvider>
        </PayPalProvider>
      </body>
    </html>
  )
}
