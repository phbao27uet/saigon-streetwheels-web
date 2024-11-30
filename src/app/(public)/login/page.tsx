import { Login } from '@/components/features/auth'
import { auth } from '@/libs/auth'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
  const sessions = await auth()

  if (sessions) {
    redirect('/admin')
  }

  return (
    <>
      <Login />
    </>
  )
}

export default LoginPage
