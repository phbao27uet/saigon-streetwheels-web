import { cn } from '@/libs/utils'
import { Image } from '@mantine/core'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <div>
      <Image src="/images/logo.jpg" alt="logo" className={cn('', className)} />
    </div>
  )
}
