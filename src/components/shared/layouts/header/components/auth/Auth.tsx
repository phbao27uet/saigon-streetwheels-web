'use client'

import type { IUser } from '@/libs/types/user'
import { Skeleton } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { UserAccount } from './UserAccount'

export const Auth = () => {
  const { data, isLoading } = useQuery<IUser>({
    queryKey: ['me'],
    queryFn: () => {
      // const res = await request.get("auth/me");

      const res = {
        data: {
          id: 1,
          name: 'Admin',
          email: 'admin@gmail.com',
          role: 'ADMIN',
        },
      }

      return res.data as unknown as IUser
    },
  })

  if (isLoading) {
    return <Skeleton height={24} circle />
  }

  const isLogin = !!data?.email

  return !isLogin ? <>None</> : <UserAccount user={data} />
}
