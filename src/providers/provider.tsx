'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return <>{children}</>
}

export default Provider
