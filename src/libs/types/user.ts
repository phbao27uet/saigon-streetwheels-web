import type { ROLES_TYPE } from '@libs/utils'

export interface IUser {
  id: number
  name: string
  email: string
  role: ROLES_TYPE
}

export interface IUserToken {
  accessToken: string
  refreshToken: string
}

export interface ICredential {
  email: string
  password: string
}

export interface IUserLoginResponse extends IUserToken {
  user: IUser
}
