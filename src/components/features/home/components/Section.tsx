import { cn } from '@/libs/utils'
import { Container } from '@mantine/core'
import type { ClassNameValue } from 'tailwind-merge'

interface SectionProps {
  title: string
  titleClassName?: ClassNameValue
  className?: ClassNameValue
}

export const Section = ({
  title,
  children,
  className,
  titleClassName,
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <Container size="md" className={cn('flex flex-col gap-4 py-10', className)}>
      <p
        className={cn(
          'text-3xl font-bold text-white text-center',
          titleClassName,
        )}
      >
        {title}
      </p>
      {children}
    </Container>
  )
}
