import { Login } from '@/components/features/auth'
import { auth } from '@/libs/auth'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
  const sessions = await auth()

  if (sessions) {
    redirect('/redirect')
  }

  return (
    <>
      <Login />
    </>
  )
}

export default LoginPage
