import { theme } from '@/libs/theme'
import type { ReactChildren } from '@/libs/types'
import { Container } from '@mantine/core'

export const MainContainer = ({ children }: ReactChildren) => {
  return (
    <Container className="h-full" size={theme.other.maxApplicationWidth}>
      {children}
    </Container>
  )
}
