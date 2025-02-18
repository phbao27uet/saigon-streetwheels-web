'use client'

import { cn } from '@/libs/utils'
import { Container } from '@mantine/core'
import { motion } from 'framer-motion'
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
    <Container size="xl" className={cn('flex flex-col gap-8', className)}>
      {title && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'text-3xl font-bold text-[#C13332] text-center uppercase font-alike',
            titleClassName,
          )}
        >
          {title}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </Container>
  )
}
