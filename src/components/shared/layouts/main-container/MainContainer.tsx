import { theme } from '@/libs/theme'
import type { ReactChildren } from '@/libs/types'
import { cn } from '@/libs/utils'
import { Container } from '@mantine/core'

export const MainContainer = ({
  children,
  className,
}: ReactChildren & { className?: string }) => {
  return (
    <Container
      className={cn('h-full', className)}
      size={theme.other.maxApplicationWidth}
    >
      {children}
    </Container>
  )
}
