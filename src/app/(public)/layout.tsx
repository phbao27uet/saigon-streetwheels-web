import { LayoutWithHeaderFooter } from '@/components/shared/layouts'
import type React from 'react'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutWithHeaderFooter>{children}</LayoutWithHeaderFooter>
}

export default PublicLayout
