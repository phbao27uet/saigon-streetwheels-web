import { LayoutWithNavbar } from '@/components/shared/layouts'
import type React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutWithNavbar>{children}</LayoutWithNavbar>
}

export default AdminLayout
