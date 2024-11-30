'use server'
import { signIn, signOut, unstable_update } from '@/auth'
import type { Session } from 'next-auth'

interface SignInInput {
  email: string
  password: string
}

export interface SignInResponse {
  status: 'success' | 'error'
  message: string
}

export async function handleSignIn({
  email,
  password,
}: SignInInput): Promise<SignInResponse> {
  try {
    const res = await signIn('credentials', {
      redirect: false,

      email,
      password,
    })

    console.log('res handleSignIn', res)

    return {
      status: 'success',
      message: 'Chào mừng bạn đến với hệ thống!',
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.log('error handleSignIn', error)

    return {
      status: 'error',
      message: error.message,
    }
  }
}

export const handleSignOut = async () => {
  await signOut({ redirect: false }).catch((error) => {
    console.error('Sign out error', error)
  })
}

export const handleUpdate = async (session: Session) => {
  await unstable_update(session)
}
