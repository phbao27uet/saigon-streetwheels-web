import {
  handleSignOut,
  handleUpdate,
} from '@/components/features/auth/login/authUtils'
import { API_URL } from '@libs/utils/constants'
import axios, {
  default as Axios,
  type AxiosHeaders,
  type InternalAxiosRequestConfig,
} from 'axios'
import type { Session } from 'next-auth'
import { getSession, signIn } from 'next-auth/react'
import { toast } from 'sonner'
import type { IUserToken } from '../types/user'

export const request = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  maxBodyLength: Number.POSITIVE_INFINITY, // Cho phép kích thước body không giới hạn
  maxContentLength: Number.POSITIVE_INFINITY, // Cho phép kích thước nội dung không giới hạn
})

request.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession()
    const accessToken = session?.user?.accessToken

    if (accessToken) {
      ;(config.headers as AxiosHeaders).set(
        'Authorization',
        `Bearer ${accessToken}`,
      )
    }

    return config
  },
  (error) => Promise.reject(error),
)

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status
    const error_data = error?.response?.data as {
      message: string
      error: string
    }
    const prevRequest = error?.config

    console.log('error_data -=-=-=-=-=-=-=-', error_data)

    if (error_data?.message === 'The refresh token is invalid.') {
      localStorage.removeItem('isLogin')
      toast.error('The refresh token is invalid.')
      return
    }

    if (status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true
      const session = await getSession()

      const res = await handleRefreshToken(session!)
      prevRequest.headers.Authorization = `Bearer ${res.accessToken}`

      return request(prevRequest)
    }
    return Promise.reject(error)
  },
)

const handleRefreshToken = async (session: Session) => {
  try {
    const res = await axios.get<Omit<IUserToken, 'refreshToken'>>(
      `${API_URL}/auth/refresh`,
      {
        headers: {
          Authorization: `Bearer ${session?.user?.refreshToken}`,
        },
      },
    )

    if (session) {
      session.user.accessToken = res.data.accessToken
      await handleUpdate(session)
    } else {
      signIn()
    }

    return res.data
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.log('error handleRefreshToken', error)
    await handleSignOut()
    location.replace('/login')
    throw Error('refetching token failed.')
  }
}
