import { theme } from '@/libs/theme';
import { ReactChildren } from '@/libs/types';
import { Container } from '@mantine/core';
import React from 'react';

export const MainContainer = ({ children }: ReactChildren) => {
  return (
    <Container className="h-full" size={theme.other.maxApplicationWidth}>
      {children}
    </Container>
  );
};
