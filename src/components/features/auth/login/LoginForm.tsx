'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Flex,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import { useState } from 'react'
import { type Control, Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { handleSignIn } from './authUtils'
import { LoginInputSchema, type LoginInputType } from './types'

interface FormInputProps {
  control: Control<LoginInputType>
  name: keyof LoginInputType
  label: string
  type?: 'text' | 'password'
  loading?: boolean
}

const ERROR_MESSAGES = {
  INVALID_CREDENTIALS:
    'Thông tin đăng nhập không chính xác. Vui lòng kiểm tra lại!',
  GENERAL_ERROR: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!',
} as const

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  label,
  type = 'text',
  loading,
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <Stack style={{ gap: 'unset' }}>
        {type === 'password' ? (
          <PasswordInput
            withAsterisk
            label={label}
            value={value}
            onChange={onChange}
            error={error?.message}
            disabled={loading}
          />
        ) : (
          <TextInput
            withAsterisk
            label={label}
            value={value}
            onChange={onChange}
            error={error?.message}
            disabled={loading}
          />
        )}
      </Stack>
    )}
  />
)

export const LoginForm: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<LoginInputType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginInputSchema),
  })

  const onSubmit = form.handleSubmit(
    async (
      value: LoginInputType,
      event: React.BaseSyntheticEvent | undefined,
    ) => {
      try {
        event?.preventDefault()
        setLoading(true)

        const res = await handleSignIn(value)

        if (res.status === 'error') {
          toast.error(ERROR_MESSAGES.INVALID_CREDENTIALS)
          localStorage.removeItem('isLogin')
          return
        }

        toast.success(res.message)
        localStorage.setItem('isLogin', 'true')
        router.push('/admin')
      } catch (error: unknown) {
        console.error('Login error:', error)
        toast.error(ERROR_MESSAGES.GENERAL_ERROR)
      } finally {
        setLoading(false)
      }
    },
  )

  return (
    <Paper withBorder shadow="md" p={30} radius="md">
      <Flex mb="20px" gap="8px" justify="center" align="center">
        <Title order={3} style={{ fontSize: '24px', color: '#333' }}>
          Login
        </Title>
      </Flex>

      <form
        method="post"
        onSubmit={onSubmit}
        action="/api/auth/callback/credentials"
        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <FormInput
          control={form.control}
          name="email"
          label="Username"
          loading={loading}
        />

        <FormInput
          control={form.control}
          name="password"
          label="Password"
          type="password"
          loading={loading}
        />

        <Button
          fullWidth
          type="submit"
          mt="xl"
          loading={loading}
          disabled={loading}
          variant='filled'
        >
          Login
        </Button>
      </form>
    </Paper>
  )
}
