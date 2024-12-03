import { LayoutWithNavbar } from '@/components/shared/layouts'
import { auth } from '@/libs/auth'
import { redirect } from 'next/navigation'
import type React from 'react'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/login')
  }

  return <LayoutWithNavbar>{children}</LayoutWithNavbar>
}

export default AdminLayout
