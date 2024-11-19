import { Paper, type PaperProps } from '@mantine/core'
import type { PropsWithChildren } from 'react'
import classes from './MainPaper.module.css'

type MainPaperProps = PaperProps & PropsWithChildren

export function MainPaper({ children, ...props }: MainPaperProps) {
  return (
    <Paper className={classes.paper} {...props} radius={'none'}>
      {children}
    </Paper>
  )
}
