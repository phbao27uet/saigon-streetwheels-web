import { Container } from '@mantine/core'

interface SectionProps {
  title: string
}

export const Section = ({
  title,
  children,
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <Container size="md" className="flex flex-col gap-4 py-10">
      <p className="text-3xl font-bold text-white text-center">{title}</p>
      {children}
    </Container>
  )
}
