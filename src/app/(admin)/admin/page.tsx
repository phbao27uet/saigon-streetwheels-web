import { auth } from '@/libs/auth'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const session = await auth()

  if (!session) {
    return redirect('/login')
  }

  return redirect('/admin/quan-ly-bai-viet')
}

export default DashboardPage
