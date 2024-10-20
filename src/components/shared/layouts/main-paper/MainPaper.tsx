import { Paper, PaperProps } from '@mantine/core';
import { PropsWithChildren } from 'react';
import classes from './MainPaper.module.css';
import React from 'react';

type MainPaperProps = PaperProps & PropsWithChildren;

export function MainPaper({ children, ...props }: MainPaperProps) {
  return (
    <Paper className={classes.paper} {...props} radius={'none'}>
      {children}
    </Paper>
  );
}
