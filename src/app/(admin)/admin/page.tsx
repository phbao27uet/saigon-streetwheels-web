import { getSession } from 'next-auth/react'

const DashboardPage = async () => {
  const session = await getSession()

  console.log('session', session)

  return <div>DashboardPage</div>
}

export default DashboardPage
