'use client'

import { ModalsProvider as MantineModalsProvider } from '@mantine/modals'
import type React from 'react'

interface Props {
  children: React.ReactNode
}

const ModalsProvider = ({ children }: Props) => {
  return <MantineModalsProvider>{children}</MantineModalsProvider>
}

export default ModalsProvider
