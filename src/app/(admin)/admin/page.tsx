import { auth } from '@/libs/auth';

const DashboardPage = async () => {
  const session = await auth();

  console.log('session', session)

  return <div>DashboardPage</div>
}

export default DashboardPage
